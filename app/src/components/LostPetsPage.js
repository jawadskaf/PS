import React, { Component } from 'react';
import { getLostPets } from "../actions/actions";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import actions from '../redux/actions/lostpets';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../App.css';
import Particles from "react-tsparticles";
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
class LostPetsPage extends Component {
    constructor(){
        super();

        // this.fillForm = this.fillForm.bind(this);
        this.state = {
         // data: []
        };
    }
   
    componentDidMount() {
      this.props.dispatch(actions.getLostPets());
       // this.retrieveUsers();
    }

    // actionFormatter(cell) {
    //   return (
        
    //     <div className={`d-flex justify-content-between`}>
          
    //       <Button className="btn-secondary btn-sm" onClick={()=>this.editDetails(cell)}>Adopt
         
    //       </Button>
          
    //       {/* <Button
    //         className="btn-danger btn-sm"
    //         onClick={() => this.deleteRecord(cell)}
    //       >
    //         Delete
    //       </Button> */}
    //     </div>
    //    )
    // }

    // deleteRecord = cell =>{
    //   let dogid = cell;
    //   console.log(dogid)
    //   this.props.dispatch(actions.deleteUser(userid));
    // }
  
    // editDetails = (cell) =>{
    //   this.props.dog.forEach((item)=>{
  
    //     if(item.dogid === cell)
    //     {
    //       this.fillForm(item);
    //     }
    //   })
    // }

//     retrieveUsers = () => {
//         getDogs().then((res) =>{
//         this.setState({data: res});
//         console.log(res);
//     });
// }

//   fillForm = item => {
    
//     this.props.history.push("/AnimatedDogPage", {
//       dogid: item.dogid,
//       // username: item.username,
//       // password: item.password,
//       // age: item.age,
//       // adress: item.address,
//       // email: item.email,
//       // phonenumber: item.phonenumber
//     });
//   }

    render() {

      const selectRow = {
        mode: 'radio',
        hideSelectColumn: true,
        clickToSelect: true,
        bgColor: 'green'
      };
      const options = {
        sortName: 'petslostid',
        sortOrder: 'asc',
        sizePerPage: 10,
        paginationSize: 4,
        sizePerPageDropDown: this.renderSizePerPageDropDown,
        prePage: 'Prev', // Previous page button text
        nextPage: 'Next', // Next page button text
      };
  
        return (
          

          <div className="container">
        <BootstrapTable bordered={false} data={this.props.lostpets} version="4" pagination options={options}
                 search tableContainerClass={`table table-responsive`}
                selectRow={selectRow}
                
                
                >
{/* d-flex flex-column */}
                <TableHeaderColumn width = "50px"  columnClassName="table-primary" dataField="petslostid" isKey>
                 id
                </TableHeaderColumn>

                <TableHeaderColumn width = "125px" columnClassName="table-secondary"dataField="petType" dataSort>
                Pet Name
                </TableHeaderColumn>

                <TableHeaderColumn  width = "150px" columnClassName="table-success"dataField="breed">
                breed Type
                </TableHeaderColumn>

                <TableHeaderColumn width = "150px" columnClassName="table-danger" dataField="DOB">
                Pet Date of birth
                </TableHeaderColumn>

                <TableHeaderColumn width = "150px" columnClassName="table-warning" dataField="color">
                color
                </TableHeaderColumn>

                <TableHeaderColumn width = "150px" columnClassName="table-info" dataField="appearanceDescription">
                appearance description
                </TableHeaderColumn>

                <TableHeaderColumn  width = "150px" columnClassName="table-light"dataField="sex">
                sex
                </TableHeaderColumn>

                <TableHeaderColumn  width = "150px" columnClassName="table-light" dataField="dateMissing">
                date missing
                </TableHeaderColumn>

                <TableHeaderColumn  width = "150px" columnClassName="table-light"dataField="circumstances">
                circumstances
                </TableHeaderColumn>

                <TableHeaderColumn  width = "150px" columnClassName="table-light"dataField="locationLost">
                location Lost
                </TableHeaderColumn>

                <TableHeaderColumn  width = "150px" columnClassName="table-light"dataField="username">
                username
                </TableHeaderColumn>

                <TableHeaderColumn  width = "150px" columnClassName="table-light"dataField="phonenumber">
                phonenumber
                </TableHeaderColumn>

                <TableHeaderColumn  width = "150px" columnClassName="table-light"dataField="email">
                email
                </TableHeaderColumn>

                <TableHeaderColumn  width = "150px" columnClassName="table-light"dataField="otherDescription">
                other description
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
    lostpets: state.lostpetsReducer.lostpets,
})
export default connect(mapStateToProps)(LostPetsPage);
function rowClassNameFormat(row, rowIdx) {
    // row is whole row object
    // rowIdx is index of row
    return rowIdx % 2 === 0 ? 'td-column-function-even-example' : 'td-column-function-odd-example';
  }
