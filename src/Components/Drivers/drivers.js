import React from "react";
import { useNavigate } from 'react-router-dom'

const Drivers = (props) => {
    const navigate = useNavigate();

    const makeRequestForDriver = async (driverId, driverName) => {
        navigate('/make-request', {state: {driverId: driverId, driverName: driverName}})
    };

    return(
        <div className={"container mm-4 mt-5"}>
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
                                        <a title={"Request Driver"} id="submit" className={"btn btn-primary"}
                                            style={{backgroundColor: "cyan", borderColor: "black"}}
                                            onClick={() => makeRequestForDriver(term.id, term.name)}>Request Driver</a>
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

export default Drivers;