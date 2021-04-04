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

class AnimatedDogPage extends Component {
  constructor(){
  super();
  this.state = {
    dogid: "",
  }
  this.handleClickManager = this.handleClickManager.bind(this);
  }
  componentDidMount() {
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
      <div>➤ Be at least 18 years of age</div>
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
