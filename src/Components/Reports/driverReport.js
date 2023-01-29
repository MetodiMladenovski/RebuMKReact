import React from "react";

const DriverReport = (props) => {

    return(
        <div className={"container mm-4 mt-5"}>
            <h2 style={{textAlign: "center", color: "#00CED1"}}>Report on your passengers</h2>      
            <hr></hr>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Passenger Email</th>
                            <th scope={"col"}>Passenger Name Surname</th>
                            <th scope={"col"}>Kilometers Travelled With Passenger</th>
                            <th scope={"col"}>Total Earnings from passenger</th>
                            <th scope={"col"}>Earnings Per Kilometer</th>
                            <th scope={"col"}>Average Grade Received Per Drive</th>
                            <th scope={"col"}>Number Of Drives</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.report.map((term) => {
                            return(
                                <tr>
                                    <td>{term.passengerEmail}</td>
                                    <td>{term.passengerName} {term.passengerSurname}</td>
                                    <td>{term.kmTravelledWithPassenger} km</td>
                                    <td>{term.totalEarnings} MKD</td>
                                    <td>{term.earningsPerKm} MKD per km</td>
                                    <td>{term.averageGradeReceivedPerDrive}</td>
                                    <td>{term.numberOfDrives}</td>
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

export default DriverReport;