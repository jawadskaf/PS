import React, { Component } from 'react';
import { getUsers } from "../actions/actions";
import { deleteUser } from "../actions/actions";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import actions from '../redux/actions/users';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class myProfilePage extends Component {
    constructor(){
        super();
        this.deleteRecord = this.deleteRecord.bind(this);
        this.fillForm = this.fillForm.bind(this);
        this.state = {
         // data: []
        };
    }
   
    componentDidMount() {
      this.props.dispatch(actions.getUsers());
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
      let userid = cell;
      console.log(userid)
      this.props.dispatch(actions.deleteUser(userid));
    }
  
    editDetails = (cell) =>{
      this.props.users.forEach((item)=>{
  
        if(item.userid === cell)
        {
          this.fillForm(item);
        }
      })
    }

    retrieveUsers = () => {
        getUsers().then((res) =>{
        this.setState({data: res});
        console.log(res);
    });
}

  fillForm = item => {
    this.props.history.push("/UserForm", {
      userid: item.userid,
      username: item.username,
      password: item.password,
      age: item.age,
      adress: item.address,
      email: item.email,
      phonenumber: item.phonenumber
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
        <BootstrapTable bordered={false} data={this.props.users} version="4" pagination options={options}
                search tableContainerClass={`table-striped table-bordered table-hover table-sm`}
                selectRow={selectRow} >

                <TableHeaderColumn width="100px" columnClassName="table-primary" dataField="userid" isKey>
                userid
                </TableHeaderColumn>

                <TableHeaderColumn width="150px" columnClassName="table-secondary"dataField="username" dataSort>
                Name
                </TableHeaderColumn>

                <TableHeaderColumn width="150px" columnClassName="table-success"dataField="password">
                Password
                </TableHeaderColumn>

                <TableHeaderColumn width="100px"columnClassName="table-danger" dataField="age">
                Age
                </TableHeaderColumn>

                <TableHeaderColumn width="100px"columnClassName="table-warning" dataField="address">
                Address
                </TableHeaderColumn>

                <TableHeaderColumn width="100px"columnClassName="table-info" dataField="email">
                Email
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-light"dataField="phonenumber">
                Phonenumber
                </TableHeaderColumn>

                <TableHeaderColumn width="100px"columnClassName="table-primary" dataField="userid" dataFormat={this.actionFormatter.bind(this)}>
                  
                </TableHeaderColumn>
                
          </BootstrapTable>
      </div>

        );
        }     
}

const mapStateToProps = state =>({
  users: state.userReducer.users,
  delMessage: state.userReducer.delMessage,
  updateMessage: state.userReducer.updateMessage,
})
export default connect(mapStateToProps)(myProfilePage);

