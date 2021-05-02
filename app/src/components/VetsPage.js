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
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class VetsPage extends Component {
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
      <div className = "textd2">Vets</div>
      
       
      </div>
      </AnimatedBg>
      <div className = "textbody"  >
<div>At Pet Shelter, we want to help you find 24/7 veterinarians in</div>
<div>Lebanon. If you’re a pet parent, you know that finding help when it</div>
<div>concerns your dog or cat can be overwhelming and confusing. Whether</div>
<div>you need an answer to a question, pet supplies and food, or urgent</div>
<div>medical care for your pet, it helps to know where to reach out when you</div>
<div>are facing a problem. We at Pet Shelter know how much you care about the</div>
<div>well-being of your pets, and so we’ve assembled a non-exhaustive list of</div>
<div>veterinarians and pet care centers across Lebanon who are available 24/7</div>
       

      </div>
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

        <div className = "textheader">ANIMALIFE VETERINARY HOSPITAL – Dr. Michel Salameh</div>
        
      <div className = "Image">
      <Image  src="animallifehospital.png"/>
      </div>
      <div className = "textbody">
          <div>Location: Hazmieh</div>
          <div>Phone:  +961 03 414 070</div>
          <div>Emergency phone: +961 03 41 40 70</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
      
      
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26505.31979083919!2d35.53419!3d33.859639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f3e9c19502e091e!2sAnimalife%20Veterinary%20Hospital!5e0!3m2!1sen!2slb!4v1617881201008!5m2!1sen!2slb" frameborder="0"
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

        <div className = "textheader">HAPPY PUPPY – Dr. Ihab Abboud</div>
        
      <div className = "Image">
      <Image  src="happypuppy.png"/>
      </div>
      <div className = "textbody">
          <div>Location: Zouk Mikhael</div>
          <div>Phone: +961 70 106 781</div>
          <div>Emergency phone: +961 70 10 67 81</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
      
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6617.734997366043!2d35.621299!3d33.970245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcac656942b734475!2sDr.%20Ihab%20Abboud-%20Happy%20Puppy!5e0!3m2!1sen!2slb!4v1617882617827!5m2!1sen!2slb" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">HEALTHY PET HOSPITAL – Dr. Chadi Tarek</div>
        
      <div className = "Image">
      <Image  src="healthypethospital.png"/>
      </div>
      <div className = "textbody">
          <div>Location: Amchit</div>
          <div>Phone: +961 09 548 115</div>
          <div>Emergency phone: +961 03 51 78 31</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
     
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26420.285716507256!2d35.647021!3d34.132634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd9dc1cdde432c0b!2sHealthy%20Pet%20Hospital!5e0!3m2!1sen!2slb!4v1617882819269!5m2!1sen!2slb" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">LES ACACIAS BEIRUT PET HOSPITAL – Dr. Maher Yehia</div>
        
      <div className = "Image">
      <Image  src="acaciapethospital.png"/>
      </div>
      <div className = "textbody">
          <div>Location: Verdun</div>
          <div>Phone: +961  01 868 669</div>
          <div>Emergency phone: +961 01 86 86 69</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
    
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26496.211796595006!2d35.482459!3d33.888972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x742ec27e9b434020!2sLes%20Acacias%20Beirut%20Pet%20Hospital!5e0!3m2!1sen!2slb!4v1617883112801!5m2!1sen!2slb" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">MAMALIA VETERINARY CLINIC – Dr. Marc Kassab</div>
        
      <div className = "Image">
      <Image  src="mamaliavet.png"/>
      </div>
      <div className = "textbody">
          <div>Location: Ashrafieh</div>
          <div>Phone: +961 05 95 14 64</div>
          <div>Emergency phone: +961 03 166 626</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
      
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26497.2532658581!2d35.522805!3d33.885619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1cf63bf04d0ae2d6!2sMamalia%20Veterinary%20Clinic!5e0!3m2!1sen!2slb!4v1617883553207!5m2!1sen!2slb" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">PAW – Dr. Jad Nachar</div>
        
      <div className = "Image">
      <Image  src="paw.png"/>
      </div>
      <div className = "textbody">
          <div>Location: Koura</div>
          <div>Phone: +961 71 000 136</div>
          <div>Emergency phone: +961 71 000 136</div>
      </div>
      <div class="view view-cascade gradient-card-header peach-gradient">
      </div>
     
      
        <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26368.542170923723!2d35.838749!3d34.297817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x674f0103ce3b19f8!2sPAW%20Dr%20Jad%20Nachar%20Vet%20Hospital!5e0!3m2!1sen!2slb!4v1617884749907!5m2!1sen!2slb" frameborder="0"
             allowfullscreen = "allowfullscreen"></iframe>
        </div>

        <div className = "textheader">PET CARE VETERINARY CLINIC – Dr. Ali Hemadeh</div>
        
        <div className = "Image">
        <Image  src="petcarevet.png"/>
        </div>
        <div className = "textbody">
            <div>Location: Manara</div>
            <div>Phone: +961 01 752 343</div>
            <div>Emergency phone: +961 03 62 30 83</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
       
       
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26493.59793973198!2d35.474463!3d33.897386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70e611fc431232a8!2sPet%20Care!5e0!3m2!1sen!2slb!4v1617884987575!5m2!1sen!2slb" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>

          <div className = "textheader">PET PALACE – Dr. Ihab Chaaban</div>
        
        <div className = "Image">
        <Image  src="petpalace.png"/>
        </div>
        <div className = "textbody">
            <div>Location: Saifi</div>
            <div>Phone: +961 01 218 245</div>
            <div>Emergency phone: +961 03 81 82 45</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
       
        
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26495.032929039407!2d35.509818!3d33.892767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8f9216a3f7d9f3b!2sPet%20Palace!5e0!3m2!1sen!2slb!4v1617885515008!5m2!1sen!2slb" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>

          <div className = "textheader">SANTÉ ANIMALE – Dr. Laurent Mouawad</div>
        
        <div className = "Image">
        <Image  src="santeanimal.png"/>
        </div>
        <div className = "textbody">
            <div>Location: Zouk Mosbeh</div>
            <div>Phone: +961 09 226 949</div>
            <div>Emergency phone: +961 03 90 31 58</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
       
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6618.868689032837!2d35.61122!3d33.955674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f7eed667bd774c9!2sSant%C3%A9%20Animale!5e0!3m2!1sen!2slb!4v1617885726746!5m2!1sen!2slb" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>

          <div className = "textheader">VET CARE – Dr. Jean Chalhoub</div>
        
        <div className = "Image">
        <Image  src="jeanvetcare.png"/>
        </div>
        <div className = "textbody">
            <div>Location: Kornet Chehwan</div>
            <div>Phone: +961 04 915 941</div>
            <div>Emergency phone: +961 71 83 83 27</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
        
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6621.543704019509!2d35.633615!3d33.921271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65b84bad2355df62!2sVetCare%20-%20Veterinary%20Clinic!5e0!3m2!1sen!2slb!4v1617885990986!5m2!1sen!2slb" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>

          <div className = "textheader">V.I. PET ANIMAL CENTER – Dr. Ricardos Saad</div>
        
        <div className = "Image">
        <Image  src="petanimalcenter.png"/>
        </div>
        <div className = "textbody">
            <div>Location: Ramlet al Bayda</div>
            <div>Phone: +961 01 792 090</div>
            <div>Emergency phone: +961 01 792 090</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
        
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6624.92753190569!2d35.483229!3d33.877708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3f724104eced783!2sV.I.Pet%20Animal%20Center!5e0!3m2!1sen!2slb!4v1617886281394!5m2!1sen!2slb" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>

          <div className = "textheader">Vet Clinic - Dr. Rami Rifi</div>
        
        <div className = "Image">
        <Image  src="vetclinic.png"/>
        </div>
        <div className = "textbody">
            <div>Location: Tripoli</div>
            
       
            <div>Phone: +961 06 431 401</div>
            <div>Emergency phone: +961 06 431 401</div>
        </div>
        <div class="view view-cascade gradient-card-header peach-gradient">
        </div>
        
          <div id="map-container-google-9" class="z-depth-1-half map-container-5" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13161.565888853615!2d35.82616627666017!3d34.44220927645664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cc4cb06b29a559d!2svet%20clinic%2C%20Dr%20Rami%20Rifi!5e0!3m2!1sen!2ssa!4v1618238926221!5m2!1sen!2ssa" frameborder="0"
               allowfullscreen = "allowfullscreen"></iframe>
          </div>
<div className ="textbody2">
<div>We hope this collection of veterinarians, emergency contacts, and pet</div>
<div>care centers across Lebanon will prove to be useful for you and your pets.</div>

<div>*Pet Shelter does not endorse nor is affiliated to any of the above mentioned veterinarian and pet care centers.</div>
</div>
    </div>
     
   
  );
  }

}
export default VetsPage;
