import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { addLabTest } from "../actions/actions";
import { connect } from 'react-redux';
import actions from '../redux/actions/lab';


class LabtestAddOrder extends Component {
    constructor() {
        super();
        this.state = {
            labtestid: "",
            labtestdate: "",
            userid: "",
            
        };
    }

    componentDidMount() {
        this.props.dispatch(actions.getLabTest());
    }
    addOrderHandler = () =>
    {
       
        const {labtestid} = this.state;
        const {labtestdate} = this.state;
       const {userid} = this.state;

       let data = {
         labtestid: labtestid,
         labtestdate: labtestdate,
           userid: userid,
         
       }
       this.props.dispatch(actions.addLabTest(data));
       if(this.props.createMessage){
        alert("lab date product Added");
        this.redirectToHome()
    }
    else {
        alert("Couldnt add lab date product")
    }
       
    };

    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/Home');
      }

    handlelabtestidChange= (event) => {
        event.preventDefault();
        this.setState({ labtestid: event.target.value });
    };


    handlemlabtestdateChange = (event) => {
        event.preventDefault();
        this.setState({ labtestdate: event.target.value });
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
                Add Lab Reservation
                </h1>
                         
                         <div className="form-group">
                            <label>labtestdate</label>
                            <input
                                type="date"
                                id = "labtestdate"
                                className="form-control"
                                onChange = {this.handlemlabtestdateChange}
                           />
                        </div>

                        <div className="form-group">
                            <label>userid</label>
                            <input
                                type="number"
                                id = "userid"
                                className="form-control"
                                onChange = {this.handleuseridChange}
                           />
                        </div>

                        {/* <div className="form-group">
                            <label>address</label>
                            <input
                                type="address"
                                className="form-control"
                                onChange= {this.handleAddressChange}
                         />
                        </div> */}


                 
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
                            Add New Lab Reservation
                            
                        </button>

                        

                 </div>
                 </div >
                 </div > 
                 
    );
    }

}
const mapStateToProps = state =>({
    labs: state.labReducer.labs,
    createMessage: state.labReducer.createMessage,
  })

export default connect(mapStateToProps)(LabtestAddOrder);

