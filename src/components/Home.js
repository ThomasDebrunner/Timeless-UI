import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Modal from 'react-modal'

import Display from '../containers/Display'
import Timeline from '../containers/Timeline'
import Editor from '../containers/Editor'

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
      style={{ overlay: { zIndex: 1001 } }}
    >
      <Editor />
    </Modal>

  </div>
)
