import React from 'react';
import { useNavigate } from 'react-router-dom';
import RebuMKService from "../../repository/rebuRepository";
import CenteredContainer from '../UtilComponents/CenteredContainer';

const Login = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        RebuMKService.login(formData.username, formData.password).then(resp => {
            if(resp.data.typeOfLoggedUser === "Driver"){
                localStorage.setItem("driverId", resp.data.idOfLoggedUser)
                props.onLogin();
                props.onLoadRequests(resp.data.idOfLoggedUser)
                navigate("/requests");
            } else if(resp.data.typeOfLoggedUser === "Passenger"){
                props.onLogin();
                navigate("/passengers");
            } else if(resp.data.typeOfLoggedUser === "Admin"){
                props.onLogin();
                navigate("/admins");
            }
            else {
                alert("Login unsucessfull, wrong password or email, try again.")
            }
        })

    }

    return (
        <CenteredContainer>
            <h3 style={{textAlign: "center", color: "#00CED1"}}>RebuMK</h3>
            <h5 style={{textAlign: "center", color: "#00CED1"}}>Login to your account</h5>
            <hr></hr>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                               className="form-control"
                               name="username"
                               id="username"
                               required
                               placeholder="Enter username"
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="price">Password</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               id="password"
                               placeholder="Enter password"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <button id="submit" type="submit" className="btn btn-primary" style={{marginLeft: 8 + "em"}}>Login</button>
                </form>
        </CenteredContainer>
    )
}

export default Login;