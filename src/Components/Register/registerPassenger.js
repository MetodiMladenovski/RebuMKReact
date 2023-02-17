import React from "react";
import {useNavigate} from "react-router-dom";
import CenteredContainer from "../UtilComponents/CenteredContainer";

const registerPassenger = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, updateFormData] = React.useState({
        firstName : "",
        surname : "",
        email : "",
        password : "",
        repeatedPassword: "",
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()

        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const firstName = formData.firstName
        const surname = formData.surname
        const email = formData.email
        const password = formData.password
        const repetedPassword = formData.repeatedPassword
       
        if(password !== repetedPassword)
            alert("Passwords don't match");

        props.onRegisterPassenger(firstName, surname, email, password);
        navigate("/login")
    }

    return(
        <CenteredContainer>
            <h3 style={{textAlign: "center", color: "darkcyan"}}>Register Passenger</h3>
            <br></br>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First name</label>
                        <input type="text"
                               className="form-control"
                               id="firstName"
                               name="firstName"
                               required
                               placeholder="John"
                               style={{height: 100 + "%"}}
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input type="text"
                               className="form-control"
                               id="surname"
                               name="surname"
                               required
                               placeholder="Doe"
                               style={{height: 100 + "%"}}
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               className="form-control"
                               id="email"
                               name="email"
                               placeholder="johndoe@email.com"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className="form-control"
                               id="password"
                               name="password"
                               placeholder="moreCharacters@123"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="repeatedPassword">Repeat Password</label>
                        <input type="password"
                               className="form-control"
                               id="repeatedPassword"
                               name="repeatedPassword"
                               placeholder="moreCharacters@123"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button id="submit" type="submit" className="btn btn-primary" style={{backgroundColor: "darkcyan", float: "center",  borderColor: "black", color:'white'}}>Register</button>
                    </div>                
                </form>
        </CenteredContainer>
    )

}

export default registerPassenger;