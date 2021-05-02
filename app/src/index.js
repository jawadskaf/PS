import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { configurePersistor, configureStore } from './redux/store/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "./components/UserForm";
import Login from "./components/Login"
import RegistrationPage from "./components/registrationPagee";
import MyProfile from "./components/MyProfile";
import ImageAdd from "./components/ImageAdd"
import ImagesOrdered from "./components/ImagesOrdered"
import DogsPage from "./components/DogsPage"
import AdoptDogs from "./components/AdoptDogs"
import AnimatedDogPage from "./components/AnimatedDogPage"
import CatsPage from "./components/CatsPage"
import AnimatedCatPage from "./components/AnimatedCatPage"
import AdoptCats from "./components/AdoptCats"
import ReportPet from "./components/ReportPet"
import LostPetsPage from "./components/LostPetsPage"
import VetsPage from "./components/VetsPage"
import PetsStores from "./components/PetsStores"
import HomePage from "./components/HomePage"
import DesktopContainer from "./components/HomePage"
import HomepageLayout from "./components/HomePage"

// Redux setup
const store = configureStore();
const persistor = configurePersistor(store);
const wrapper = document.getElementById("root");

class RouterNavigationSample extends React.Component {
  render() {
    return (

      

      <Provider store={store}>
      <Router>
      <div className="container">
        <>
          <Route exact path="/" render={props => <HomepageLayout {...props} />}/>   
          <Route path="/registration" render={props => <RegistrationPage {...props} />}/>
          <Route path="/userform" render={props => <UserForm {...props} />}/>
          <Route path="/myProfile" render={props => <MyProfile {...props} />}/>
          <Route path="/login" render={props => <Login {...props} />}/>
          <Route path="/addImage" render={props => <ImageAdd {...props} />}/>
          <Route path="/AdoptDogs" render={props => <AdoptDogs {...props} />}/>
          <Route path="/AnimatedDogPage" render={props => <AnimatedDogPage {...props} />}/>
          <Route path="/AnimatedCatPage" render={props => <AnimatedCatPage {...props} />}/>
          <Route path="/AdoptCats" render={props => <AdoptCats {...props} />}/>
          <Route path="/DogsPage" render={props => <DogsPage {...props} />}/>
          <Route path="/CatsPage" render={props => <CatsPage {...props} />}/>
          <Route path="/ReportPet" render={props => <ReportPet {...props} />}/>
          <Route path="/LostPetsPage" render={props => <LostPetsPage {...props} />}/>
          <Route path="/VetsPage" render={props => <VetsPage {...props} />}/>
          <Route path="/PetsStores" render={props => <PetsStores {...props} />}/>
          {/* <Route path="/" render={props => <MedicineOrderPage {...props} />}/> */}
          {/* <Route path="/" render={props => <Table1 {...props} />}/> */}
        </>
        </div>
      </Router>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterNavigationSample />, rootElement);