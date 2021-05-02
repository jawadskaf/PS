import React, { Component } from "react";
import { connect } from 'react-redux';
import "semantic-ui-css/semantic.min.css";
import {Link} from 'react-router-dom'
// import {CardColumns,Card} from "card-react";
// import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';
import { Button, Container, Header, Menu, Segment, Dropdown } from "semantic-ui-react";
import { feedback } from "../actions/actions";
import Card from "react-bootstrap/Card";
import CardColumns from 'react-bootstrap/CardColumns'
import CardDeck from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
// import {Card,CardColumns} from 'react-bootstrap/Card'
import actions from '../redux/actions/feedbackk';
import "../App2.css";
import { Form, FormTextArea,FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";

class HomepageLayout extends Component {
  constructor() {
    super();
    this.state = {
      feedbackid: "",
        feedback:"",

    };
}
     componentDidMount() {
    document.body.style = 'background: rgb(51, 51, 51);';
}

FeedbackClickHandler = () =>
    {
       const {feedbackid} = this.state;
       const {feedback} = this.state;
       
      
       let data = {
           feedbackid: feedbackid,
           feedback:feedback,
           
       }
       this.props.dispatch(actions.feedback(data));
       if(this.props.createMessage){
           alert("feedback Added");
           this.redirectToHome()
       }
       else {
           alert("Couldnt add feedback")
       }
    };

    handleFedbackChange = (event) => {
      event.preventDefault();
      this.setState({ feedback: event.target.value });
  };

  redirectToHome = () => {
    const { history } = this.props;
    if(history) history.push('/');
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
                <Menu.Item href = "/PetsStores">Shops</Menu.Item>
              <Menu.Item href = "/VetsPage">Vets</Menu.Item>
                <Menu.Item href = "/Login">Login</Menu.Item>
              <Menu.Item href = "/registration">Register</Menu.Item>

            </Menu>
          </Container>

          <Container className="content">
          
           
        
          
          <img src={"https://i.pinimg.com/originals/6c/39/6f/6c396f5a89f2a7e28416adcf8e60fb19.jpg"} width="35%" style = {{float:"left"}} alt=""/>
          <h1 style = {{display:"flex",paddingInlineStart:"287px"}}>About us</h1>
        
          <p style = {{marginTop: "30px"}}>
            
          Our mission is to strive towards ensuring that one day all animals in Lebanon will get the chance to live safely and securely. It’s our goal to educate individuals and take direct action to help animals in Lebanon live the life they deserve, for we all belong to this planet and it is home to all of us..
          </p>
          </Container>
          
          

{/*           
          <Container className="content">
          
           
        
            <h1 style = {{display:"flex",paddingInlineStart:"660px"}}>About us</h1>
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
            <h1 style = {{display:"flex",paddingInlineStart:"665px"}}>Contact us</h1>
            <div class="container" style = {{
               position: "relative"
            }}>
            <img src={"https://3.bp.blogspot.com/-MhS29DieWds/Wc2Zdu9v5NI/AAAAAAAANUo/E9vrYzO08b8YVt3ntEP5ZCuvkDakIfwywCLcBGAs/s1600/Screen%2BShot%2B2017-09-28%2Bat%2B8.50.08%2BPM.png"}width="35%" style = {{float:"left"}} alt=""/>
            <p>Your feedback is important for us to improve</p>
            <div class="text-block">
            <textarea style = {{
                      float:"right"
                      
                    }} type="feedback" 
                     placeholder="Tell us your feedback..." 
                     id = "feedback"
                     className = "form-control"
                     onChange = {this.handleFedbackChange}
                    rows = {7}
                    cols = {80}
                  
                     
                     
                     />
                     </div>
                     </div>
            
            <Button href = "/" class = "buttonHome" onClick= {this.FeedbackClickHandler} size="huge">Submit Feedback</Button>
        
          </Container>
           */}
          {/* <Segment inverted vertical as="footer">
            Cover template for <a href="http://semantic-ui.com">Semantic-UI</a>,
            by{" "}
            <a href="https://github.com/semantic-ui-forest">
              @Semantic-UI-Forest
            </a>
            .
          </Segment> */}
        </Segment>
        <h1 style = {{display:"flex",paddingInlineStart:"420px", color:"white", marginBottom: "75px", fontSize: "50px"}}>Our Services</h1>
        <CardColumns>
          
 {/* <Card style={{ width: '25rem', height: '33rem'  }}>
  <Card.Img variant="top" height="245" src="https://i.pinimg.com/originals/6c/39/6f/6c396f5a89f2a7e28416adcf8e60fb19.jpg" />
  <Card.Body>
    <Card.Title style = {{fontFamily: "Comic Sans MS", fontSize: "19px", fontWeight:"bold", color:"Red"}}>About us</Card.Title>
    <Card.Text style = {{fontFamily: "Gabriola", fontSize: "19px", fontWeight:"bold"}}>
    Our mission is to strive towards ensuring that one day all animals in Lebanon will get the chance to live safely and securely. It’s our goal to educate individuals and take direct action to help animals in Lebanon live the life they deserve, for we all belong to this planet and it is home to all of us..
    </Card.Text>
  </Card.Body>
</Card> */}
<Card style={{ width: '25rem', height: '38.5rem'  }}>
  <Card.Img variant="top" height="250" src="https://dogtime.com/assets/uploads/2016/06/how-to-find-lost-dog-1.jpg" />
  <Card.Body>
    <Card.Title style = {{fontFamily: "Comic Sans MS", fontSize: "19px", fontWeight:"bold", color:"Blue"}}>File a lost pet report</Card.Title>
    <Card.Text style = {{fontFamily: "Gabriola", fontSize: "19px", fontWeight:"bold"}}>
    We are so sorry to hear that your pet is missing.

            We can help locate your pet. Both our volunteers and the people accessing our website will work on finding your pet.
            
            Please click the button below to file a missing pet report so we can help you reunite you with your lost loved one. 
    </Card.Text>
    {/* <Button href = "ReportPet" variant="primary">File a report</Button> */}
    <Link to = '/ReportPet'>
    <button  className="glow-on-hover" type="button">File a report</button>
    </Link>
  </Card.Body>
</Card>
  <Card style={{ width: '25rem', height: '33.5rem'  }}>
    <Card.Img variant="top" height="250" src="https://highlandcanine.com/wp-content/uploads/2021/01/siberian-husky-in-the-snow.jpg" />
    <Card.Body>
      <Card.Title style = {{fontFamily: "Comic Sans MS", fontSize: "19px", fontWeight:"bold", color:"Purple"}}>Dogs</Card.Title>
      <Card.Text style = {{fontFamily: "Gabriola", fontSize: "19px", fontWeight:"bold"}}>
      Thinking about adopting a four-legged friend? There's no time like the present. Check out our database of dogs looking for good homes
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    {/* <Button class="glow-on-hover" href = "/DogsPage">Adopt</Button> */}
    <Link to = '/DogsPage'>
    <button  className="glow-on-hover" type="button">ADOPT</button>
    </Link>
    </Card.Footer>
  </Card>
  
  <Card bg="danger" text="white" className="text-center p-3">
      <Card.Img variant="top" height="270" src="https://static.parade.com/wp-content/uploads/2020/08/pet-quotes-2.png" />


  </Card>
  <Card style={{ width: '25rem', height: '32rem'  }}>
    <Card.Img variant="top" height="250" src="https://imgix.bustle.com/uploads/image/2019/4/23/d7b621e5-24dc-40ae-8303-19b6c980f4e4-shutterstock_352176329.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress" />
    <Card.Body>
      <Card.Title style = {{fontFamily: "Comic Sans MS", fontSize: "19px", fontWeight:"bold", color:"Green"}}>Cats</Card.Title>
      <Card.Text style = {{fontFamily: "Gabriola", fontSize: "19px", fontWeight:"bold"}}>
      Thinking about adopting a cat? See if one of these great cat names might be perfect for your new pet! 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    {/* <Button href = "/CatsPage" variant="primary">Adopt</Button> */}
    <Link to = '/CatsPage'>
    <button  className="glow-on-hover" type="button">ADOPT</button>
    </Link>
    </Card.Footer>
  </Card>
  <Card style={{ width: '25rem', height: '35.5rem'  }}>
    <Card.Img variant="top" height = "250" src="https://www.vets4pets.com/siteassets/species/dog/dog-with-bandage-on-paw-at-vets.jpg?width=1040" />
    <Card.Body>
      <Card.Title style = {{fontFamily: "Comic Sans MS", fontSize: "19px", fontWeight:"bold", color:"Pink"}}>Veterinarians</Card.Title>
      <Card.Text style = {{fontFamily: "Gabriola", fontSize: "19px", fontWeight:"bold"}}>
      We at Pet Shelter know how much you care about the
well-being of your pets, and so we’ve assembled a non-exhaustive list of
veterinarians and pet care centers across Lebanon who are available 24/7
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    {/* <Button href = "VetsPage" variant="primary">Learn more...</Button> */}
    <Link to = '/VetsPage'>
    <button  className="glow-on-hover" type="button">Learn more...</button>
    </Link>
    </Card.Footer>
  </Card>
  <Card style={{ width: '25rem', height: '37.2rem'  }}>
    <Card.Img variant="top" height = "250" src="https://cdn1.iconfinder.com/data/icons/nuuline-shops-venues/128/shop_store_retail_commerce-04-512.png" />
    <Card.Body>
      <Card.Title style = {{fontFamily: "Comic Sans MS", fontSize: "19px", fontWeight:"bold", color:"Yellow"}}>Shops And Needs</Card.Title>
      <Card.Text style = {{fontFamily: "Gabriola", fontSize: "19px", fontWeight:"bold"}}>
      We at Pet Shelter know how much you love
your pet and getting them their needs,and so we’ve assembled
a non-exhaustive list of stores that provides the needs for your pets
that are across Lebanon
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    {/* <Button href = "PetsStores" variant="primary">Learn more...</Button> */}
    <Link to = '/PetsStores'>
    <button  className="glow-on-hover" type="button">Learn more...</button>
    </Link>
    </Card.Footer>
  </Card>
  
</CardColumns>

<h1 style = {{display:"flex",paddingInlineStart:"290px", color: "white",marginTop: "200px"}}>Contact us</h1>
            <div class="container" style = {{
               position: "relative",
               color: "white",
               fontSize: "18px"
            }}>
            <img src={"https://3.bp.blogspot.com/-MhS29DieWds/Wc2Zdu9v5NI/AAAAAAAANUo/E9vrYzO08b8YVt3ntEP5ZCuvkDakIfwywCLcBGAs/s1600/Screen%2BShot%2B2017-09-28%2Bat%2B8.50.08%2BPM.png"}width="35%" style = {{float:"RIGHT", marginTop:"-70px"}} alt=""/>
            <p>Your feedback is important for us to improve</p>
            <div class="text-block" style = {{paddingInlineEnd:"410px"}}>
            <textarea style = {{
                      float:"LEFT"
                      
                    }} type="feedback" 
                     placeholder="Tell us your feedback..." 
                     id = "feedback"
                     className = "form-control"
                     onChange = {this.handleFedbackChange}
                    rows = {7}
                    cols = {80}
                  
                     
                     
                     />
                     </div>
                     </div>
            
            <Button href = "/" class = "buttonHome" onClick= {this.FeedbackClickHandler} size="huge">Submit Feedback</Button>
      




















      </div>
    );
  }
}

const mapStateToProps = state =>({
  feedback: state.feedbackReducer.feedback,
  createMessage: state.feedbackReducer.createMessage,
})

export default connect(mapStateToProps)(HomepageLayout);