import axios from "../custom-axios/axios";

const RebuService = {
    getAdminReport: () => {
        return axios.get("/reports/admin")
    },
    getDriverReport: (driverId) => {
        return axios.get(`/reports/driver/${driverId}`)
    },
    getPassengerReport: (passengerId) => {
        return axios.get(`/reports/passenger/${passengerId}`)
    },
    addCarForDriver: (driverId, licensePlate, make, model, year) => {
        return axios.post(`/car/add/${driverId}`, {
            "licensePlate" : licensePlate,
            "make" : make,
            "model" : model,
            "year": year
        })
    },
    approveDriver: (driverId) => {
        return axios.post(`/driver/approve/${driverId}`)
    },
    getDriverById: (driverId) => {
        return axios.get(`/driver/${driverId}`)
    },
    getAllDrivers: () => {
        return axios.get("/driver")
    },
    getUnapprovedDrivers: () => {
        return axios.get("/driver/unapproved")
    },
    getAllCreatedRequests: (driverId) => {
        return axios.get(`/request/driver/${driverId}`)
    },
    getAllPayments: () => {
        return axios.get("/payment")
    },
    registerPassenger: (firstName, surname, email, password) => {
        return axios.post("/public/register/passenger", {
            "email" : email,
            "password" : password,
            "name" : firstName,
            "surname" : surname,
        })
    },
    registerDriver: (firstName, surname, email, password, pricePerKm) => {
        return axios.post("/public/register/driver", {
            "email" : email,
            "password" : password,
            "name" : firstName,
            "surname" : surname,
            "pricePerKm" : pricePerKm
        })
    },
    login: (username, password) => {
        return axios.post("/public/login", {
            "email": username,
            "password": password
        });
    },

}

export default RebuService;