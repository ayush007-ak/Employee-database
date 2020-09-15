import React from 'react'
import { Link } from 'react-router-dom'

function Employdetail() {
    return (
      <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <div className="row">
                <div className="col-md-4">
                 STUDENT PROFILE PICTURE 
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    <li
                      className="d-flex justify-content-between align-items-center list-group-item list-group-item-action"
                    >
                      <h3 className="m-0">EMPLOYEE NAME</h3>
                      <Link to="/EmployForm" className="btn btn-primary" href="!#">
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
