import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import { Button, Container, Header, Menu, Segment, Dropdown } from "semantic-ui-react";

import "../App2.css";

class HomepageLayout extends Component {
     componentDidMount() {
    document.body.style = 'background: rgb(51, 51, 51);';

}

  render() {
    return (
      <div className="App">
        <Segment inverted vertical textAlign="center">
        
          <Container as="nav">
            <Header inverted as="h1">
              Pet Shelter
            </Header>
            <Menu borderless compact inverted>
              <Menu.Item active href = "/">Home</Menu.Item>
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
          <Container className="content">
          
            {/* <Header inverted as="h1">
            
              
            </Header> */}
            
            <h1 style = {{display:"flex",paddingInlineStart:"650px"}}>About us</h1>
            <img src={"https://i.pinimg.com/originals/6c/39/6f/6c396f5a89f2a7e28416adcf8e60fb19.jpg"}width="35%" style = {{float:"left"}} alt=""/>
            <p >
            Our mission is to strive towards ensuring that one day all animals in Lebanon will get the chance to live safely and securely. It’s our goal to educate individuals and take direct action to help animals in Lebanon live the life they deserve, for we all belong to this planet and it is home to all of us..
            </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <h1 style = {{display:"flex",paddingInlineStart:"300px"}}>HELP</h1>
            <img src={"https://i2.wp.com/amyshojai.com/wp-content/uploads/2019/08/LostPets-107314882_xl-2015.jpg?fit=1000%2C1000&ssl=1"}width="35%" style = {{float:"right"}} alt=""/>
            <p style = {{paddingRight: "300px"}} >
            We are so sorry to hear that your pet is missing.

            We can help locate your pet. Both our volunteers and the people accessing our website will work on finding your pet.
            
            Please click the button below to file a missing pet report so we can help you reunite you with your lost loved one. 

            </p>
            <Button href = "/ReportPet" size="huge">File a lost pet report</Button>

            <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <h1 style = {{display:"flex",paddingInlineStart:"650px"}}>HELP</h1>
            <img src={"https://i2.wp.com/amyshojai.com/wp-content/uploads/2019/08/LostPets-107314882_xl-2015.jpg?fit=1000%2C1000&ssl=1"}width="35%" style = {{float:"left"}} alt=""/>
            <p style = {{paddingLeft:"100px"}}>
            We are so sorry to hear that your pet is missing.

            We can help locate your pet. Both our volunteers and the people accessing our website will work on finding your pet.
            
            Please click the button below to file a missing pet report so we can help you reunite you with your lost loved one. 

            </p>
            <Button href = "/ReportPet" size="huge">File a lost pet report</Button>
          </Container>
          {/* <Segment inverted vertical as="footer">
            Cover template for <a href="http://semantic-ui.com">Semantic-UI</a>,
            by{" "}
            <a href="https://github.com/semantic-ui-forest">
              @Semantic-UI-Forest
            </a>
            .
          </Segment> */}
        </Segment>
      </div>
    );
  }
}

export default HomepageLayout;