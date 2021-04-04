import React, { Component } from 'react';
// import { deleteUser } from "../actions/actions";
import {Link} from 'react-router-dom'

import { getOrders} from "../actions/actions";
import { deleteMedOrder } from "../actions/actions";
import { getUsers } from "../actions/actions";
import {connect} from 'react-redux';
import actions from '../redux/actions/medicine';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class MedicineOrderPage extends Component {
    constructor(){
        super();
        // this.deleteRecord = this.deleteRecord.bind(this);
        this.fillForm = this.fillForm.bind(this);
        this.state = {
         
        };
    }
   
    componentDidMount() {
      this.props.dispatch(actions.getOrders());
        // this.retrieveUsers();
    }

    actionFormatter(cell) {
      return (
        
        <div className={`d-flex justify-content-between`}>
          <Button className="btn-secondary btn-sm" onClick={()=>this.editDetails(cell)}>Edit</Button>
          <Button
            className="btn-danger btn-sm"
            onClick={() => this.deleteRecord(cell)}
          >
            Delete
          </Button>
        </div>
       )
    }

    deleteRecord = cell =>{
      let medicineid = cell;
      console.log(medicineid)
      this.props.dispatch(actions.deleteMedOrder(medicineid));
    }
  
    editDetails = (cell) =>{
      this.props.meds.forEach((item)=>{
  
        if(item.medicineid === cell)
        {
          this.fillForm(item);
        }
      })
    }

    retrieveUsers = () => {
        getOrders().then((res) =>{
        this.setState({data: res});
        console.log(res);
    });
}

// deleteRecord = (event) => {
//   event.preventDefault();
//   let id = event.target.id;
//   let data ={
//     id:id,
//   }
//   console.log(data);
//   deleteMedOrder(data).then(res=>{
//       alert("user deleted");
//   }).catch(err=>{
//       alert("error deleting");
//   });
// };

// addRecord = () => event => {
//     event.preventDefault();
//     this.props.history.push("/UserForm");
//   };

// deleteRecord = (event) => {
//     event.preventDefault();
//     let medicineid = event.target.userid;
//     deleteMedOrder(medicineid).then(res=>{
//         alert("user deleted");
//     }).catch(err=>{
//         alert("error deleting");
//     });
// };




// deleteRecord = (event) => {
//     event.preventDefault();
//     let url = 'http://localhost:3001/deleteUser';
//     fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userid: event.target.userid,
//         })
// }).then((response) => response.json())
//       .then((responseJson) => {

//         alert(responseJson.value);
//         this.fetchUsers();

//       }).catch((error) => {
//         alert('Failed to Save.');
//       });
//   }

  fillForm = item => {
    this.props.history.push("/MedicineForm", {
      medicineid: item.medicineid,
      medicinename: item.medicinename,
      userid: item.userid,
    });
  }


    render() {

      const selectRow = {
        mode: 'radio',
        hideSelectColumn: true,
        clickToSelect: true,
        bgColor: 'green'
      };
      const options = {
        sortName: 'medicineid',
        sortOrder: 'asc',
        sizePerPage: 50,
        paginationSize: 5,
        sizePerPageDropDown: this.renderSizePerPageDropDown,
        prePage: 'Prev',
        nextPage: 'Next', 
      };
  
        return (

          <div className="container">
        <BootstrapTable bordered={false} data={this.props.meds} version="4" pagination options={options}
                search tableContainerClass={`table-striped table-bordered table-hover table-sm`}
                selectRow={selectRow} >

                <TableHeaderColumn width="100px" columnClassName="table-primary" dataField="medicineid" isKey>
                Med ID
                </TableHeaderColumn>

                <TableHeaderColumn width="150px" columnClassName="table-secondary" dataField="medicinename" dataSort>
                Med Name
                </TableHeaderColumn>

                <TableHeaderColumn width="150px" columnClassName="table-success" dataField="userid">
                User ID
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-danger" dataField="medicineid" dataFormat={this.actionFormatter.bind(this)}>
                  
                </TableHeaderColumn>
                
          </BootstrapTable>
      </div>

        );
        }  
}

const mapStateToProps = state =>({
  meds: state.medReducer.meds,
  delMessage: state.medReducer.delMessage,
  updateMessage: state.medReducer.updateMessage,
})
export default connect(mapStateToProps)(MedicineOrderPage);

