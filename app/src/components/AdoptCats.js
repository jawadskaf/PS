import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { adoptCat, getCats } from "../actions/actions";
import { connect } from 'react-redux';
import actions from '../redux/actions/cats';
import PhoneInput from 'react-phone-number-input/input'
import { Form, Button, FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";
import '../App.css';
class AdoptCats extends Component {
    constructor() {
        super();
        this.state = {
            catid: "",
            adoptCatid: "",
            username: "",
            address: "",
            email: "",
            phonenumber: "",
            DOB: "",
            house: "",
            familyDescription: "",
            animalAccess: "",
            pastCare: "",
            currentPets: "",
            description: "",
            


        };
    }

    componentDidMount() {
         this.props.dispatch(actions.getCats());
        let catid = ""
        let data ={
            catid: catid,
        }
    //    console.log(this.props.location.state.catid)
     
         
         
    }
    RegisterClickHandler = () =>
    {
       const {adoptCatid} = this.state;
       const {username} = this.state;
       const {address} = this.state;
       const {email} = this.state;
       const {phonenumber} = this.state;
       const {DOB} = this.state; 
       const {house} = this.state;
       const {familyDescription} = this.state;
       const {animalAccess} = this.state;
       const {pastCare} = this.state;
       const {currentPets} = this.state;
       const {description} = this.state;
      let catid = this.props.location.state.catid;
      console.log( catid)
       let data = {
           adoptCatid: adoptCatid,
           username: username,
           address: address,
           email: email,
           phonenumber: phonenumber,
           DOB: DOB,
           house: house,
           familyDescription: familyDescription,
           animalAccess: animalAccess,
           pastCare: pastCare,
           currentPets: currentPets,
           description: description,
           catid:catid,
           
       }
       this.props.dispatch(actions.adoptCat(data));
       if(this.props.createMessage){
           alert("cat adopted");
           this.redirectToHome()
       }
       else {
           alert("Couldnt adopt cat")
           this.redirectToHome()
       }
    };

    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/Home');
      }


    handleuseridChange = (event) => {
        event.preventDefault();
        this.setState({ adoptCatid: event.target.value });
    };


    handleNameChange = (event) => {
        event.preventDefault();
        this.setState({ username: event.target.value });
    };

    handleAddressChange = (event) => {
        event.preventDefault();
        this.setState({ address: event.target.value });
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

    handleHouseChange = (event) => {
        event.preventDefault();
        this.setState({ house: event.target.value });
    };

    handlefamilyDescriptionChange = (event) => {
        event.preventDefault();
        this.setState({ familyDescription: event.target.value });
    };

    handleanimalAccessChange = (event) => {
        event.preventDefault();
        this.setState({ animalAccess: event.target.value });
    };

    handlepastCareChange = (event) => {
        event.preventDefault();
        this.setState({ pastCare: event.target.value });
    };

    handlecurrentPetsChange = (event) => {
        event.preventDefault();
        this.setState({ currentPets: event.target.value });
    };

    handledescriptionChange = (event) => {
        event.preventDefault();
        this.setState({ description: event.target.value });
    };

    


    render() {
        return (
            <div
            className="bg_image"
            style={{
              backgroundImage: 'url("catbg.jpg")',
              backgroundSize: "cover",
              height: "200vh",
              
            }}
          > 
<div className="form">
<h2>Adoption Form</h2>
<h3>Please answer the following questions</h3>
          <Form>
         
              <Form.Row>
                  
              <Form.Group as={Col} >
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" 
                 placeholder="Enter username" 
                 id = "username"
                 className = "form-control"
                 onChange = {this.handleNameChange}
                 
                 
                 />
             </Form.Group>
             
            
             <Form.Group as={Col} >
      <Form.Label>Address</Form.Label>
      <Form.Control type="address" 
      placeholder="Enter Address"
      id = "address"
      className = "form-control"
      onChange = {this.handleAddressChange} />
    </Form.Group>

    
    
              </Form.Row>

              <Form.Row>
                  
                  <Form.Group as={Col} >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" 
                     placeholder="Enter email" 
                     id = "email"
                     className = "form-control"
                     onChange = {this.handleEmailChange}
                     
                     
                     />
                 </Form.Group>
                 
                
                 <Form.Group as={Col} >
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="number" 
          placeholder="Enter Phone number"
          id = "phonenumber"
          className = "form-control"
          onChange = {this.handlePhoneNumberChange} />
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
                 
                
                 <Form.Group as={Col}>
          <Form.Label>Do you Own -</Form.Label>
          Own 
          <Form.Control type="radio" 
          
          id = "house"
          value = "Own"
          checked = {this.state.house === "Own"}
          className = "form-control"
          onChange = {this.handleHouseChange} />
        
       
            
        </Form.Group>
        <Form.Group as={Col} >
        <Form.Label>- Rent a house ?</Form.Label>
        Rent
        <Form.Control type="radio" 
          id = "house"
          value = "Rent"
          checked = {this.state.house === "Rent"}
          className = "form-control"
          onChange = {this.handleHouseChange} />
        </Form.Group>
         
                  </Form.Row>

         

          <Form.Row>
                  
                  <Form.Group as={Col}>
                    <Form.Label>Tell us about your family (adults and children living in your home or visiting regularly).</Form.Label>
                    <textarea type="familyDescription" 
                     placeholder="Enter your famiy description" 
                     id = "familyDescription"
                     className = "form-control"
                     onChange = {this.handlefamilyDescriptionChange}
                    rows = {3}
                  
                     
                     
                     />
                 </Form.Group>
        
                  </Form.Row>
                  <Form.Label>Will the animal have access to Open Balconies or Gardens ?</Form.Label>
                  <Form.Row>
                  
                  <Form.Group as={Col} >
                    
                    <span>Yes</span>
                    <Form.Control type="radio"
                    value = "Yes"
                     checked = {this.state.animalAccess === "Yes"}
                     id = "animalAccess"
                     className = "form-control"
                     onChange = {this.handleanimalAccessChange}
                  
                     
                     
                     />
                 </Form.Group>

                 <Form.Group as={Col} >
                    
                    <span>No</span>
                    <Form.Control type="radio"
                    value = "No"
                     checked = {this.state.animalAccess === "No"}
                     id = "animalAccess"
                     className = "form-control"
                     onChange = {this.handleanimalAccessChange}
                  
                     
                     
                     />
                 </Form.Group>
        
        
                  </Form.Row>

                  <Form.Label>Have you cared for any animals in the past ?</Form.Label>
                  <Form.Row>
                  
                  <Form.Group as={Col} >
                    
                    <span>Yes</span>
                    <Form.Control type="radio"
                    value = "Yes"
                     checked = {this.state.pastCare === "Yes"}
                     id = "pastCare"
                     className = "form-control"
                     onChange = {this.handlepastCareChange}
                  
                     
                     
                     />
                 </Form.Group>

                 <Form.Group as={Col} >
                    
                    <span>No</span>
                    <Form.Control type="radio"
                    value = "No"
                     checked = {this.state.pastCare === "No"}
                     id = "pastCare"
                     className = "form-control"
                     onChange = {this.handlepastCareChange}
                  
                     
                     
                     />
                 </Form.Group>
        
        
                  </Form.Row>

                  <Form.Label>Do you currently have any cats, dogs or other animals?</Form.Label>
                  <Form.Row>
                  
                  <Form.Group as={Col} >
                    
                    <span>Yes</span>
                    <Form.Control type="radio"
                    value = "Yes"
                     checked = {this.state.currentPets === "Yes"}
                     id = "currentPets"
                     className = "form-control"
                     onChange = {this.handlecurrentPetsChange}
                  
                     
                     
                     />
                 </Form.Group>

                 <Form.Group as={Col} >
                    
                    <span>No</span>
                    <Form.Control type="radio"
                    value = "No"
                     checked = {this.state.currentPets === "No"}
                     id = "currentPets"
                     className = "form-control"
                     onChange = {this.handlecurrentPetsChange}
                  
                     
                     
                     />
                 </Form.Group>
        
        
                  </Form.Row>

                  <Form.Row>
                  
                  <Form.Group as={Col}>
                    <Form.Label>Any other information you would like to share ?</Form.Label>
                    <textarea type="description" 
                     placeholder="Tell us more..." 
                     id = "description"
                     className = "form-control"
                     onChange = {this.handledescriptionChange}
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
    cat: state.catReducer.cat,
    createMessage: state.catReducer.createMessage,
  })

export default connect(mapStateToProps)(AdoptCats);

