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
            <Header inverted as="h1">
              About us
            </Header>
            <p>
            Our mission is to strive towards ensuring that one day all animals in Lebanon will get the chance to live safely and securely. It’s our goal to educate individuals and take direct action to help animals in Lebanon live the life they deserve, for we all belong to this planet and it is home to all of us..
            </p>
            <Button size="huge">Learn more</Button>
          </Container>
          <Segment inverted vertical as="footer">
            Cover template for <a href="http://semantic-ui.com">Semantic-UI</a>,
            by{" "}
            <a href="https://github.com/semantic-ui-forest">
              @Semantic-UI-Forest
            </a>
            .
          </Segment>
        </Segment>
      </div>
    );
  }
}

export default HomepageLayout;