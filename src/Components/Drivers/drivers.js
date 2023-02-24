import React from "react";
import { useNavigate } from 'react-router-dom'

const Drivers = (props) => {
    const navigate = useNavigate();

    const makeRequestForDriver = async (driverId, driverName) => {
        navigate('/make-request', {state: {driverId: driverId, driverName: driverName}})
    };

    return(
        <div className="container">
        <h2 style={{color: 'darkcyan', textAlign: 'center', marginTop: '5px'}}>Drivers</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4" style={{width: '80%', margin: 'auto', marginBottom: '40px'}}>
            {props.drivers.map((term) => {
             const IMAGE_SRC = `http://localhost:8080/driver/${term.id}/profile/picture`;
             return(
                <div class="col">
                    <div class="card" >
                    <img src={IMAGE_SRC} class="card-img-top" alt="Driver doesn't have an image" style={{height: '285px'}}/>
                    <div class="card-body">
                        <h5 class="card-title">{term.name} {term.surname}</h5>
                        <p style={term.status != 'AVAILABLE' ? { color: 'red' } : {color: 'green'}}>
                            Status: {term.status}</p>
                        <p class="card-text">
                            Price per kilometer: {term.pricePerKm} MKD
                        <br></br>
                        Level: {term.level}
                        <br></br>
                        Number of grades: {term.numGrades}
                        <br></br>
                        Grade: {term.grade}
                        </p>
                        <a title={"Request Driver"} id="submit" className={"btn btn-primary"}
                            style={{backgroundColor: "cyan", borderColor: "black", color: 'black'}}
                            onClick={() => makeRequestForDriver(term.id, term.name)}>Request Driver</a>
                    </div>
                    </div>
                </div>
            )})}
        </div>
        </div>
    )
}

export default Drivers;