import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Modal from 'react-modal'

import Display from './Display'
import Timeline from '../containers/Timeline'

export default ({ editorOpen, closeEditor }) => (
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
    {/* EDITOR MODAL */}
    <Modal
      isOpen={editorOpen}
      contentLabel="Modal"
      onRequestClose={closeEditor}
    >
      <h1>Modal Content</h1>
      <p>Etc.</p>
    </Modal>

  </div>
)
