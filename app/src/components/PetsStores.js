import React, {Component} from "react";
import ReactDOM from "react-dom";
import AnimatedBg from "react-animated-bg";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import '../App.css';
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { Container, Header, Menu, Segment, Dropdown } from "semantic-ui-react";
import "../App2.css";

class PetsStores extends Component {
  constructor(){
  super();
  this.state = {
 
  }
    
 
  }
  componentDidMount() {
    document.body.style = 'background: #ECECEC;';

}

  imagesList = [
      
    'url("http://forevervets.com/wp-content/uploads/2019/12/Forever-Vets-Animal-Hospital_How-Often-Your-Pet-Needs-to-Visit-a-Veterinarian_IMAGE1.jpeg")',
    'url("https://www.cidrap.umn.edu/sites/default/files/public/styles/ss_media_popup/public/media/article/vet_examining_dog.jpg?itok=NLGI78bD")',
    'url("https://www.vets4pets.com/siteassets/species/dog/dog-with-bandage-on-paw-at-vets.jpg?width=1040")',
    'url("https://cdn2.comparethemarket.com/market/cms/cms-images/puppyfees_HxW0550x0450_62f001d2-5e31-4580-9634-36b8591e1fe7.jpeg")',
  ];
  render (){
    
   
  return (
   
    <div style={{
      backgroundColor: 'WHITE',
      
    }}>
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
        duration={3}
        delay={1}
        timingFunction="ease-in-out"
        className="animated-section animated-images"
        
      >
        <div className="App">
          
    
        </div>
     
      <div className = "textd">
      <div className = "textd2">Shops</div>
      
       
      </div>
      </AnimatedBg>
      <div className = "textbody"  >
<div>At Pet Shelter, we want to help you find pet stores in</div>
<div>Lebanon that gives you, your pet needs. If you’re a pet parent</div>
<div>you need pet supplies and food for your pet. It helps to know</div>
<div>where to find them. We at Pet Shelter know how much you love</div>
<div>your pet and getting them their needs,and so we’ve assembled </div>
<div>a non-exhaustive list of stores that provides the needs for your pets</div>
<div>that are across Lebanon </div>
       

      </div>
      <div className = "textheader">Canipets</div>
     
      <div className = "Image">
      <Image  src="canipets.png"/>
      </div>
      <div className = "textbody">
          <div>Location: fanar</div>
          <div>Phone: +961 71 072 627</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
      

        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72815.49172554685!2d35.5894404203349!3d33.88152301193509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3dc0937a4b59%3A0xc8de04aea1177379!2sCanipets!5e0!3m2!1sen!2ssa!4v1618334697277!5m2!1sen!2ssa" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">VetoMall</div>
        
      <div className = "Image">
      <Image src="vetomall.jpg"/>
      </div>
      <div className = "textbody">
          <div>Location: Jounieh</div>
          <div>Phone: +961 81 999 830</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
         
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13232.310196966835!2d35.6428619!3d33.9905418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a0502f4165d3d64!2sVetoMall%20%7C%20Pet%20Store!5e0!3m2!1sen!2ssa!4v1618336770415!5m2!1sen!2ssa" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">Pet Zone</div>
        
      <div className = "Image">
      <Image  src="Petzone.png"/>
      </div>
      <div className = "textbody">
          <div>Location: Beirut</div>
          <div>Phone: +961 3 107 447</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
    
      

        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13248.958245644842!2d35.4969019!3d33.8834836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2f1af3b52af19e9!2sPet%20Zone!5e0!3m2!1sen!2ssa!4v1618337064868!5m2!1sen!2ssa" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">Pet Mart</div>
        
      <div className = "Image">
      <Image  src="petmart.png"/>
      </div>
      <div className = "textbody">
          <div>Location: Jal El Dib</div>
          <div>Phone: +961 4 721 019</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
      
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13245.37823495756!2d35.5754654!3d33.9065306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d906112e6e62830!2sPet%20Mart!5e0!3m2!1sen!2ssa!4v1618337697087!5m2!1sen!2ssa" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">Boubob Pets Shop</div>
        
      <div className = "Image">
      <Image  src="boubob.jpg"/>
      </div>
      <div className = "textbody">
          <div>Location: Tripoli</div>
          <div>Phone: +961 03 561 881</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
     
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.61763531259!2d35.844846115223845!3d34.38564408051649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f909ca429f6d%3A0xfc9edb9d6757b7d6!2sBoubob%20Pets%20Shop!5e0!3m2!1sen!2ssa!4v1618337895065!5m2!1sen!2ssa" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">Classy Pets</div>
        
      <div className = "Image">
      <Image  src="classypets.jpg"/>
      </div>
      <div className = "textbody">
          <div>Location: Chekka</div>
          <div>Phone: +961 76 378 479</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
    
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13180.10500743892!2d35.732549468200695!3d34.32435082086127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3fc4a4e779a3caa!2sClassy%20Pets!5e0!3m2!1sen!2ssa!4v1618338656084!5m2!1sen!2ssa" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">Don Perro</div>
        
      <div className = "Image">
      <Image  src="donperro.jpg"/>
      </div>
      <div className = "textbody">
          <div>Location: Zgharta</div>
          <div>Phone: +961 71 661 011</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
      
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13169.557305415374!2d35.897625!3d34.391449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x56d8197384aa51ec!2sDon%20Perro!5e0!3m2!1sen!2ssa!4v1618339118683!5m2!1sen!2ssa" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">Lodge Of Paws</div>
        
      <div className = "Image">
      <Image  src="lodgeofpaws.jpg"/>
      </div>
      <div className = "textbody">
          <div>Location: Jbeil</div>
          <div>Phone: +961 76 171 001</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13210.455888985149!2d35.6672852!3d34.1306311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x292cad746c7e42f!2sLodge%20Of%20Paws!5e0!3m2!1sen!2ssa!4v1618339749653!5m2!1sen!2ssa" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">Jungle Pets</div>
        
        <div className = "Image">
        <Image  src="junglepets.jpg"/>
        </div>
        <div className = "textbody">
            <div>Location: Jounieh</div>
            <div>Phone: +961 3 013 556</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
       
       
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7868.973931861227!2d35.62411082871764!3d33.979791912450466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f4096b9f5115f%3A0x95bbfda0758776a!2sJungle%20Pets!5e0!3m2!1sen!2ssa!4v1618340268286!5m2!1sen!2ssa" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>

          <div className = "textheader">PEGASUS Pets Shop</div>
        
        <div className = "Image">
        <Image  src="pegasus.png"/>
        </div>
        <div className = "textbody">
            <div>Location: Beirut</div>
            <div>Phone: +961 1 756 234</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
       
  
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26496.396802865413!2d35.487535312689204!3d33.88837639547907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb13bcda530f61ce!2sPEGASUS%20Pets%20Shop!5e0!3m2!1sen!2ssa!4v1618340624795!5m2!1sen!2ssa" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>

          <div className = "textheader">Petsmondo</div>
        
        <div className = "Image">
        <Image  src="petsmondo.jpg"/>
        </div>
        <div className = "textbody">
            <div>Location: Tripoli</div>
            <div>Phone: +961 71 370 737</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
       
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13164.13473631177!2d35.8299636!3d34.4258995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b981e6fd060c3ad!2sPetsmondo!5e0!3m2!1sen!2ssa!4v1618341616018!5m2!1sen!2ssa" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>

          <div className = "textheader">Northvet</div>
        
        <div className = "Image">
        <Image  src="northvet.jpg"/>
        </div>
        <div className = "textbody">
            <div>Location: Chekka</div>
            <div>Phone: +961 70 238 454</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
       
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13180.099230780485!2d35.7393723!3d34.3243876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x854b7a4013243a26!2sNorthvet!5e0!3m2!1sen!2ssa!4v1618341973462!5m2!1sen!2ssa" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>

          <div className = "textheader">Animal Feeds Company</div>
        
        <div className = "Image">
        <Image  src="afc.jpg"/>
        </div>
        <div className = "textbody">
            <div>Location: Mina</div>
            <div>Phone: +961 06 203 015</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
        
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13160.523537685373!2d35.8213507!3d34.4488253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd9dd0e7cbdea6bc7!2sAnimal%20Feeds%20Company!5e0!3m2!1sen!2ssa!4v1618342728406!5m2!1sen!2ssa" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>

         
<div className ="textbody2">
<div>We hope this collection of pet stores across Lebanon</div>
<div> will prove to be useful for you and your pets.</div>

<div>*Pet Shelter does not endorse nor is affiliated to any of the above mentioned pet stores.</div>
</div>
    </div>
     
   
  );
  }

}
export default PetsStores;
