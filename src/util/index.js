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
    newFrame[key] = {
      shand: sourceShand + (targetShand - sourceShand) * transitionPercentage,
      lhand: sourceLhand + (targetLhand - sourceLhand) * transitionPercentage,
    }
  }))
  return newFrame
}
