import React from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = props => {
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Billion Dashboard</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => ({
  path: state.routing.location.pathname
})

export default connect(
  mapStateToProps,
  null
)(Navigation)
