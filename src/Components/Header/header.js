import React from "react";
import {Link} from 'react-router-dom';

const header = (props) => {
    
    let register = (<Link className="nav-link" to={"/register"}>Register</Link>);
    let login = (<Link className="nav-link" to={"/login"}>Login</Link>);
    let requests = (<Link className="nav-link" to={"/requests"}>Requests</Link>)
    let drivers = (<Link className="nav-link" to={"/drivers"}>Drivers</Link>)
    let rebumk = (<a style={{marginLeft: 10 + "em"}} className="navbar-brand" href="/home">RebuMK</a>)

    return (
        <header>
            <nav style={{ borderRadius: 2 + "em"}} className="navbar navbar-expand-md navbar-light navbar-fixed bg-light">
                {rebumk}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto" style={{marginRight: 40 + "em"}}>
                        <li className="nav-item active">
                            {requests}
                        </li>
                        <li className="nav-item active">
                            {drivers}
                        </li>

                    </ul>
                    <form style={{marginLeft: 1 + "em"}} className="form-inline mt-2 mt-md-0 ml-3">
                        {register}
                    </form>
                    <form style={{marginLeft: 1 + "em"}} className="form-inline mt-2 mt-md-0 ml-3">
                        {login}
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default header;