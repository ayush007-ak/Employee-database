import React, {useState , useEffect} from 'react'
import { Link , useParams } from 'react-router-dom'
import Avatar from "../layout/Avatar";
import {useFirestore} from 'react-redux-firebase';
import Loading from '../layout/Loading';
function Employdetail() {
  const {id} = useParams();

  const firestore = useFirestore();
  const [Employee , setEmployee] = useState(null);

  const loadEmployee =async () => {
    try{
     const docRef = firestore.collection("Employees").doc(id);
     const result = await docRef.get();
     if(result.exists){
       setEmployee(result.data())
     }else {
       console.log("Noi such Employee")
     }
    }catch(error){
       console.log("error:", error)
    }
  }
  
  useEffect(() =>{
    loadEmployee();
  }, []);

  
  if(!Employee){
    return <Loading/>
  }
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
                      <h3 className="m-0">{Employee.name}</h3>
                      <Link to={`/EmployForm/${id}`} className="btn btn-primary" href="!#">
                        edit profile
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <p>email: {Employee.email}</p>
                      <p>phone: {Employee.phone}</p>
                      <p>skills: {Employee.skills}</p>
                      <p>address 1: {Employee.address1}</p>
                      <p>address 2: {Employee.address2}</p>
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
