import React, { Component } from 'react';
import { getDogs } from "../actions/actions";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import actions from '../redux/actions/dogs';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../App.css';
import Particles from "react-tsparticles";
class DogsPage extends Component {
    constructor(){
        super();

        this.fillForm = this.fillForm.bind(this);
        this.state = {
         // data: []
        };
    }
   
    componentDidMount() {
      this.props.dispatch(actions.getDogs());
      console.log(actions.getDogs())
       // this.retrieveUsers();
    }

    actionFormatter(cell) {
      return (
        
        <div className={`d-flex justify-content-between`}>
          
          <Button className="btn-secondary btn-sm" onClick={()=>this.editDetails(cell)}>Adopt
         
          </Button>
          
          {/* <Button
            className="btn-danger btn-sm"
            onClick={() => this.deleteRecord(cell)}
          >
            Delete
          </Button> */}
        </div>
       )
    }

    // deleteRecord = cell =>{
    //   let dogid = cell;
    //   console.log(dogid)
    //   this.props.dispatch(actions.deleteUser(userid));
    // }
  
    editDetails = (cell) =>{
      this.props.dog.forEach((item)=>{
  
        if(item.dogid === cell)
        {
          this.fillForm(item);
        }
      })
    }

    retrieveUsers = () => {
        getDogs().then((res) =>{
        this.setState({data: res});
        console.log(res);
    });
}

  fillForm = item => {
    
    this.props.history.push("/AnimatedDogPage", {
      dogid: item.dogid,
      // username: item.username,
      // password: item.password,
      // age: item.age,
      // adress: item.address,
      // email: item.email,
      // phonenumber: item.phonenumber
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
        sortName: 'dogid',
        sortOrder: 'asc',
        sizePerPage: 50,
        paginationSize: 5,
        sizePerPageDropDown: this.renderSizePerPageDropDown,
        prePage: 'Prev', // Previous page button text
        nextPage: 'Next', // Next page button text
      };
  
        return (
          

          <div className="container">
        <BootstrapTable bordered={false} data={this.props.dog} version="4" pagination options={options}
                search tableContainerClass={`table-striped table-bordered table-hover table-sm `}
                selectRow={selectRow} >
{/* d-flex flex-column */}
                <TableHeaderColumn width="50px" columnClassName="table-primary" dataField="dogid" isKey>
                id
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-secondary"dataField="dogName" dataSort>
                dogname
                </TableHeaderColumn>

                <TableHeaderColumn width="150px" columnClassName="table-success"dataField="breed">
                breed
                </TableHeaderColumn>

                <TableHeaderColumn width="100px"columnClassName="table-danger" dataField="DOB">
                DOB
                </TableHeaderColumn>

                <TableHeaderColumn width="100px"columnClassName="table-warning" dataField="sex">
                sex
                </TableHeaderColumn>

                <TableHeaderColumn width="100px"columnClassName="table-info" dataField="color">
                color
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-light"dataField="size">
                size
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-light"dataField="description">
                description
                </TableHeaderColumn>



                <TableHeaderColumn width="100px"columnClassName="table-primary" dataField="dogid" dataFormat={this.actionFormatter.bind(this)}>
                  
                </TableHeaderColumn>
                
          </BootstrapTable>
          <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      </div>
      

        );
        }     
}

const mapStateToProps = state =>({
  dog: state.dogReducer.dog,
})
export default connect(mapStateToProps)(DogsPage);

