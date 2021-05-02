import React, { Component } from 'react';
import { getDogs } from "../actions/actions";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import actions from '../redux/actions/dogs';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../App.css';
import Particles from "react-tsparticles";
import { Container, Header, Menu, Segment, Dropdown } from "semantic-ui-react";
import "../App2.css";
class DogsPage extends Component {
    constructor(){
        super();

        this.fillForm = this.fillForm.bind(this);
        this.state = {
         // data: []
        };
    }
   
    componentDidMount() {
      document.body.style = 'background: rgb(51, 51, 51);';
      this.props.dispatch(actions.getDogs());
      console.log(actions.getDogs())
       // this.retrieveUsers();
    }

    actionFormatter(cell) {
      return (
        
        <div style = {{
          backgroundColor : 'black'
        }} className={``}>
          
          <Button size="lg"   style = {{backgroundColor: '#ffe4b5', height: '150px', width: '80px' }}variant="outline-dark" onClick={()=>this.editDetails(cell)} block>Adopt
         
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
        color: 'red'
      };
  
        return (
          

          <div className="container">
            <div className="App"style ={{height:"18vh"}} >
        <Segment inverted vertical textAlign="center" style ={{height:"17vh"}}>
        
          <Container as="nav">
            <Header inverted as="h1">
              Pet Shelter
            </Header>
            <Menu borderless compact inverted>
              <Menu.Item href = "/">Home</Menu.Item>
              <Menu.Item href = "/ReportPet">Report a lost pet</Menu.Item>
              <Menu.Item href = "/LostPetsPage">View lost pets</Menu.Item>
              <Dropdown item text='Adopt'>
              <Dropdown.Menu>
              <Dropdown.Item href = "/DogsPage">Adopt a dog</Dropdown.Item>
              <Dropdown.Item href = "/CatsPage">Adopt a cat</Dropdown.Item>
            </Dropdown.Menu>
                </Dropdown>
                <Menu.Item href = "/PetsStores">Shops</Menu.Item>
              <Menu.Item href = "/VetsPage">Vets</Menu.Item>
                <Menu.Item href = "/Login">Login</Menu.Item>
              <Menu.Item href = "/registration">Register</Menu.Item>
            </Menu>
          </Container>
         
        </Segment>
      </div>
        <BootstrapTable bordered={false} data={this.props.dog} version="4" pagination options={options}
                search tableContainerClass={`table`}
                selectRow={selectRow} >
{/* d-flex flex-column */}

                <TableHeaderColumn width="200px" columnClassName="table-warning" dataField="dogImage" dataFormat ={imageFormatter}>
                Dog Image
                </TableHeaderColumn>



                <TableHeaderColumn width="50px" columnClassName="table-warning" dataField="dogid" isKey>
                id
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-warning"dataField="dogName" dataSort>
                dogname
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-warning"dataField="breed">
                breed
                </TableHeaderColumn>

                <TableHeaderColumn width="170px"columnClassName="table-warning" dataField="DOB">
                DOB
                </TableHeaderColumn>

                <TableHeaderColumn width="85px"columnClassName="table-warning" dataField="sex">
                sex
                </TableHeaderColumn>

                <TableHeaderColumn width="150px"columnClassName="table-warning" dataField="color">
                color
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-warning"dataField="size">
                size
                </TableHeaderColumn>

                <TableHeaderColumn width="135px" columnClassName="table-warning"dataField="description">
                description
                </TableHeaderColumn>

               



                <TableHeaderColumn width="100px"columnClassName="table-warning" dataField="dogid" dataFormat={this.actionFormatter.bind(this)}>
                  
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

function imageFormatter(cell, row){
  return "<img width = 100% src='"+cell+" '/> " ;
}
