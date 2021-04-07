import React, {Component} from "react";
import ReactDOM from "react-dom";
import AnimatedBg from "react-animated-bg";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import '../App.css';
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import GoogleMapReact from 'google-map-react';
// import { createOpenLink } from 'react-native-open-maps';
// import openMap from 'react-native-open-maps';
// import MapView from 'react-native-maps';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class VetsPage extends Component {
  constructor(){
  super();
  this.state = {
 
  }
     this.defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  }
  componentDidMount() {
 

}

  imagesList = [
      
    'url("http://forevervets.com/wp-content/uploads/2019/12/Forever-Vets-Animal-Hospital_How-Often-Your-Pet-Needs-to-Visit-a-Veterinarian_IMAGE1.jpeg")',
    'url("https://www.cidrap.umn.edu/sites/default/files/public/styles/ss_media_popup/public/media/article/vet_examining_dog.jpg?itok=NLGI78bD")',
    'url("https://www.vets4pets.com/siteassets/species/dog/dog-with-bandage-on-paw-at-vets.jpg?width=1040")',
    'url("https://cdn2.comparethemarket.com/market/cms/cms-images/puppyfees_HxW0550x0450_62f001d2-5e31-4580-9634-36b8591e1fe7.jpeg")',
  ];
  render (){
    
   
  return (
   
    <div>
      <AnimatedBg
        colors={this.imagesList}
        duration={3}
        delay={1}
        timingFunction="ease-in-out"
        className="animated-section animated-images"
        
      >
        <div className="App">
          
    
        </div>
     
      <div className = "textd">
      <div className = "textd2">Vets</div>
      
       
      </div>
      </AnimatedBg>
      <div className = "textheader">ANIMAL HOUSE HOSPITAL – Dr.Elias Nicolas</div>
        
      <div className = "Image">
      <Image  src="animalhousehospital.png"/>
      </div>
      <div className = "textbody">
          <div>Location: Jal El Dib</div>
          <div>Phone: +961 1 89 00 01</div>
          <div>Emergency phone: +961 03 66 49 69</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
      

        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26492.457343721802!2d35.574457!3d33.901057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39684739a91298d5!2sAnimal%20House%20Hospital!5e0!3m2!1sen!2slb!4v1617816664782!5m2!1sen!2slb" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">ANIMAL LIFE VETERINARY CENTER – Dr. Rosemarie Jawhari</div>
        
      <div className = "Image">
      <Image  src="Animallife.png"/>
      </div>
      <div className = "textbody">
          <div>Location: Khalde</div>
          <div>Phone: +961 05 80 83 53</div>
          <div>Emergency phone: +961 03 87 19 25</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
      

        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26526.226038738227!2d35.480906!3d33.792224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x353660fc8f1d29bd!2sAnimal%20Life%20Veterinary%20Center!5e0!3m2!1sen!2slb!4v1617822232034!5m2!1sen!2slb" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>


      


     
     

    </div>
     
   
    
  );
  }

}
export default VetsPage;
