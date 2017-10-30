import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export default props => (
  <div className='container'>
    <Jumbotron>
      <h1>Counter: {props.count}</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p>
        <Button bsStyle="primary" onClick={props.increment}>Action increment</Button>
      </p>
    </Jumbotron>
  </div>
)
