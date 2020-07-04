import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function HeaderComponent(props){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/"><img width="100" src="ucsblogo.png"/></NavbarBrand>
        <NavbarText className = "navtext">Social Perception Lab</NavbarText>
        <NavbarToggler onClick = {toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">People</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"> Publications</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"> Location</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>


      </Navbar>

      
    </div>
  );
}

export default HeaderComponent;
