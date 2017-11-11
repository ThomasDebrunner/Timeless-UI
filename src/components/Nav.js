import React from 'react'
import { connect } from 'react-redux'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Timeless</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight />
      </Navbar.Collapse>
    </Navbar>
  </div>
)

const mapStateToProps = state => ({
  path: state.routing.location.pathname,
})

export default connect(
  mapStateToProps,
  null,
)(Navigation)
