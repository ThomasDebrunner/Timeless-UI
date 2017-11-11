import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Display from './Display'
import Timeline from '../containers/Timeline'

export default () => (
  <div className="custom-container">
    <Row>
      <Col xs={3}>
        <h3>Library</h3>
      </Col>
      <Col xs={9}>
        <h3>Display</h3>
        <Display />
      </Col>
    </Row>

    <Row>
      <Col xs={12}>
        <h3>Timeline</h3>
        <Timeline />
      </Col>
    </Row>
  </div>
)
