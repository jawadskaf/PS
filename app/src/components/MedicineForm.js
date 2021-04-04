import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {updateMedOrder,addMedOrder} from "../actions/actions";

class MedicineForm extends Component {

  constructor(props){
    super(props);
    this.UpdateMedOrderHandler = this.UpdateMedOrderHandler.bind(this);
    this.state = {
      medicineid: "",
      medicinename: "",
      userid: "",
      data:[],

  };
  }

  componentDidMount(){
     
  }

  handlemedicineidChange = (event) => {
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


UpdateMedOrderHandler = () =>
{
   const {medicineid} = this.state;
   const {medicinename} = this.state;
   const {userid} = this.state;

   let data = {
       medicineid: medicineid,
       medicinename: medicinename,  
       userid: userid,  
   }
   updateMedOrder(data).then((res) =>{
        try{
            alert("You have successfully updated");
            this.props.history.push("/Home");
        }catch(error){
            console.log("Error while updating" + error);
            // return;
        }
        
   })
};

AddMedOrderFunction = (event) => {
  event.preventDefault();
  const {userid} = this.state;
  const {medicinename} = this.state;
    let medicineid = "";
    let data = {
      
        medicineid: medicineid,
        medicinename: medicinename,
        userid: userid,   
    }
    console.log(data)

  if (this.props.location.state === undefined) {
    //add User
        
        addMedOrder({medicinename,userid})
      .then((res) => {
        this.props.history.push("/Home");
      })
      .catch((err) => {
        alert(err);
      });
  } else {
    medicineid = this.props.location.state.medicineid;
    //update User the ID is set
    console.log(data)
    updateMedOrder({medicineid,medicinename,userid})
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
        
        <h1>Medicine Form</h1>
        {/* <div className="form-group">
          <label className ="medicineid">medicineid</label>
          <input className="form-control" type="number" id="medicineid" onChange={this.handlemedicineidChange} />
        </div> */}
        <div className="form-group">
          <label className="gname">medicinename</label>
          <input className="form-control" type="text" id="medicinename" onChange={this.handlemedicinenameChange}/>
        </div>

        <div className="form-group">
          <label className="gname">userid</label>
          <input className="form-control" type="number" id="userid" onChange={this.handleuseridChange}/>
        </div>
        <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={this.AddMedOrderFunction}>Submit</button>
        <Link to='/'>
                         <button type="button" className="btn btn-dark btn-lg btn-block">Dismiss</button>
                        
                       </Link>
      </div>



    );
  }
}

export default MedicineForm;
