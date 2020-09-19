import React from 'react';
import Employees from './components/Employees/Employees';
import Navbar from './components/layout/Navbar';
import {BrowserRouter , Switch, Route} from "react-router-dom";
import './styles/App.scss';
//import Emplydetail from './components/Employees/Employdetail';
import Employdetail from  './components/Employees/Employdetail';
import EmployForm from './components/Employees/EmployForm';
import {Provider} from 'react-redux';
import store, {rrfProps} from './store';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import  Login  from './components/pages/Login';
import PrivateRoute from './components/Routes/PrivateRoute';


function App() {
  return (
<Provider store={store}>
<ReactReduxFirebaseProvider {...rrfProps}>

<BrowserRouter>
<div className="App">
<PrivateRoute component={Navbar}/>

<Switch>
<PrivateRoute exact path ="/"component={Employees}/>
<PrivateRoute exact path="/Employdetail/:id" component={Employdetail}/>
<PrivateRoute exact path="/EmployForm/:id?" component={EmployForm}/>
<Route exact path= "/Login" component={Login}/>
</Switch>
</div>
</BrowserRouter>

</ReactReduxFirebaseProvider>
</Provider>
  );
}

export default App;
