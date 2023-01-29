import React from "react";

const PassengerReport = (props) => {

    return(
        <div className={"container mm-4 mt-5"}>
            <h2 style={{textAlign: "center", color: "#00CED1"}}>Report on your drivers and drives</h2>      
            <hr></hr>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Driver Name Surname</th>
                            <th scope={"col"}>Kilometers travelled with driver</th>
                            <th scope={"col"}>Total price paid to driver</th>
                            <th scope={"col"}>Price per kilometer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.report.map((term) => {
                            return(
                                <tr>
                                    <td>{term.driverName} {term.driverSurname}</td>
                                    <td>{term.kmTravelledWithDriver} km</td>
                                    <td>{term.totalPricePaid} MKD</td>
                                    <td>{term.pricePerKm} MKD per km</td>
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

export default PassengerReport;