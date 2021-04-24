import React, { Component } from 'react';
import { getCats } from "../actions/actions";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import actions from '../redux/actions/cats';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../App.css';
import Particles from "react-tsparticles";
import { Container, Header, Menu, Segment, Dropdown } from "semantic-ui-react";
import "../App2.css";
class CatsPage extends Component {
    constructor(){
        super();

        this.fillForm = this.fillForm.bind(this);
        this.state = {
         // data: []
        };
    }
   
    componentDidMount() {
      document.body.style = 'background: rgb(51, 51, 51);';
      this.props.dispatch(actions.getCats());
      console.log(actions.getCats())
       // this.retrieveUsers();
    }

    actionFormatter(cell) {
      return (
        
        <div className={``}>
          
          <Button size="lg" style = {{backgroundColor: 'pink', height: '150px', width: '80px' }}variant="outline-dark" onClick={()=>this.editDetails(cell)}>Adopt
         
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
      this.props.cat.forEach((item)=>{
  
        if(item.catid === cell)
        {
          this.fillForm(item);
        }
      })
    }

    retrieveUsers = () => {
        getCats().then((res) =>{
        this.setState({data: res});
        console.log(res);
    });
}

  fillForm = item => {
    
    this.props.history.push("/AnimatedCatPage", {
      catid: item.catid,
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
        sortName: 'catid',
        sortOrder: 'asc',
        sizePerPage: 50,
        paginationSize: 5,
        sizePerPageDropDown: this.renderSizePerPageDropDown,
        prePage: 'Prev', // Previous page button text
        nextPage: 'Next', // Next page button text
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
                <Menu.Item href = "/Login">Login</Menu.Item>
              <Menu.Item href = "/registration">Register</Menu.Item>
            </Menu>
          </Container>
         
        </Segment>
      </div>
        <BootstrapTable bordered={false} data={this.props.cat} version="4" pagination options={options}
                search tableContainerClass={`table `}
                selectRow={selectRow} >
{/* d-flex flex-column */}

                <TableHeaderColumn width="200px" columnClassName="table-danger" dataField="catImage" dataFormat ={imageFormatter}>
                Cat Image
                </TableHeaderColumn>


                <TableHeaderColumn width="50px" columnClassName="table-danger" dataField="catid" isKey>
                id
                </TableHeaderColumn>

                <TableHeaderColumn width="90px" columnClassName="table-danger"dataField="catName" dataSort>
                catname
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-danger"dataField="breed">
                breed
                </TableHeaderColumn>

                <TableHeaderColumn width="170px"columnClassName="table-danger" dataField="DOB">
                DOB
                </TableHeaderColumn>

                <TableHeaderColumn width="100px"columnClassName="table-danger" dataField="sex">
                sex
                </TableHeaderColumn>

                <TableHeaderColumn width="150px"columnClassName="table-danger" dataField="color">
                color
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-danger"dataField="size">
                size
                </TableHeaderColumn>

                <TableHeaderColumn width="100px" columnClassName="table-danger"dataField="description">
                description
                </TableHeaderColumn>



                <TableHeaderColumn width="100px"columnClassName="table-danger" dataField="catid" dataFormat={this.actionFormatter.bind(this)}>
                  
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
  cat: state.catReducer.cat,
})
export default connect(mapStateToProps)(CatsPage);

function imageFormatter(cell, row){
  return "<img width = 100% src='"+cell+" '/> " ;
}