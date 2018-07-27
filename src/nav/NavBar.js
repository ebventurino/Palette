import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav vertical>
          <NavItem>
            <NavLink  href="/">Photos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Favorites">Favorites</NavLink>
          </NavItem>
        </Nav>
                <Nav vertical>
        </Nav>
      </div>
    );
  }
}