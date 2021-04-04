import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {updateUser,registerUser} from "../actions/actions";



class UserForm extends Component {

  constructor(props){
    super(props);
    // This binding is necessary to make `this` work in the callback

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.UpdateClickHandler = this.UpdateClickHandler(this);
    this.state = {
      userid: "",
      username: "",
      password: "",
      age: "",
      address: "",
      email: "",
      phonenumber: "",
      data:[],

  };
  }

  componentDidMount(){
     
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
  
// updateRecord = (event) => {
//   event.preventDefault();
//   let userid = event.target.userid;
//   deleteUser(userid).then(res=>{
//       alert("user deleted");
//   }).catch(err=>{
//       alert("error deleting");
//   });
// };
 

// handleChange(event) {    this.setState(
//   {userid: event.target.value},
//   {username: event.target.value},
//   {password: event.target.value},
//   {age: event.target.value},
//   {address: event.target.value},
//   {email: event.target.value},
//   {phonenumber: event.target.value},
//   );  }


// handleSubmit(event) {
//   alert('A name was submitted: ' + this.state.userid + this.state.username + this.state.password + this.state.age + this.state.address + this.state.email + this.state.phonenumber);
//   event.preventDefault();
// }

UpdateClickHandler = () =>
    {
     
    // let f = event.target.id;
    // //console.log(userid)
    // console.log(event.target.userid)
    // console.log(event.target.id)
    //console.log(id)
       const {userid} = this.state;
       const {username} = this.state;
       const {password} = this.state;
       const {age} = this.state;
       const {address} = this.state;
       const {email} = this.state; 
       const {phonenumber} = this.state;
       let data = {
         
         //userid:userid,
         
           userid: userid,
           username: username,
           password: password,
           age: age,
           address: address,
           email: email,
           phonenumber: phonenumber,     
           
       }
       console.log(data)
       updateUser(data).then((res) =>{
            try{
                alert("You have successfully updated");
                this.props.history.push("/Home");
            }catch(error){
                console.log("Error while updating" + error);
                // return;
            }
            
       })
    };

    UserRegistrationFunction = (event) => {
      event.preventDefault();
       const {username} = this.state;
       const {password} = this.state;
       const {age} = this.state;
       const {address} = this.state;
       const {email} = this.state; 
       const {phonenumber} = this.state;
        let userid = "";
        let data = {
         
          //userid:userid,
          
            userid: userid,
            username: username,
            password: password,
            age: age,
            address: address,
            email: email,
            phonenumber: phonenumber,     
            
        }
        console.log(data)
  
      if (this.props.location.state === undefined) {
        //add User
            
            registerUser({username,password,age,address,email,phonenumber})
          .then((res) => {
            this.props.history.push("/Home");
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        userid = this.props.location.state.userid;
        //update User the ID is set
        console.log(data)
        updateUser({userid,username,password,age,address,email,phonenumber})
          .then((res) => {
            this.props.history.push("/Home");
          })
          .catch((err) => {
            alert(err);
          });
      }
    };


  render() {

    return (

        <div className="App">
        <h1>Users Data</h1>
        {/* <div className="form-group">
          <label className ="userid">User is</label>
          <input className="form-control" type="number" id="userid" onChange={this.handleuseridChange} />
        </div> */}
        <div className="form-group">
          <label className="username">user name</label>
          <input className="form-control" type="text" id="username" onChange={this.handleNameChange}/>
        </div>
        <div className="form-group">
          <label className="password">password</label>
          <input className="form-control" type="text" id="password" onChange={this.handlePasswordChange}/>
        </div>
        <div className="form-group">
          <label className="age">age</label>
          <input className="form-control" type="number" id="age" onChange={this.handleAgeChange}/>
        </div>
        <div className="form-group">
          <label className="address">address</label>
          <input className="form-control" type="text" id="address" onChange={this.handleAddressChange}/>
        </div>
        <div className="form-group">
          <label className="email">email</label>
          <input className="form-control" type="text" id="email" onChange={this.handleEmailChange}/>
        </div>
        <div className="form-group">
          <label className="phonenumber">phonenumber</label>
          <input className="form-control" type="number" id="phonenumber" onChange={this.handlePhoneNumberChange}/>
        </div>
        <button className="btn btn-dark btn-lg btn-block" id = "userid" type="submit" onClick={this.UserRegistrationFunction}>Submit</button>
        <Link to='/'>
                         <button type="button" className="btn btn-dark btn-lg btn-block">Dismiss</button>
                        
                       </Link>
      </div>

    );
  }
}

export default UserForm;
