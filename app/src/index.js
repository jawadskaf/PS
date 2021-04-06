import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { configurePersistor, configureStore } from './redux/store/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "./components/UserForm";
import Home from "./components/Home";
import Login from "./components/Login"
import RegistrationPage from "./components/registrationPagee";
import MyProfile from "./components/MyProfile";
import MedicineOrderPage from "./components/MedicinesOrder";
import MedOrderPage from "./components/addOrderPage";
import MeidcineForm from "./components/MedicineForm";
import UploadImage from "./components/UploadImages";
import LabtestAddOrder from "./components/LabtestAddOrder"
import LabTestReservations from "./components/LabTestReservations"
import LabTestForm from "./components/LabTestForm"
import HealthcareAddOrder from "./components/HealthcareAddOrder"
import HealthcareProductsOrdered from "./components/HealthcareProductsOrdered"
import HealthcareForm from "./components/HealthcareForm"
import MedicineChart from "./components/MedicineChart"
import GameOfThrones from "./components/GameOfThrones"
import ChartMed from "./components/Chart"
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
          <Route exact path="/" render={props => <LostPetsPage {...props} />}/>   
          <Route path="/registration" render={props => <RegistrationPage {...props} />}/>
          <Route path="/userform" render={props => <UserForm {...props} />}/>
          <Route path="/myProfile" render={props => <MyProfile {...props} />}/>
          <Route path="/medicineOrder" render={props => <MedicineOrderPage {...props} />}/>
          <Route path="/addMedOrder" render={props => <MedOrderPage {...props} />}/>
          <Route path="/MedicineForm" render={props => <MeidcineForm {...props} />}/>
          <Route path="/uploadImage" render={props => <UploadImage {...props} />}/>
          <Route path="/Home" render={props => <Home {...props} />}/>
          <Route path="/login" render={props => <Login {...props} />}/>
          <Route path="/addLabTest" render={props => <LabtestAddOrder {...props} />}/>
          <Route path="/getLabTest" render={props => <LabTestReservations {...props} />}/>
          <Route path="/updateLabTest" render={props => <LabTestForm {...props} />}/>
          <Route path="/addHealthcareProduct" render={props => <HealthcareAddOrder {...props} />}/>
          <Route path="/getHealthcareProduct" render={props => <HealthcareProductsOrdered {...props} />}/>
          <Route path="/updateHealthcareProduct" render={props => <HealthcareForm {...props} />}/>
          <Route path="/MedicineChartPage" render={props => <ChartMed {...props} />}/>
          <Route path="/GameOfThrones" render={props => <GameOfThrones {...props} />}/>
          <Route path="/addImage" render={props => <ImageAdd {...props} />}/>
          <Route path="/AdoptDogs" render={props => <AdoptDogs {...props} />}/>
          <Route path="/AnimatedDogPage" render={props => <AnimatedDogPage {...props} />}/>
          <Route path="/AnimatedCatPage" render={props => <AnimatedCatPage {...props} />}/>
          <Route path="/AdoptCats" render={props => <AdoptCats {...props} />}/>
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