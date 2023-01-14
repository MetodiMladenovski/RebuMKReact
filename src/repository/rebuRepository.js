import axios from "../custom-axios/axios";

const RebuService = {
    addCarForDriver: (driverId, data) => {
        return axios.post(`/car/add/${driverId}`, data)
    },
    finishDrive: (driveId) => {
        return axios.post(`/drive/finish/${driveId}`)
    },
    startDrive: (requestId, driverId, data) => {
        return axios.post(`/drive/start/${requestId}/${driverId}`, data)
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
    getAllCreatedRequests: (driverId) => {
        return axios.get(`/request/${driverId}`)
    },
    confirmRequest: (driverId, requestId) => {
        return axios.post(`/request/confirm/${driverId}/${requestId}`)
    },
    makeRequest: (data, passengerId) => {
        return axios.post(`/request/make/${passengerId}`, data)
    },
    registerPassenger: (email, password, name, surname) => {
        return axios.post("/public/register/passenger", {
            "email" : email,
            "password" : password,
            "name" : name,
            "surname" : surname,
        })
    },
    registerDriver: (email, password, name, surname, pricePerKm) => {
        return axios.post("/public/register/driver", {
            "email" : email,
            "password" : password,
            "name" : name,
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