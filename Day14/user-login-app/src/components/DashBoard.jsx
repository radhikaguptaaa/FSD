import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom";


const DashBoard = (regDash) => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-8" style ={{ backgroundColor: "black", color:"wheat"}}>
                    <h1>Dashboard</h1>

                </div>
                <div className="col-sm-4" style ={{ backgroundColor: "black", color:"wheat"}}>

                    <h1>
                        <Link to = "/logout">Logout</Link>
                    </h1>

                </div>

                <div className="col-sm-12" style= {{backgroundColor : "grey"}}>
                    <h2>Welcome {regDash.name}</h2>
                    <h3>Email Id : {regDash.email}</h3>
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default DashBoard;
