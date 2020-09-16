import React from 'react'
import {Link} from 'react-router-dom';
import Avatar from "../layout/Avatar";


function Employees() {
    return (
        <div className="container">
  <div className="py-4">
    <div className="row">
       {
      //dummy array
      new Array(12).fill("").map((item, index) => (
        <div className="col-lg-3 col-md-6 mb-4" key={index}>
        <div className="card shadow text-center py-4">
       <Avatar url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy1nMGEWTUcN6GJX1gJAmZxMcGihLeE2zwvg&usqp=CAU"/>                                                   
          <div className="card-body">
            <h5 className="card-title mb-0">Student Name</h5>
            <p className="text-muted small">Student E-mail</p>
            <Link to={`/Employdetail/${index}`} className="btn btn-primary btn-profile">
             view profile
            </Link>
            <button className="btn btn-edit">
              <span className="material-icons">delete_outline</span>
            </button>
          </div>
        </div>
      </div>
      ))
       }
    </div>
  </div>
</div>

    )
}

export default Employees
