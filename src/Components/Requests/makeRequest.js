import React from "react";
import { useNavigate, useLocation} from "react-router-dom";
import CenteredContainer from "../UtilComponents/CenteredContainer";
import axios from "../../custom-axios/axios";

const MakeRequest = () => {

    const location = useLocation();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, updateFormData] = React.useState({
        cityAddress : "",
        streetAddress : "",
        numberAddress : "",
        latitude : "",
        longitude : ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const cityAddress = formData.cityAddress;
        const streetAddress = formData.streetAddress;
        const numberAddress = formData.numberAddress;
        const latitude = formData.latitude;
        const longitude = formData.longitude;
        const passengerId = localStorage.getItem("passengerId");
        let chosenDriverId = null
        if(location.state){
            chosenDriverId = location.state.driverId
        }
        const response = await axios.post(`/request/make/${passengerId}`, {
            "cityAddress" : cityAddress,
            "streetAddress" : streetAddress,
            "numberAddress" : numberAddress,
            "latitude" : latitude,
            "longitude" : longitude,
            "chosenDriverId" : chosenDriverId
        })
        localStorage.setItem("madeRequestId", response.data.id)
        navigate("/made-request", {state: {madeRequest: response.data}})
    }

    let showChosenDriver
    if(location.state){
        showChosenDriver = <p style={{color: "green", fontStyle: "bold"}}>You picked the driver with name {location.state.driverName}. 
        <br></br>
        Add your address to compled the request.</p>
    }

    return(
        <CenteredContainer>
            <h2 style={{textAlign: "center", color: "#00CED1"}}>Make Request</h2>
            <hr></hr>
            {showChosenDriver}
            <br></br>
            <h6 style={{textAlign: "center"}}>Your current(pick up) address:</h6>
            <br></br>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="cityAddress">City</label>
                        <input type="text"
                               className="form-control"
                               id="cityAddress"
                               name="cityAddress"
                               required
                               placeholder="Skopje"
                               style={{height: 100 + "%"}}
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="streetAddress">Street</label>
                        <input type="text"
                               className="form-control"
                               id="streetAddress"
                               name="streetAddress"
                               required
                               placeholder="Jordan Mijalkov"
                               style={{height: 100 + "%"}}
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="numberAddress">Number</label>
                        <input type="number"
                               className="form-control"
                               id="numberAddress"
                               name="numberAddress"
                               placeholder="2"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="latitude">Latitude</label>
                        <input type="float"
                               className="form-control"
                               id="latitude"
                               name="latitude"
                               placeholder="Enter latitude here"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="longitude">Longitude</label>
                        <input type="float"
                               className="form-control"
                               id="longitude"
                               name="longitude"
                               placeholder="Enter longitude here"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <button id="submit" type="submit" className="btn btn-primary" style={{marginLeft: 8 + "em"}}>Submit</button>
                </form>
        </CenteredContainer>
    )

}

export default MakeRequest;