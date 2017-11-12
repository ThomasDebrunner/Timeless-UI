import React from 'react'
import { Row, Col } from 'react-bootstrap'
import BezierEditor from 'bezier-easing-editor'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import Display from '../containers/Display'


export default ({
  blockNr, frame, transition, lhandSliderPosition, shandSliderPosition, setAbsolute, setTransition,
}) => (
  <div>
    {blockNr}
    <Row>
      <Col sm={12}><Display frame={frame} selectable /></Col>
    </Row>
    <Row>
      <Col sm={4}><BezierEditor value={transition} onChange={setTransition} /></Col>
      <Col sm={8}>
        <div>
          <Slider max={360} value={lhandSliderPosition} onChange={v => setAbsolute(v, true)} />
          <Slider max={360} value={shandSliderPosition} onChange={v => setAbsolute(v, false)} />
        </div>
        <div>
          { /* <ButtonGroup>
            <Button>ABSOLUTE</Button>
            <Button>RELATIVE</Button>
          </ButtonGroup>
          <span style={{ width: '20px', display: 'inline-block' }} />
          <ButtonGroup>
            <Button>CIRCLE</Button>
            <Button>STAR</Button>
          </ButtonGroup> */ }
        </div>
      </Col>
    </Row>
  </div>
)
