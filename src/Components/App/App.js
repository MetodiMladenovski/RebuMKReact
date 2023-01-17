import './App.css';
import React, {Component} from "react";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import RebuMKService from "../../repository/rebuRepository";
import Register from "../Register/register"
import Requests from "../Requests/requests"
import RegisterDriver from "../Register/registerDriver";
import RegisterPassenger from "../Register/registerPassenger";
import Login from '../Login/login';
import Header from "../Header/header"


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          allCreatedRequests: []
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
                          <Route path={"/login"} element={<Login onLogin={this.fetchData} onLoadRequests={this.loadRequests}/>}/>
                          <Route path={"/register"} element={<Register />}/>
                          <Route path={"/registerPassenger"} element={<RegisterPassenger onRegisterPassenger={this.registerPassenger}/>}/>
                          <Route path={"/registerDriver"} element={<RegisterDriver onRegisterDriver={this.registerDriver}/>}/>
                          <Route path={"/registerDriver"} element={<RegisterDriver onRegisterDriver={this.registerDriver}/>}/>
                          <Route path={"/requests"} element={<Requests requests={this.state.allCreatedRequests}/>}/>
                      </Routes>
                  </div>
              </main>
          </Router>
      )
  }

  loadRequests = (driverId) => {
      RebuMKService.getAllCreatedRequests(driverId)
          .then((data) => {
              this.setState({
                  allCreatedRequests: data.data
              })
          })
  }
  registerDriver = (firstName, surname, email, password, pricePerKm) => {
    RebuMKService.registerDriver(firstName, surname, email, password, pricePerKm)
        .then(() => {
            this.loadRequests();
        })
  }
  registerPassenger = (firstName, surname, email, password) => {
    RebuMKService.registerPassenger(firstName, surname, email, password)
        .then(() => {
            this.loadRequests();
        })
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData = () =>  {
      // this.loadRequests();
  }
}

export default App;