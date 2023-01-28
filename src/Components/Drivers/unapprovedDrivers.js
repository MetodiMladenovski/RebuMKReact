import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import CenteredContainer from "../UtilComponents/CenteredContainer";
import axios from "../../custom-axios/axios";

const UnapprovedDrivers = (props) => {

    const location = useLocation();
    const navigate = useNavigate();

    const checkDriversCar = async (driverId) => {
        const carResponse = await axios.get(`/car/driver/${driverId}`).catch(function (error) {
            if (error.response) {
                alert("There is no car registered for that driver.")
            } 
          })
        navigate("/car", {state: {car: carResponse.data}})
    }

    return(
        <div className={"container mm-4 mt-5"}>
            <h2 style={{textAlign: "center", color: "#00CED1"}}>Unapproved Drivers</h2>       
            <hr></hr>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Surname</th>
                            <th scope={"col"}>Price per kilometer</th>
                            <th scope={"col"}>Status</th>
                            <th scope={"col"}>Level</th>
                            <th scope={"col"}>Number of grades</th>
                            <th scope={"col"}>Grade</th>
                            <th scope={"col"}></th>
                            <th scope={"col"}></th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.drivers.map((term) => {
                            return(
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.surname}</td>
                                    <td>{term.pricePerKm}</td>
                                    <td>{term.status}</td>
                                    <td>{term.level}</td>
                                    <td>{term.numGrades}</td>
                                    <td>{term.grade}</td>
                                    <td className={"text-right"}>
                                        <a title={"Approve Driver"} className={"btn btn-primary"}
                                            style={{backgroundColor: "cyan", borderColor: "black"}}
                                            onClick={() => props.onApproveDriver(term.id)}>Approve Driver</a>
                                    </td>
                                    <td className={"text-right"}>
                                        <a title={"Check driver's car"} className={"btn btn-primary"}
                                            style={{backgroundColor: "coral", borderColor: "black"}}
                                            onClick={() => checkDriversCar(term.id)}>Check driver's car</a>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UnapprovedDrivers;