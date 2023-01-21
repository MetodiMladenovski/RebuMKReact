import axios from "../custom-axios/axios";

const RebuService = {
    addCarForDriver: (driverId, data) => {
        return axios.post(`/car/add/${driverId}`, data)
    },
    finishDrive: (driveId) => {
        return axios.post(`/drive/finish/${driveId}`)
    },
    startDrive: (requestId, driverId, destinationLatitude, destinationLongitude) => {
        return axios.post(`/drive/start/${requestId}/${driverId}`, {
            "destinationLatitude" : destinationLatitude,
            "destinationLongitude" : destinationLongitude
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
    confirmRequest: (driverId, requestId) => {
        return axios.post(`/request/confirm/${driverId}/${requestId}`)
    },
    makeRequest: (cityAddress, streetAddress, numberAddress, latitude, longitude, passengerId) => {
        return axios.post(`/request/make/${passengerId}`, {
            "cityAddress" : cityAddress,
            "streetAddress" : streetAddress,
            "numberAddress" : numberAddress,
            "latitude" : latitude,
            "longitude" : longitude
        })
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