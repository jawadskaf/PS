import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { getLabTest} from "../actions/actions";
import { deleteLabTest,updateLabTest } from "../actions/actions";

import {connect} from 'react-redux';
import actions from '../redux/actions/lab';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class LabTestReservations extends Component {
    constructor(){
        super();
        // this.deleteRecord = this.deleteRecord.bind(this);
        this.fillForm = this.fillForm.bind(this);
        this.state = {
   
        };
    }
   
    componentDidMount() {
      this.props.dispatch(actions.getLabTest());
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
      let labtestid = cell;
      console.log(labtestid)
      this.props.dispatch(actions.deleteLabTest(labtestid));
    }
  
    editDetails = (cell) =>{
      this.props.labs.forEach((item)=>{
  
        if(item.labtestid === cell)
        {
          this.fillForm(item);
        }
      })
    }

    retrieveUsers = () => {
        getLabTest().then((res) =>{
        this.setState({data: res});
        console.log(res);
    });
}


  fillForm = item =>  {
    this.props.history.push("/updateLabTest", {
      labtestid: item.labtestid,
      labtestdate: item.labtestdate,
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
        sortName: 'labtestid',
        sortOrder: 'asc',
        sizePerPage: 50,
        paginationSize: 5,
        sizePerPageDropDown: this.renderSizePerPageDropDown,
        prePage: 'Prev', // Previous page button text
        nextPage: 'Next', // Next page button text
      };
  
        return (

          <div className="container">
        <BootstrapTable bordered={false} data={this.props.labs} version="4" pagination options={options}
                search tableContainerClass={`table-striped table-bordered table-hover table-sm`}
                selectRow={selectRow} >

                <TableHeaderColumn width="100px" columnClassName="table-primary" dataField="labtestid" isKey>
                lab test ID
                </TableHeaderColumn>

                <TableHeaderColumn width="150px" columnClassName="table-secondary" dataField="labtestdate" dataSort>
                Test Date
                </TableHeaderColumn>

                <TableHeaderColumn width="150px" columnClassName="table-success" dataField="userid">
                User ID
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-danger" dataField="labtestid" dataFormat={this.actionFormatter.bind(this)}>
                  
                </TableHeaderColumn>
                
          </BootstrapTable>
      </div>

        );
      }
}
const mapStateToProps = state =>({
  labs: state.labReducer.labs,
  delMessage: state.labReducer.delMessage,
  updateMessage: state.labReducer.updateMessage,
})

export default connect(mapStateToProps)(LabTestReservations);

