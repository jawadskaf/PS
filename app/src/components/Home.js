import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Nav, Navbar,Dropdown,DropdownButton, Container } from 'react-bootstrap'
import '../App.css';

class HomePage extends Component {
    constructor() {
      super();
      this.state = {
        username: "",
        password: "",
        data: []
    };
    }
    handleLogout = () => {
      this.setState({});
      this.setState({ username: "" });
      this.setState({ password: "" });
      localStorage.clear();
    };

    render() {
      return (

        <div>
          <link href="/GameOfThrones" rel="stylesheet" />
           <Navbar collapseOnSelect fixed="top" epand = "sm" bg="dark" variant="dark">
          <Container>
          <Navbar.Toggle aria-controls = 'responsive-navbar-nav'/>
          <Navbar.Collapse id = 'responsive-navbar-nav'>
          

           <a class="responsive-navbar-nav" href="/Home">
           
           
           {/* <Navbar.Brand href="/Home">Jawads Pharmacy</Navbar.Brand> */}
           Jawads Pharmacy
           </a>
           <DropdownButton id="dropdown-basic-button" title="Medicines Info">
          <Dropdown.Item href="/addMedOrder">New Medicine Order</Dropdown.Item>
          <Dropdown.Item href="/medicineOrder">Medicines ordered</Dropdown.Item>
          <Dropdown.Item href="/MedicineChartPage">Medicines Chart</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" className= "nav navbar-nav navbar-right" title="Users Info">
          <Dropdown.Item href="/registration">Register an Account</Dropdown.Item>
          <Dropdown.Item href="/login">Log in</Dropdown.Item>
          <Dropdown.Item href="/myProfile">Profiles</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Lab Test">
          <Dropdown.Item href="/addLabTest">New Reservation</Dropdown.Item>
          <Dropdown.Item href="/getLabTest">Lab Tests</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Healthcare Products">
          <Dropdown.Item href="/addHealthcareProduct">New Care Order</Dropdown.Item>
          <Dropdown.Item href="/getHealthcareProduct">Care products ordered</Dropdown.Item>
            </DropdownButton>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Nav className="mr-auto">
      <a href="/GameOfThrones" role="button" class="btn btn-danger navbar-btn">Game Of Thrones Books</a>
    
      

    </Nav>
    </Navbar.Collapse>
    </Container>
          </Navbar>
          

          <div>
            
              <img src="PharmacyDesign.jpg" width = "100% height = 100%"></img>
              </div>

              
  
  
          <h3 className="text-center display-2">
            Your Health is your Wealth
          </h3>

          
  
        </div>

        
      );
    }
  }
  
  export default HomePage;