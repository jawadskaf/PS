import React, {Component} from "react";
import ReactDOM from "react-dom";
import AnimatedBg from "react-animated-bg";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import actions from '../redux/actions/dogs';
import { getDogs } from "../actions/actions";
import '../App.css';
import { supported } from "filepond";
import { Button } from "react-bootstrap";
import { Container, Header, Menu, Segment, Dropdown } from "semantic-ui-react";
import "../App2.css";
class AnimatedDogPage extends Component {
  constructor(){
  super();
  this.state = {
    dogid: "",
  }
  this.handleClickManager = this.handleClickManager.bind(this);
  }
  componentDidMount() {
    document.body.style = 'background: rgb(51, 51, 51);';
  this.state.dogid = this.props.location.state.dogid
  console.log(this.state.dogid)
}
 handleClickManager() {
  this.props.history.push("/AdoptDogs", {
    dogid: this.props.location.state.dogid

  });
}
   

  imagesList = [
    'url("https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg")',
    'url("https://images.dog.ceo/breeds/labrador/n02099712_5844.jpg")',
    'url("https://images.dog.ceo/breeds/labrador/n02099712_7481.jpg")',
    'url("https://images.dog.ceo/breeds/labrador/n02099712_7414.jpg")'
  ];
  // let dogid = this.props.location.state.dogid;
  render (){
    
   
  return (
   
    <div>
      <div className="App"style ={{height:"18vh"}} >
        <Segment inverted vertical textAlign="center" style ={{height:"17vh"}}>
        
          <Container as="nav">
            <Header inverted as="h1">
              Pet Shelter
            </Header>
            <Menu borderless compact inverted>
              <Menu.Item href = "/">Home</Menu.Item>
              <Menu.Item href = "/ReportPet">Report a lost pet</Menu.Item>
              <Menu.Item href = "/LostPetsPage">View lost pets</Menu.Item>
              <Dropdown item text='Adopt'>
              <Dropdown.Menu>
              <Dropdown.Item href = "/DogsPage">Adopt a dog</Dropdown.Item>
              <Dropdown.Item href = "/CatsPage">Adopt a cat</Dropdown.Item>
            </Dropdown.Menu>
                </Dropdown>
                <Menu.Item href = "/PetsStores">Shops</Menu.Item>
              <Menu.Item href = "/VetsPage">Vets</Menu.Item>
                <Menu.Item href = "/Login">Login</Menu.Item>
              <Menu.Item href = "/registration">Register</Menu.Item>
            </Menu>
          </Container>
         
        </Segment>
      </div>
      <AnimatedBg
        colors={this.imagesList}
        duration={2}
        delay={1}
        timingFunction="ease-out"
        className="animated-section animated-images"
        
      >
        <div className="App">
          
    
        </div>
     
      <div className = "textd">
      <div className = "textd2"> Before Adopting</div>
      <div>➤ Understand that adopting can be up to 10 years commitment and more</div>
      <div>➤ Be prepared for ongoing expenses and veterinary care</div>
      <div>➤ Agree that if for any reason the adoption does not work out then the animal will be returned to Pet Shelter</div>
      <div>➤ Complete the adoption application, providing contact details and information about the home you can provide</div>
      <div>➤ We will contact you to arrange a visit to see the available animals and may request additional information</div>
      <div>➤ We will do a home check to understand where the animal will live and answer any questions you may have</div>
      <div>➤ If everything seems great the adoption will be complete and you will sign an adoption agreement and can welcome the animal into your home</div>
      <div>➤ We will be available to help with any advice you need or answer any questions to make sure the adoption is rewarding and fun for you and the animal</div>
       
      </div>
      <Button variant="success" type="button" onClick={this.handleClickManager}>
      Accept and Continue to Adopt
    </Button>
      </AnimatedBg>
    </div>
    
  );
  }

}
export default AnimatedDogPage;
