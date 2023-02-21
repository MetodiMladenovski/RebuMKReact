import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import CenteredContainer from "../UtilComponents/CenteredContainer";
import axios from "../../custom-axios/axios";

const GradeDrive = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, updateFormData] = React.useState({
        grade : 0,
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = async (e) => {
        e.preventDefault()
        const gradeNum = formData.grade
        const driveId = location.state.driveId
        const updatedDrive = await axios.post(`/drive/grade/${driveId}`, null, { params: {
            gradeNum
          }
        })       
        navigate("/started-drive", {state: {startedDrive: updatedDrive.data}})
    }

    return (
        <CenteredContainer>
        <div className="card text-center">
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <br></br>
                <h3>Grade Driver</h3>
                <input type="float"
                        className="form-control"
                        id="grade"
                        name="grade"
                        required
                        placeholder="Enter value between 0 and 5"
                        style={{height: 100 + "%", width: 80 + "%", marginLeft: 2.5 + "em"}}
                        onChange={handleChange}
                />
            </div>
            <br></br>
            <button id="submit" type="submit" className="btn btn-primary" style={{backgroundColor: "darkcyan", borderColor: 'black', color: 'white'}}>Grade</button>
            <br></br>
            <br></br>
        </form>
        </div>
        </CenteredContainer>
    )
}

export default GradeDrive;