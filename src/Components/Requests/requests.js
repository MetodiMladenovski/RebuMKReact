import React from "react";

const requests = (props) => {
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
                                    <td>{term.passenger.name}</td>
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

export default requests;