import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { registerUser } from "../actions/actions";
import { connect } from 'react-redux';
import actions from '../redux/actions/users';
import PhoneInput from 'react-phone-number-input/input'
class RegistrationPage extends Component {
    constructor() {
        super();
        this.state = {
            userid: "",
            username: "",
            password: "",
            age: "",
            address: "",
            email: "",
            phonenumber: "",

        };
    }

    componentDidMount() {
         this.props.dispatch(actions.getUsers());
         
    }
    RegisterClickHandler = () =>
    {
       const {userid} = this.state;
       const {username} = this.state;
       const {password} = this.state;
       const {age} = this.state;
       const {address} = this.state;
       const {email} = this.state; 
       const {phonenumber} = this.state;
       let data = {
           userid: userid,
           username: username,
           password: password,
           age: age,
           address: address,
           email: email,
           phonenumber: phonenumber,
           
           
       }
       this.props.dispatch(actions.registerUser(data));
       if(this.props.createMessage){
           alert("User Added");
           this.redirectToHome()
       }
       else {
           alert("Couldnt add user")
           this.redirectToHome()
       }
    };

    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/');
      }


    handleuseridChange = (event) => {
        event.preventDefault();
        this.setState({ userid: event.target.value });
    };


    handleNameChange = (event) => {
        event.preventDefault();
        this.setState({ username: event.target.value });
    };

    handlePasswordChange = (event) => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    };

    handleAgeChange = (event) => {
        event.preventDefault();
        this.setState({ age: event.target.value });
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


    render() {
        return (
            <div
            class="bg_image"
            style={{
              backgroundImage: 'url("petshelterbg2.jpg")',
              backgroundSize: "cover",
              height: "170vh",
              
            }}
          > 
            <div className="row mt-3">
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
                        <p className = "lead mt-4">
                            Create Account <a href = "/">Sign up later</a>
                        </p>
                        

                 </div>
                 </div >
                 </div > 
                 </div > 
                 
    );
    }

}
const mapStateToProps = state =>({
    users: state.userReducer.users,
    createMessage: state.userReducer.createMessage,
  })

export default connect(mapStateToProps)(RegistrationPage);

