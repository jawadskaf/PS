import React, {Component} from "react";
import ReactDOM from "react-dom";
import AnimatedBg from "react-animated-bg";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import actions from '../redux/actions/cats';
import { getCats } from "../actions/actions";
import '../App.css';
import { supported } from "filepond";
import { Button } from "react-bootstrap";

class AnimatedCatPage extends Component {
  constructor(){
  super();
  this.state = {
    catid: "",
  }
  this.handleClickManager = this.handleClickManager.bind(this);
  }
  componentDidMount() {
  this.state.catid = this.props.location.state.catid
  console.log(this.state.catid)
}
 handleClickManager() {
  this.props.history.push("/AdoptCats", {
    catid: this.props.location.state.catid

  });
}


  imagesList = [
    'url("https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png")',
    'url("https://www.sciencenews.org/wp-content/uploads/2019/07/072319_ee_cat-allergy_feat.jpg")',
    'url("https://media.nature.com/lw800/magazine-assets/d41586-020-02779-3/d41586-020-02779-3_18481780.jpg")',
    'url("https://images.newindianexpress.com/uploads/user/imagelibrary/2020/4/23/w1200X800/animal-cat-face-close-up-feline-416160.jpg")',
    'url("https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/cat-close-to-screen.jpg")',
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
      <div>➤ Understand that adopting can be a up to 10 years commitment and more</div>
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
export default AnimatedCatPage;
