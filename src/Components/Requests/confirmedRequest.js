import React from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import axios from "../../custom-axios/axios";
import CenteredContainer from "../UtilComponents/CenteredContainer";

const ConfirmedRequest = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, updateFormData] = React.useState({
        destinationLatitude: "",
        destinationLongitude: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const requestId = location.state.confirmedRequest.id;
        const driverId = localStorage.getItem("driverId");
        const destinationLatitude = formData.destinationLatitude;
        const destinationLongitude = formData.destinationLongitude;
        const response = await axios.post(`/drive/start/${requestId}/${driverId}`, {
            "destinationLatitude" : destinationLatitude,
            "destinationLongitude" : destinationLongitude
        })
        props.onRefreshPassengersMadeRequest();
        navigate('/started-drive', {state: {startedDrive: response.data}})
    }

    return (
        <CenteredContainer>
        <div className="card text-center">
            <div className="card-header">
                {location.state.confirmedRequest.status}
            </div>
            <div className="card-body">
                <h5 className="card-title">{location.state.confirmedRequest.cityAddress}, {location.state.confirmedRequest.streetAddress}, {location.state.confirmedRequest.numberAddress}</h5>
                <h6 className="card-title">{location.state.confirmedRequest.latitude}, {location.state.confirmedRequest.longitude}</h6>
                <p className="card-text">Passenger: {location.state.confirmedRequest.passenger.name} {location.state.confirmedRequest.passenger.surname}</p>                
                <form onSubmit={onFormSubmit}>
                <div className="form-group">
                        <label htmlFor="destinationLatitude">Destination Latitude</label>
                        <input type="float"
                               className="form-control"
                               id="destinationLatitude"
                               name="destinationLatitude"
                               placeholder="Enter destination latitude"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="destinationLongitude">Destination Longitude</label>
                        <input type="float"
                               className="form-control"
                               id="destinationLongitude"
                               name="destinationLongitude"
                               placeholder="Enter destination longitude"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                <button id="submit" title={"Start Drive"} className={"btn btn-danger"} type="submit"
                    style={{backgroundColor: "cyan", borderColor: "black"}}>
                    Start Drive
                </button>       
                </form>
            </div>
        </div>
        </CenteredContainer>
    )
}

export default ConfirmedRequest;