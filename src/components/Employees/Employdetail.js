import React from 'react'
import { Link , useParams } from 'react-router-dom'
import Avatar from "../layout/Avatar";
function Employdetail() {
  const {id} = useParams();
    return (
      <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <div className="row">
                <div className="col-md-4">
                <Avatar url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy1nMGEWTUcN6GJX1gJAmZxMcGihLeE2zwvg&usqp=CAU"/>   
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    <li
                      className="d-flex justify-content-between align-items-center list-group-item list-group-item-action"
                    >
                      <h3 className="m-0">EMPLOYEE NAME</h3>
                      <Link to={`/EmployForm/${id}`} className="btn btn-primary" href="!#">
                        edit profile
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <p>email: EMPLOYEE_EMAIL</p>
                      <p>phone: EMPLOYEE_PHONE</p>
                      <p>skills: EMPLOYEE_SKILLS</p>
                      <p>address 1: EMPLOYEE_ADDRESS1</p>
                      <p>address 2: EMPLOYEE_ADDRESS2</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Employdetail
