import React from 'react';
import './App.css';
import Todos from './Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import MyForm from './MyForm'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Todo List</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
  <MyForm />

      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>



      <Todos />
     
    </div>
  );
}

export default App;
