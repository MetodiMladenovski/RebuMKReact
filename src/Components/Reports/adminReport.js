import React from "react";

const AdminReport = (props) => {

    return(
        <div style={{width: "85%", margin: 'auto'}} className={"container mm-4 mt-5"}>
            <h2 style={{textAlign: "center", color: "darkcyan"}}>Report for every driver</h2>      
            <hr></hr>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Driver Email</th>
                            <th scope={"col"}>DriverName Surname</th>
                            <th scope={"col"}>Car make</th>
                            <th scope={"col"}>Car model</th>
                            <th scope={"col"}>Driver Grade</th>
                            <th scope={"col"}>Number Of Drives</th>
                            <th scope={"col"}>Total Money Made</th>
                            <th scope={"col"}>Number Of Different Requests</th>
                            <th scope={"col"}>Number Of Different Passengers</th>
                            <th scope={"col"}>Money Per Request</th>
                            <th scope={"col"}>Total kilometers driven</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.report.map((term) => {
                            return(
                                <tr>
                                    <td>{term.driverEmail}</td>
                                    <td>{term.driverName} {term.driverSurname}</td>
                                    <td>{term.make}</td>
                                    <td>{term.model} MKD</td>
                                    <td>{term.driverGrade}</td>
                                    <td>{term.numberOfDrives}</td>
                                    <td>{term.totalMoneyMade}</td>
                                    <td>{term.numberOfDifferentRequests}</td>
                                    <td>{term.numberOfDifferentPassengers}</td>
                                    <td>{term.averageMoneyPerRequest}</td>
                                    <td>{term.totalKmTravelled}</td>
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

export default AdminReport;