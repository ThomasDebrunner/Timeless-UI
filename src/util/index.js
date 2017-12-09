import BezierEasing from 'bezier-easing'

export const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}


const grid = Array.from(
  { length: 9 },
  () => Array.from(
    { length: 15 },
    () => 0,
  ),
)

function shortestDistance(source, target) {
  if (target >= source) {
    if (Math.abs(target - source) <= Math.abs(target - (source + 360))) {
      return target - source
    }
    return target - (source + 360)
  }
  if (Math.abs(target - source) <= Math.abs((target + 360) - source)) {
    return target - source
  }
  return (target + 360) - source
}


export function getFrame(program, time) {
  // identify the relevant blocks
  let acc = 0
  let block = null
  let prevFrame = null
  let transitionPercentage = 0
  for (let i = 0; i < program.length; i += 1) {
    acc += program[i].duration
    if (acc >= time) {
      block = program[i]
      transitionPercentage = BezierEasing(...block.transition)((time - (acc - block.duration)) / block.duration)
      prevFrame = (program[i - 1] && program[i - 1].frame) || {}
      break
    }
  }
  if (!block) {
    return {}
  }

  const newFrame = {}
  // assemble frame
  grid.forEach((line, rowIdx) => line.forEach((_, colIdx) => {
    const key = `${colIdx}-${rowIdx}`

    const targetLhand = (block.frame[key] && block.frame[key].lhand) || 0
    const targetShand = (block.frame[key] && block.frame[key].shand) || 0
    const sourceLhand = (prevFrame[key] && prevFrame[key].lhand) || 0
    const sourceShand = (prevFrame[key] && prevFrame[key].shand) || 0

    const travelLhand = shortestDistance(sourceLhand, targetLhand)
    const travelShand = shortestDistance(sourceShand, targetShand)


    newFrame[key] = {
      shand: (sourceShand + travelShand * transitionPercentage) % 360,
      lhand: (sourceLhand + travelLhand * transitionPercentage) % 360,
    }
  }))
  return newFrame
}
