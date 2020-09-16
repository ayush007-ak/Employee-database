import React, {useState} from 'react'
import {useParams} from 'react-router-dom';
import Input from '../layout/Input';


function EmployForm() {
    const {id} = useParams();
    const [employee , setEmployee]= useState({
       name:"",
       email:"",
       phone:"",
       skills:"",
       address1:"",
       address2:"" 
    })

    const onInputChange = e => {
        setEmployee({...employee,[e.target.name]: e.target.value})
    }

   const submitForm = e => {
    e.preventDefault();

    if(id){
      alert("updated")
    }else{
      alert("add hogya")
    }
   }

    return (
        <div className="container">
        <div className="py-4">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card card-body shadow">
                <form onSubmit={submitForm}>
                  <div className="form-row form-group mb-4">
                    <div className="col-md-6">
                    <Input
                       placeholder="Enter Employee Name"
                        name="name"
                        value={employee.name}
                        onChange={onInputChange} />
                      
                    </div>
                    <div className="col-md-6">
                    <Input
                    placeholder="Enter  Employee E-mail"
                    name="email"
                    value={employee.email}
                    onChange={onInputChange} />
                     
                    </div>
                  </div>
                  <div className="form-row form-group mb-4">
                    <div className="col-md-6">
                    <Input
                    placeholder="Enter  Employee Phone"
                    name="phone"
                    value={employee.phone}
                    onChange={onInputChange} />
                     
                    </div>
                    
                    <div className="col-md-6">
                      <Input
                       
                        placeholder="Enter  Employee Skills"
                        name="skills"
                        value={employee.skills}
                        onChange={onInputChange}
                       
                      />
                    </div>
                  </div>
                  <div className="form-row form-group">
                    <div className="col-md-6">
                      <Input

                        placeholder="Enter  Employee Address Line 1"
                        name="address1"
                        value={employee.address1}
                        onChange={onInputChange}
                        
                      />
                    </div>
                    <div className="col-md-6">
                      <Input
                        
                        placeholder="Enter  Employee Line 2"
                        name="address2"
                        value={employee.address2}
                        onChange={onInputChange}
                                                   //form control increase the size
                      />
                    </div>
                  </div>                                                      
      
                  <button type="submit" className="btn btn-primary">  
                   {id ? "Update Employee" : "Add Employee"}   
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EmployForm
