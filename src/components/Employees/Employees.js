import React from 'react'
import {Link} from 'react-router-dom';
import Avatar from "../layout/Avatar";
import { useFirestoreConnect , useFirestore } from 'react-redux-firebase';
import {useSelector} from 'react-redux';
import Loading from '../layout/Loading';
const Employees = () => {


   const firestore = useFirestore();
   const Employees = useSelector(state => state.firestore.ordered.Employees);
   console.log(Employees)

  useFirestoreConnect([
    {
 collection: "Employees",
//  orderBy:["createdAt", "desc"],
    },
  ]);

  if(!Employees){
    return <Loading/>
  }



    const deleteEmployees = async (id) =>{
      try{
       await firestore.collection("Employees").doc(id).delete()
      }catch(error){
        console.log("error" + error)
      }
    } 




    return (
        <div className="container">
  <div className="py-4">
    <div className="row">
       {
      //dummy array
      Employees.map((Employee) => (
        <div className="col-lg-3 col-md-6 mb-4" key={Employee.id}>
        <div className="card shadow text-center py-4">
       <Avatar url={"https://cdn.onlinewebfonts.com/svg/img_453061.png"}/>                                                   
          <div className="card-body">
            <h5 className="card-title mb-0">{Employee.name}</h5>
            <p className="text-muted small">{Employee.email}</p>
            <Link to={`/Employdetail/${Employee.id}`} className="btn btn-primary btn-profile">
             view profile
            </Link>
            <button className="btn btn-edit" onClick={() => deleteEmployees(Employee.id)}>
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

export default Employees;
