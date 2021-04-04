import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { addMedOrder } from "../actions/actions";
import { connect } from 'react-redux';
import actions from '../redux/actions/medicine';

class MedOrderPage extends Component {
    constructor() {
        super();
        this.state = {
            medicineid: "",
            medicinename: "",
            userid: "",
        };
    }

    componentDidMount() {
        this.props.dispatch(actions.getOrders());
    }
    addOrderHandler = () =>
    {
    
        const {medicineid} = this.state;
       const {medicinename} = this.state;
       const {userid} = this.state;

       let data = {
         medicineid: medicineid,
           medicinename: medicinename,
           userid: userid,
         
       }
       this.props.dispatch(actions.addMedOrder(data));
       if(this.props.createMessage){
           alert("Meds Added");
           this.redirectToHome()
       }
       else {
           alert("Couldnt addMeds")
       }
    };

    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/Home');
      }


    handlemedicineidChange= (event) => {
        event.preventDefault();
        this.setState({ medicineid: event.target.value });
    };


    handlemedicinenameChange = (event) => {
        event.preventDefault();
        this.setState({ medicinename: event.target.value });
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
                Add medicine order
                </h1>
                    {/* <div className="form-group">
                            <label>medicineid</label>
                            <input
                                type="number"
                                id = "medicineid"
                                className="form-control"
                                onChange = {this.handlemedicineidChange}
                           />
                        </div> */}


                        <div className="form-group">
                            <label>medicinename</label>
                            <input
                                type="medicinename"
                                id = "medicinename"
                                className="form-control"
                                onChange = {this.handlemedicinenameChange}
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
                            Add New Medicine Order
                            
                        </button>

                        

                 </div>
                 </div >
                 </div > 
                 
    );
    }

}
const mapStateToProps = state =>({
    meds: state.medReducer.meds,
    createMessage: state.medReducer.createMessage,
  })

export default connect(mapStateToProps)(MedOrderPage);

