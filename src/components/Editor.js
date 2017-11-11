import React from 'react'
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import BezierEditor from 'bezier-easing-editor'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import Display from '../containers/Display'


export default () => (
  <div>
    <Row>
      <Col sm={12}><Display selectable /></Col>
    </Row>
    <Row>
      <Col sm={4}><BezierEditor value={[0.2, 0.2, 0.8, 0.8]} /></Col>
      <Col sm={8}>
        <div>
          <Slider value={100} max={360} />
          <Slider value={75} max={360} />
        </div>
        <div>
          <ButtonGroup>
            <Button>ABSOLUTE</Button>
            <Button>RELATIVE</Button>
          </ButtonGroup>
          <span style={{ width: '20px', display: 'inline-block' }} />
          <ButtonGroup>
            <Button>CIRCLE</Button>
            <Button>STAR</Button>
          </ButtonGroup>
        </div>
      </Col>
    </Row>
  </div>
)
