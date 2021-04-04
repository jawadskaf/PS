import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {updateHealthcareProduct,addHealthcareProduct} from "../actions/actions";

class HealthcareForm extends Component {

  constructor(props){
    super(props);
    this.UpdateHealthcareProducts = this.UpdateHealthcareProducts.bind(this);
    this.state = {
        healthcareid: "",
        healthcareproduct: "",
        healthcarequantity:"",
        userid: "",
        data: [],

  };
  }

  componentDidMount(){
     
  }
  handlehealthcareidChange= (event) => {
    event.preventDefault();
    this.setState({ healthcareid: event.target.value });
};

  handlecareproductChange= (event) => {
    event.preventDefault();
    this.setState({ healthcareproduct: event.target.value });
};


handlehealthcarequantityChange = (event) => {
    event.preventDefault();
    this.setState({ healthcarequantity: event.target.value });
};
handleuseridChange = (event) => {
    event.preventDefault();
    this.setState({ userid: event.target.value });
};


UpdateHealthcareProducts = () =>
{
    const {healthcareid} = this.state;
        const {healthcareproduct} = this.state;
        const {healthcarequantity} = this.state;
       const {userid} = this.state;

   let data = {
    healthcareid: healthcareid,
    healthcareproduct: healthcareproduct,
    healthcarequantity: healthcarequantity,
       userid: userid,  
   }
   updateHealthcareProduct(data).then((res) =>{
        try{
            alert("You have successfully updated");
            this.props.history.push("/getHealthcareProduct");
        }catch(error){
            console.log("Error while updating" + error);

        }
        
   })
};

AddHealthcareProductFunction = (event) => {
  event.preventDefault();
  const {healthcareproduct} = this.state;
  const {healthcarequantity} = this.state;
 const {userid} = this.state;
    let healthcareid = "";

  if (this.props.location.state === undefined) {
   
        
        addHealthcareProduct({healthcareproduct,healthcarequantity,userid})
      .then((res) => {
        this.props.history.push("/Home");
      })
      .catch((err) => {
        alert(err);
      });
  } else {
    healthcareid = this.props.location.state.healthcareid;

    updateHealthcareProduct({healthcareid,healthcareproduct,healthcarequantity,userid})
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
        
        <h1>Healthcare Form</h1>

        {/* <div className="form-group">
          <label className ="id">HealthCare ID</label>
          <input className="form-control" type="number" id="healthcareid" onChange={this.handlehealthcareidChange} />
        </div> */}
        <div className="form-group">
          <label className="healthcareproduct">HealthCare Product</label>
          <input className="form-control" type="text" id="healthcareproduct" onChange={this.handlecareproductChange}/>
        </div>
        <div className="form-group">
          <label className="healthcarequantity">HealthCare Quantity</label>
          <input className="form-control" type="number" id="healthcarequantity" onChange={this.handlehealthcarequantityChange}/>
        </div>

        <div className="form-group">
          <label className="gname">User ID</label>
          <input className="form-control" type="number" id="userid" onChange={this.handleuseridChange}/>
        </div>
        <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={this.AddHealthcareProductFunction}>Submit</button>
        <Link to='/'>
                         <button type="button" className="btn btn-dark btn-lg btn-block">Dismiss</button>
                        
                       </Link>
      </div>



    );
  }
}

export default HealthcareForm;
