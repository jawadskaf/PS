import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { addHealthcareProduct } from "../actions/actions";
import { connect } from 'react-redux';
import actions from '../redux/actions/healthcare';


class HealthcareAddOrder extends Component {
    constructor() {
        super();
        this.state = {
            healthcareid: "",
            healthcareproduct: "",
            healthcarequantity:"",
            userid: "",
            
        };
    }

    componentDidMount() {
        this.props.dispatch(actions.getHealthcareProduct());
    }
    addOrderHandler = () =>
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
       this.props.dispatch(actions.addHealthcareProduct(data));
       if(this.props.createMessage){
        alert("Healthcare product Added");
        this.redirectToHome()
    }
    else {
        alert("Couldnt Healthcare product")
    }
    };
    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/Home');
      }

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


  
    

    render() {
        
        return (
            <div className="row mt-5">
                <div className="col-md-6-m-auto">
                    <div className="card card-body">
                    <li className="navbar-brand">
                     <a className="navbar-brand" href="/Home">
                      <img src="pharmacylogo.png" width="100%" height="100%" className="floatright" alt=""></img>
                    </a>
                     </li>
                        <h1 className="text-center mb-3">
                            <i className="fas fa-sign-in-alt">
                            </i>
                Add Health care product
                </h1>
                         
                         <div className="form-group">
                            <label>Health Care Product Name</label>
                            <input
                                type="text"
                                id = "healthcareproduct"
                                className="form-control"
                                onChange = {this.handlecareproductChange}
                           />
                        </div>

                        <div className="form-group">
                            <label>Product Quantity</label>
                            <input
                                type="number"
                                id = "healthcarequantity"
                                className="form-control"
                                onChange = {this.handlehealthcarequantityChange}
                           />
                        </div>

                        <div className="form-group">
                            <label>User ID</label>
                            <input
                                type="number"
                                id = "userid"
                                className="form-control"
                                onChange = {this.handleuseridChange}
                           />
                        </div>

                 
                        <div>
                         <img src="PharmacyDesign.jpg" width = "100% height = 100%"></img>
                          </div>
                        <button
                            id="1"
                            name="btn"
                            type="submit"
                            onClick= {this.addOrderHandler}
                            className = "btn btn-dark btn-block"
                        >
                            Add New Health Care Product
                            
                        </button>

                        

                 </div>
                 </div >
                 </div > 
                 
    );
    }

}

const mapStateToProps = state =>({
    healthcare: state.healthcareReducer.healthcare,
    createMessage: state.healthcareReducer.createMessage,
  })


export default connect(mapStateToProps)(HealthcareAddOrder);

