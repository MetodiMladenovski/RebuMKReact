import React, { useState } from "react";
import axios from "../../custom-axios/axios";
import { useNavigate } from 'react-router-dom'

const Requests = (props) => {
    const navigate = useNavigate();

    const toConfirmedRequest = async (driverId, requestId) => {
        const response = await axios.post(`/request/confirm/${driverId}/${requestId}`)
        navigate('/confirmed-request', {state: {confirmedRequest: response.data}})
    };

    return(
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>City</th>
                            <th scope={"col"}>Street</th>
                            <th scope={"col"}>Number</th>
                            <th scope={"col"}>Latitude</th>
                            <th scope={"col"}>Longitude</th>
                            <th scope={"col"}>Passenger</th>
                            <th scope={"col"}></th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.requests.map((term) => {
                            return(
                                <tr>
                                    <td>{term.cityAddress}</td>
                                    <td>{term.streetAddress}</td>
                                    <td>{term.numberAddress}</td>
                                    <td>{term.latitude}</td>
                                    <td>{term.longitude}</td>
                                    <td>{term.passenger.name}, {term.passenger.surname}</td>
                                    <td className={"text-right"}>
                                        <a title={"Confirm"} id="submit" className={"btn btn-primary"}
                                            style={{backgroundColor: "cyan", borderColor: "black"}}
                                            onClick={() => toConfirmedRequest(localStorage.getItem("driverId"), term.id)}>Confirm</a>
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

export default Requests;