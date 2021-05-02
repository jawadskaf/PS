import React, { Component,useState,Switch,Text,AsyncStorage} from 'react';
import { getUsers, logIn } from "../actions/actions";
import '../css/Table.css';
import '../App.css';
import { GoogleLogin,responseGoogle } from 'react-google-login';
import { useGoogleLogin,onRequest,jsSrc,responseType,accessType,scope,uxMode,onFailure,redirectUri,discoveryDocs,isSignedIn,autoLoad,hostedDomain,loginHint,fetchBasicProfile,clientId,cookiePolicy,onAutoLoadFinished,onSuccess,loaded,signIn } from 'react-google-login'
import { MDBBtn, MDBIcon } from "mdbreact";
import BackgroundImage from "react-background-image";
class Loginpage extends Component {
    documentData;
    constructor() {
        
        super();
        
        this.state = {
            username: "",
            password: "",
            rememberMe: false,
            data: [],
        };
        
    }

    async componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('user and pass'));
        this.retrieveUsers();
        if (localStorage.getItem('user and pass')) {
            this.setState({
                username: this.documentData.username,
               password: this.documentData.password,
        })
    } else {
        this.setState({
            username: '',
            password: '',
        })
    }
        const username = await this.getRememberedUser();
        this.setState({ 
           username: username || "", 
           rememberMe: username ? true : false });
        }

    retrieveUsers = () => {
        getUsers().then((res) =>{
        this.setState({data: res});
        console.log(res);
    });
}
toggleRememberMe = value => {
    this.setState({ rememberMe: value })
      if (value === true) {
      this.rememberUser();
    } else {
      this.forgetUser();
    }
  }
  rememberUser = async () => {
    try {
      await AsyncStorage.setItem('username', this.state.username);
    } catch (error) {
    }
    };
    getRememberedUser = async () => {
    try {
      const username = await localStorage.getItem('username');
      if (username !== null) {
        return username;
      }
    } catch (error) {
    }
    };
    forgetUser = async () => {
      try {
        await AsyncStorage.removeItem('user and pass');
      } catch (error) {
      }
    };
    handleNameChange = (event) => {
        event.preventDefault();
        this.setState({ username: event.target.value });
    };

    handlePasswordChange = (event) => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    };

 


    authenticatorr = (event) => {
        event.preventDefault();
        const {username} = this.state;
        const{password} = this.state;
       
        let data = {
            username: username,
            password: password,
        }
        logIn(data).then((res) =>{
            console.log(res)
            
             if(res === true){
                 
                localStorage.setItem('username', username)
                localStorage.setItem('password',password)
                localStorage.setItem('user and pass',JSON.stringify(data))
                console.log(username)
                 alert("You have successfully logged in");
                 this.props.history.push("/");
             }
             else { 
                 alert("wrong username or password");
             }
             
        })
        
        
    };


    
    render() {
        
        return (

            <div
        class="bg_image"
        style={{
          backgroundImage: 'url("petshelterbg2.jpg")',
          backgroundSize: "cover",
          height: "95vh",
          
        }}
      >
            <div className="row mt-3">
             
               
                <div className="col-md-5 center">
               
                    <div className="card card-body">
                    <li className="navbar-brand">
                  
                     <a className="navbar-brand">
                      <img src="petshelterlogo.png" width="40%" className="floatright" alt=""></img>
                    </a>
                     </li>
                        <h1 className="text-center mb-3">
                        
                            <i className="fas fa-sign-in-alt">

                            </i>
                           
                Login
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
                                className="password"
                                className="form-control"
                                onChange= {this.handlePasswordChange}
                         />
                        </div>
                       


                        <div>
                         
                          </div>
                         
          
                        <button
                            id="1"
                            name="btn"
                            type="submit"
                            onClick= {this.authenticatorr}
                            className = "btn btn-success"
                        >
                            Login
                        
                        </button>

          
 

                        <p className = "lead mt-4">
                            Create Account <a href = "/registration">Register</a>
                        </p>
                        <p className = "lead mt-4">
                            Create Account <a href = "/">Log in later</a>
                        </p>
                        

                 </div>
                 </div >
                 </div > 
                 </div > 
    );
    }

}

export default Loginpage;

