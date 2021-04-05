import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { reportPet, getLostPets } from "../actions/actions";
import { connect } from 'react-redux';
import actions from '../redux/actions/lostpets';
import PhoneInput from 'react-phone-number-input/input'
import { Form, Button, FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";
import '../App.css';
class ReportPet extends Component {
    constructor() {
        super();
        this.state = {
            petslostid:"",
            breed: "",
            petType: "",
            DOB: "",
            color: "",
            appearanceDescription: "",
            sex: "",
            dateMissing: "",
            circumstances: "",
            locationLost: "",
            username: "",
            phonenumber: "",
            email: "",
            otherDescription: "",
            latitude: "",
            longitude: "",

        };
        
    //    this.componentDidMount = this.componentDidMount.bind(this);
 
    }

    componentDidMount() {
         this.props.dispatch(actions.getLostPets());
         if ("geolocation" in navigator) {
            console.log("Available");
          } else {
            console.log("Not Available");
          }         
         
          if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
              console.log("Longitude is :", position.coords.longitude);
            //   this.state.latitude  = position.coords.latitude;
            //   console.log(this.state.latitue + " hello")
            //   this.longitude = position.coords.longitude;
            //   this.setState({longitude: this.longitude})
            //   console.log(this.longitude + " hello")
            //   this.locationLost = (this.latitue + this.longitude)
            //   console.log(this.locationLost)
            
        
        
               
               
            
            });
        }
        
    }
    RegisterClickHandler = () =>
    {
       
           
       const {petslostid} = this.state;
       const {breed} = this.state;
       const {petType} = this.state;
       const {DOB} = this.state;
       const {color} = this.state;
       const {appearanceDescription} = this.state;
       const {sex} = this.state;
       const {dateMissing} = this.state; 
       const {circumstances} = this.state;
       const {locationLost} = this.state;
       const {username} = this.state;
       const {phonenumber} = this.state;
       const {email} = this.state;
       const {otherDescription} = this.state;
   
   
    //    console.log(this.locationLost)
       let data = {
        petslostid: petslostid,
        breed: breed,
        petType: petType,
        DOB: DOB,
        color: color,
        appearanceDescription: appearanceDescription,
        sex: sex,
        dateMissing: dateMissing,
        circumstances: circumstances,
        locationLost: locationLost,
        username: username,
        phonenumber: phonenumber,
        email: email,
        otherDescription: otherDescription,
           
       }
       this.props.dispatch(actions.reportPet(data));
       if(this.props.createMessage){
           alert("pet lost reported !");
           this.redirectToHome()
       }
       else {
           alert("Couldnt report lost pet")
       }
   
    };
    

    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/Home');
      }


    handleuseridChange = (event) => {
        event.preventDefault();
        this.setState({ petslostid: event.target.value });
    };

    handlepetTypeChange = (event) => {
        event.preventDefault();
        this.setState({ petType: event.target.value });
    };



    handleNameChange = (event) => {
        event.preventDefault();
        this.setState({ username: event.target.value });
    };

    handleSexChange = (event) => {
        event.preventDefault();
        this.setState({ sex: event.target.value });
    };

    handleBreedChange = (event) => {
        event.preventDefault();
        this.setState({ breed: event.target.value });
    };

    handleEmailChange = (event) => {
        event.preventDefault();
        this.setState({ email: event.target.value });
    };

    handlePhoneNumberChange = (event) => {
        event.preventDefault();
        this.setState({ phonenumber: event.target.value });
    };

    handleDOBChange = (event) => {
        event.preventDefault();
        this.setState({ DOB: event.target.value });
    };

    handleDateMissingChange = (event) => {
        event.preventDefault();
        this.setState({ dateMissing: event.target.value });
    };

    handleColorChange = (event) => {
        event.preventDefault();
        this.setState({ color: event.target.value });
        
    };

    handleappearanceDescriptionChange = (event) => {
        event.preventDefault();
        this.setState({ appearanceDescription: event.target.value });
    };

    handleCircumstanesChange = (event) => {
        event.preventDefault();
        this.setState({ circumstances: event.target.value });
    };

    handlelocationLostChange = (event) => {
        event.preventDefault();
       
    };

   

    handleotherDescriptionChange = (event) => {
        event.preventDefault();
        this.setState({ otherDescription: event.target.value });
    };

    render() {
        return (
            <div
            class="bg_image"
            style={{
              backgroundImage: 'url("dogbg2.jpg")',
              backgroundSize: "cover",
              height: "200vh",
              
            }}
          > 
<div className="form">
<h2>Report a lost pet Form</h2>
<h3>Please fill the following questions</h3>
          <Form>
         
              <Form.Row>

              <Form.Group as={Col} >
      <Form.Label>Pet Type</Form.Label>
      <Form.Control type="petType" 
      placeholder="Enter your pet type"
      id = "petType"
      className = "form-control"
      onChange = {this.handlepetTypeChange} />
    </Form.Group>
                  
              <Form.Group as={Col} >
                <Form.Label>Breed</Form.Label>
                 <select className = "form-control" id = "breed" onChange = {this.handleBreedChange}>
                     <option value selected> - Please select if known - </option>
                     <option>Other - Unkown Breed</option>
                     <option>German Shepherd</option>
                     <option>Bulldog</option>
                     <option>Poodle</option>
                     <option>Labrador Retriever</option>
                     <option>Golden Retriever</option>
                     <option>Chihuahua</option>
                     <option>Dachshund</option>
                     <option>Siberian Husky</option>
                     <option>Rottweiler</option>
                     <option>French Bulldog</option>
                     <option>Greyhound</option>
                     <option>Great Dane</option>
                     <option>Pomeranian</option>
                     <option>Dobermann</option>
                     <option>Brnese Mountain Dog</option>
                     <option>Pembroke Welsh Corgi</option>
                     <option>Boston Terrier</option>
                     <option>Newfoundland</option>
                     <option>St. Bernard</option>
                     <option>Basset hound</option>
                     <option>Chow Chow</option>
                     <option>Shiba Inu</option>
                     <option>Jack Russell Terrier</option>
                     <option>Irish Setter</option>
                     <option>Gold Retriever</option>
                     <option>Irish Wolfhound</option>
                     <option>Pointer</option>
                     <option>Cane Corso</option>
                     <option>Samoyed</option>
                     <option>Sarabi dog</option>
                     <option>British Shorthair</option>
                     <option>American Shorthair</option>
                     <option>Maine Coon</option>
                     <option>Persian cat</option>
                     <option>Ragdoll</option>
                     <option>Siamese cat</option>
                     <option>Abyssinian</option>
                     <option>Bengal cat</option>
                     <option>Birman</option>
                     <option>Sphynx cat</option>
                     <option>Exotic Shorthair</option>
                     <option>Burmese cat</option>
                     <option>Japanese Bobtail</option>
                     <option>Bombay cat</option>
                     <option>Norwegian Forest cat</option>
                     <option>Scottish Fold</option>
                     <option>Siberian cat</option>
                     <option>Russian Blue</option>
                     <option>Manx cat</option>
                     <option>Devon Rex</option>
                     <option>American Bobtail</option>
                     <option>Balinese cat</option>
                     <option>Turksih Van</option>
                     <option>Savannah cat</option>
      </select>
             </Form.Group>
              
              </Form.Row>

              <Form.Row>

              <Form.Group as={Col} >
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control type="date" 
                     id = "DOB"
                     className = "form-control"
                     onChange = {this.handleDOBChange}
                     
                     
                     />
                 </Form.Group>
                  
                  
                 
                
                 <Form.Group as={Col} >
          <Form.Label>Pet Color</Form.Label>
          <Form.Control type="color" 
          placeholder="Enter Pet Color"
          id = "color"
          className = "form-control"
          onChange = {this.handleColorChange} />
        </Form.Group>

    
        
        
                  </Form.Row>

                  <Form.Row>

                  <Form.Group as={Col}>
                    <Form.Label>Describe your pet's appearance</Form.Label>
                    <textarea type="appearanceDescription" 
                     placeholder="Please give as much detail as possible about your pet that you can remember" 
                     id = "appearanceDescription"
                     className = "form-control"
                     onChange = {this.handleappearanceDescriptionChange}
                    rows = {3}
                  
                    
                     />
                 </Form.Group>
                 </Form.Row>
                 <Form.Label>What sex is your pet ?</Form.Label>
                  <Form.Row>
                  
                  <Form.Group as={Col} >
                    
                    <span>Male</span>
                    <Form.Control type="radio"
                    value = "Male"
                     checked = {this.state.sex === "Male"}
                     id = "sex"
                     className = "form-control"
                     onChange = {this.handleSexChange}
                  
                     
                     
                     />
                 </Form.Group>

                 <Form.Group as={Col} >
                    
                    <span>Female</span>
                    <Form.Control type="radio"
                    value = "Female"
                     checked = {this.state.sex === "Female"}
                     id = "sex"
                     className = "form-control"
                     onChange = {this.handleSexChange}
                  
                     
                     
                     />
                 </Form.Group>
        
                 
        
                  </Form.Row>
                 <Form.Row>
                 <Form.Group as={Col} >
                    <Form.Label>Date the pet went missing</Form.Label>
                    <Form.Control type="date" 
                     id = "dateMissing"
                     className = "form-control"
                     onChange = {this.handleDateMissingChange}
                     
                     
                     />
                 </Form.Group>

                 <Form.Group as={Col} >
                    <Form.Label>What were the circumstances?</Form.Label>
                     <select className = "form-control" id = "circumstances" onChange = {this.handleCircumstanesChange}>
                     <option value selected> - Other - </option>
                     <option>Disappeared from garden</option>
                     <option>Escaped from house</option>
                     <option>Escaped from vehicle in road accident</option>
                     <option>Escaped Other</option>
                     <option>Spooked - (scared by fireworks / other animal / other reason)</option>
                     <option>Stolen from garden</option>
                     <option>Stolen from vehicle</option>
                     <option>Stolen in burglary</option>
                     <option>Stolen Other</option>
      </select>
                 </Form.Group>
         
        </Form.Row>

         

          <Form.Row>

          <Form.Group as={Col} >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" 
                     placeholder="Enter your username" 
                     id = "username"
                     className = "form-control"
                     onChange = {this.handleNameChange}
                     
                     />
                 </Form.Group>

                 <Form.Group as={Col} >
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" 
                     placeholder="Enter your phone number" 
                     id = "phonenumber"
                     className = "form-control"
                     onChange = {this.handlePhoneNumberChange}
                     
                     />
                 </Form.Group>

                 {/* <Form.Group as={Col} >
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="locationLost" 
                     placeholder="Enter your Location lost" 
                     id = "locationLost"
                     className = "form-control"
                     onChange = {this.handlelocationLostChange}
                     
                     />
                 </Form.Group> */}
                 </Form.Row>
                 <Form.Row>
                 <button id="locationLost" type = "button" onClick = {this.loc} class="btn btn-info btn-sm">Share Location</button>
                


                  
          <Form.Group as={Col} >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" 
                     placeholder="Enter email" 
                     id = "email"
                     className = "form-control"
                     onChange = {this.handleEmailChange}
                     
                     
                     />
                 </Form.Group>
                 </Form.Row>
        
                  

                  
                  <Form.Row>
                  
                  <Form.Group as={Col}>
                    <Form.Label>Any other information you would like to share ?</Form.Label>
                    <textarea type="otherDescription" 
                     placeholder="Tell us more..." 
                     id = "otherDescription"
                     className = "form-control"
                     onChange = {this.handleotherDescriptionChange}
                    rows = {3}
                     
                     />
                 </Form.Group>
        
                  </Form.Row>
                  <button
                            id="1"
                            name="btn"
                            type="submit"
                            onClick= {this.RegisterClickHandler}
                            className = "btn btn-dark btn-block"
                        >
                            Adopt
                            
                        </button>

         
          </Form>
          </div>
            {/* <div className="row mt-3">
                <div className="col-md-5 center">
                    <div className="card card-body">
                    <li className="navbar-brand">
                     <a className="navbar-brand" >
                      <img src="petshelterlogo.png" width="40%" className="floatright" alt=""></img>
                    </a>
                     </li>
                        <h1 className="text-center mb-3">
                            <i className="fas fa-sign-in-alt">
                            </i>
                Register
                </h1>


                        <div className="form-group">
                            <label>username</label>
                            <input
                                type="username"
                                id = "username"
                                className="form-control"
                                onChange = {this.handleNameChange}
                           />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                onChange= {this.handlePasswordChange}
                         />
                        </div>

                        <div className="form-group">
                            <label>age</label>
                            <input
                                type="date"
                                id= "age"
                                className="form-control"
                                onChange= {this.handleAgeChange}
                         />
                        </div>

                        <div className="form-group">
                            <label>address</label>
                            <input
                                type="address"
                                id = "address"
                                className="form-control"
                                onChange= {this.handleAddressChange}
                         />
                        </div>

                        <div className="form-group">
                            <label>email</label>
                            <input
                                type="email"
                                id= "email"
                                className="form-control"
                                onChange= {this.handleEmailChange}
                         />
                        </div>

                        <div className="form-group">
                            <label>phonenumber</label>
                            <input
                                type="number"
                                id = "phonenumber"
                                className="form-control"
                                onChange= {this.handlePhoneNumberChange}
                         />
                        </div>
                     

                        <button
                            id="1"
                            name="btn"
                            type="submit"
                            onClick= {this.RegisterClickHandler}
                            className = "btn btn-dark btn-block"
                        >
                            Register
                            
                        </button>

                        <p className = "lead mt-4">
                           Already registered? <a href = "/login">Login</a>
                        </p>

                        

                 </div>
                 </div >
                 </div >  */}
                 </div > 
                 
    );
    }

}
const mapStateToProps = state =>({
    lostpets: state.lostpetsReducer.lostpets,
    createMessage: state.lostpetsReducer.createMessage,
  })

export default connect(mapStateToProps)(ReportPet);