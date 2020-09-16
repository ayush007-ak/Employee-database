import React from 'react';
import Employees from './components/Employees/Employees';
import Navbar from './components/layout/Navbar';
import {BrowserRouter , Switch, Route} from "react-router-dom";
import './styles/App.scss';
import Emplydetail from './components/Employees/Employdetail';
import Employdetail from  './components/Employees/Employdetail';
import EmployForm from './components/Employees/EmployForm';

function App() {
  return (
   <BrowserRouter>
   <div className="App">
   <Navbar/>
   <switch>
   <Route exact path ="/"component={Employees}/>
   <Route exact path="/Employdetail/:id" component={Employdetail}/>
   <Route exact path="/EmployForm/:id?" component={EmployForm}/>
   </switch>
  
  </div>
  </BrowserRouter>
  );
}

export default App;
