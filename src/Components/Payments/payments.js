import React from "react";

const Payments = (props) => {

    return(
        <div className={"container mm-4 mt-5"}>
            <h2 style={{textAlign: "center", color: "#00CED1"}}>Payments</h2>      
            <hr></hr>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Drive Km Travelled</th>
                            <th scope={"col"}>Driver Who Executed Drive</th>
                            <th scope={"col"}>Passenger</th>
                            <th scope={"col"}>Sum payed</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.payments.map((term) => {
                            return(
                                <tr>
                                    <td>{term.drive.kmTravelled} km</td>
                                    <td>{term.drive.driver.name} {term.drive.driver.surname}</td>
                                    <td>{term.passenger.name} {term.passenger.surname}</td>
                                    <td>{term.totalSumPayed} MKD</td>
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

export default Payments;