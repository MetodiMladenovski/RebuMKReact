import './App.css';
import React, {Component} from "react";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import RebuMKService from "../../repository/rebuRepository";
import Home from "../Home/home";
import Login from '../Login/login';
import Header from "../Header/header";
import Register from "../Register/register";
import RegisterDriver from "../Register/registerDriver";
import RegisterPassenger from "../Register/registerPassenger";
import Requests from "../Requests/requests";
import ConfirmedRequest from '../Requests/confirmedRequest';
import StartedDrive from '../Drive/startedDrive';
import MakeRequest from '../Requests/makeRequest';
import MadeRequest from '../Requests/madeRequest';



class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          allCreatedRequests: [],
          availableDrivers: []
      }
  }

  render() {
      return (
          <Router>
              <Header/>
              <main>
                  <div className={"container"}>
                      <Routes>
                          <Route path={"/"} element={<Login onLogin={this.fetchData} onLoadRequests={this.loadRequests}/>}/>
                          <Route path={"/home"} element={<Home />}/>
                          <Route path={"/login"} element={<Login onLogin={this.fetchData} onLoadRequests={this.loadRequests}/>}/>
                          <Route path={"/register"} element={<Register />}/>
                          <Route path={"/registerPassenger"} element={<RegisterPassenger onRegisterPassenger={this.registerPassenger}/>}/>
                          <Route path={"/registerDriver"} element={<RegisterDriver onRegisterDriver={this.registerDriver}/>}/>
                          <Route path={"/registerDriver"} element={<RegisterDriver onRegisterDriver={this.registerDriver}/>}/>
                          <Route path={"/requests"} element={<Requests requests={this.state.allCreatedRequests} />}/>
                          <Route path={"/confirmed-request"} element={<ConfirmedRequest onRefreshPassengersMadeRequest={this.refreshPassengersMadeRequest}/>}/>
                          <Route path={"/started-drive"} element={<StartedDrive onFinishDrive={this.finishDrive}/>}/>
                          <Route path={"/make-request"} element={<MakeRequest onMakeRequest={this.makeRequest}/>}/>
                          <Route path={"/made-request"} element={<MadeRequest />}/>
                      </Routes>
                  </div>
              </main>
          </Router>
      )
  }

  finishDrive = (driveId) => {
    RebuMKService.finishDrive(driveId)
        .then(() => {
        
        })
  }

  refreshPassengersMadeRequest = () => {
    <MadeRequest />
  }

  startDrive = (requestId, driverId, destinationLatitude, destinationLongitude) => {
    RebuMKService.startDrive(requestId, driverId, destinationLatitude, destinationLongitude)
        .then((data) => {
            this.startedDrive = data;
        })
  }

  makeRequest = (cityAddress, streetAddress, numberAddress, latitude, longitude, passengerId) => {
    RebuMKService.makeRequest(cityAddress, streetAddress, numberAddress, latitude, longitude, passengerId)
        .then((data) => {
            this.startedDrive = data;
        })
  }

  confirmRequest = (driverId, requestId) => {
    RebuMKService.confirmRequest(driverId, requestId)
          .then((data) => {
            this.confirmRequest = data;
        })
  }

  loadRequests = (driverId) => {
      RebuMKService.getAllCreatedRequests(driverId)
          .then((data) => {
              this.setState({
                  allCreatedRequests: data.data
              })
          })
  }

  loadDrivers = () => {
    RebuMKService.getAllDrivers()
        .then((data) => {
            this.setState({
                availableDrivers: data.data
            })
        })
  }
  registerDriver = (firstName, surname, email, password, pricePerKm) => {
    RebuMKService.registerDriver(firstName, surname, email, password, pricePerKm)
        .then(() => {
            this.fetchData()
        })
  }
  registerPassenger = (firstName, surname, email, password) => {
    RebuMKService.registerPassenger(firstName, surname, email, password)
        .then(() => {
            this.fetchData();
        })
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData = () =>  {
    if(localStorage.getItem("driverId")){
      this.loadRequests(localStorage.getItem("driverId"));
    } else {
        this.loadDrivers()
    }
  }
}

export default App;