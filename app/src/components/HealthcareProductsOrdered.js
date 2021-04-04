import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { getHealthcareProduct} from "../actions/actions";
import { deleteHealthcareProduct,updateHealthcareProduct } from "../actions/actions";
import {connect} from 'react-redux';
import actions from '../redux/actions/healthcare';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class HealthcareProductsOrdered extends Component {
    constructor(){
        super();
        // this.deleteRecord = this.deleteRecord.bind(this);
        this.fillForm = this.fillForm.bind(this);
        this.state = {
        };
    }
   
    componentDidMount() {
      this.props.dispatch(actions.getHealthcareProduct());
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
      let healthcareid = cell;
      console.log(healthcareid)
      this.props.dispatch(actions.deleteHealthcareProduct(healthcareid));
    }
  
    editDetails = (cell) =>{
      this.props.healthcare.forEach((item)=>{
  
        if(item.healthcareid === cell)
        {
          this.fillForm(item);
        }
      })
    }

    retrieveUsers = () => {
        getHealthcareProduct().then((res) =>{
        this.setState({data: res});
        console.log(res);
    });
}


  fillForm = item => {
    this.props.history.push("/updateHealthcareProduct", {
      healthcareid: item.healthcareid,
      healthcareproduct: item.healthcareproduct,
      healthcarequantity: item.healthcarequantity,
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
        sortName: 'userid',
        sortOrder: 'asc',
        sizePerPage: 50,
        paginationSize: 5,
        sizePerPageDropDown: this.renderSizePerPageDropDown,
        prePage: 'Prev', // Previous page button text
        nextPage: 'Next', // Next page button text
      };
  
        return (

          <div className="container">
        <BootstrapTable bordered={false} data={this.props.healthcare} version="4" pagination options={options}
                search tableContainerClass={`table-striped table-bordered table-hover table-sm`}
                selectRow={selectRow} >

                <TableHeaderColumn width="100px" columnClassName="table-primary" dataField="healthcareid" isKey>
                Product ID
                </TableHeaderColumn>

                <TableHeaderColumn width="150px" columnClassName="table-secondary" dataField="healthcareproduct" dataSort>
                Healthcare Product
                </TableHeaderColumn>

                <TableHeaderColumn width="150px"  columnClassName="table-success" dataField="healthcarequantity">
                Quantity
                </TableHeaderColumn>

                <TableHeaderColumn width="150px" columnClassName="table-danger" dataField="userid">
                User ID
                </TableHeaderColumn>


                <TableHeaderColumn width="100px" columnClassName="table-warning" dataField="healthcareid" dataFormat={this.actionFormatter.bind(this)}>
                  
                </TableHeaderColumn>
                
          </BootstrapTable>
      </div>

        );
      }
}
const mapStateToProps = state =>({
  healthcare: state.healthcareReducer.healthcare,
  delMessage: state.healthcareReducer.delMessage,
  updateMessage: state.healthcareReducer.updateMessage,
})

export default connect(mapStateToProps)(HealthcareProductsOrdered);

