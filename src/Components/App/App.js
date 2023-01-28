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
import GradeDrive from '../Drive/gradeDrive'
import PayDrive from '../Drive/pay-drive'
import MakeRequest from '../Requests/makeRequest';
import MadeRequest from '../Requests/madeRequest';
import Drivers from '../Drivers/drivers'
import UnapprovedDrivers from '../Drivers/unapprovedDrivers';
import Car from '../Cars/car'
import AddCar from '../Cars/addCar'
import Payments from '../Payments/payments'


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          allCreatedRequests: [],
          allApprovedDrivers: [],
          allUnApprovedDrivers: [],
          payments: []
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
                          <Route path={"/started-drive"} element={<StartedDrive />}/>
                          <Route path={"/grade-drive"} element={<GradeDrive />}/>
                          <Route path={"/pay-drive"} element={<PayDrive />}/>
                          <Route path={"/make-request"} element={<MakeRequest />}/>
                          <Route path={"/made-request"} element={<MadeRequest />}/>
                          <Route path={"/drivers"} element={<Drivers drivers={this.state.allApprovedDrivers} />}/>
                          <Route path={"/unapproved-drivers"} element={<UnapprovedDrivers drivers={this.state.allUnApprovedDrivers} onApproveDriver={this.approveDriver}/>}/>
                          <Route path={"/car"} element={<Car />}/>
                          <Route path={"/add-car"} element={<AddCar onAddCar={this.addCar} />}/>
                          <Route path={"/payments"} element={<Payments payments={this.state.payments} />}/>
                      </Routes>
                  </div>
              </main>
          </Router>
      )
  }

  approveDriver = (driverId) => {
    RebuMKService.approveDriver(driverId)
    .then(() => {
        this.fetchData()
    })
  }

  addCar = (driverId, licensePlate, make, model, year) => {
    RebuMKService.addCarForDriver(driverId, licensePlate, make, model, year)
    .then(() => {
        this.fetchData()
    })
  }

  refreshPassengersMadeRequest = () => {
    <MadeRequest />
  }

  loadRequests = (driverId) => {
      RebuMKService.getAllCreatedRequests(driverId)
          .then((data) => {
              this.setState({
                  allCreatedRequests: data.data
              })
          })
  }

  loadPayments = () => {
    RebuMKService.getAllPayments()
        .then((data) => {
            this.setState({
                payments: data.data
            })
        })
  }

  loadApprovedDrivers = () => {
    RebuMKService.getAllDrivers()
        .then((data) => {
            this.setState({
                allApprovedDrivers: data.data
            })
        })
  }

  loadUnApprovedDrivers = () => {
    RebuMKService.getUnapprovedDrivers()
        .then((data) => {
            this.setState({
                allUnApprovedDrivers: data.data
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
        this.loadApprovedDrivers()
        this.loadUnApprovedDrivers()
        this.loadPayments()
    }
  }
}

export default App;