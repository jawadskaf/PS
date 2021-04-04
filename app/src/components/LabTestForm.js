import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {updateLabTest,addLabTest} from "../actions/actions";

class LabTestForm extends Component {

  constructor(props){
    super(props);
    this.UpdateLabTestDate = this.UpdateLabTestDate.bind(this);
    this.state = {
      labtestid: "",
      labtestdate: "",
      userid: "",
      data: [],

  };
  }

  componentDidMount(){
     
  }

  handlelabtestidChange = (event) => {
    event.preventDefault();
    this.setState({ labtestid: event.target.value });
};


handlelabtestdateChange = (event) => {
    event.preventDefault();
    this.setState({ labtestdate: event.target.value });
};

handleuseridChange = (event) => {
  event.preventDefault();
  this.setState({ userid: event.target.value });
};


UpdateLabTestDate = () =>
{
   const {labtestid} = this.state;
   const {labtestdate} = this.state;
   const {userid} = this.state;

   let data = {
        labtestid: labtestid,
        labtestdate: labtestdate,  
        userid: userid,  
   }
   updateLabTest(data).then((res) =>{
        try{
            alert("You have successfully updated");
            this.props.history.push("/getLabTest");
        }catch(error){
            console.log("Error while updating" + error);
            // return;
        }
        
   })
};

AddLabTestFunction = (event) => {
  event.preventDefault();
  const {labtestdate} = this.state;
  const {userid} = this.state;
    let labtestid = "";
    let data = {
     
      //userid:userid,
      
      labtestid: labtestid,
      labtestdate: labtestdate,
      userid: userid,     
        
    }
    console.log(data)

  if (this.props.location.state === undefined) {
    //add User
        
        addLabTest({labtestdate,userid})
      .then((res) => {
        this.props.history.push("/Home");
      })
      .catch((err) => {
        alert(err);
      });
  } else {
    labtestid = this.props.location.state.labtestid;
    //update User the ID is set
    console.log(data)
    updateLabTest({labtestid,labtestdate,userid})
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
        
        <h1>Lab Form</h1>

        {/* <div className="form-group">
          <label className ="id">Lab ID</label>
          <input className="form-control" type="number" id="labtestid" onChange={this.handlelabtestidChange} />
        </div> */}
        <div className="form-group">
          <label className="gname">Reservation Date</label>
          <input className="form-control" type="date" id="labtestdate" onChange={this.handlelabtestdateChange}/>
        </div>

        <div className="form-group">
          <label className="gname">User ID</label>
          <input className="form-control" type="number" id="userid" onChange={this.handleuseridChange}/>
        </div>
        <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={this.AddLabTestFunction}>Submit</button>
        <Link to='/'>
                         <button type="button" className="btn btn-dark btn-lg btn-block">Dismiss</button>
                        
                       </Link>
      </div>



    );
  }
}

export default LabTestForm;
