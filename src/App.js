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


function App() {
  return (
<Provider store={store}>
<ReactReduxFirebaseProvider {...rrfProps}>

<BrowserRouter>
<div className="App">
<Navbar/>
<Switch>
<Route exact path ="/"component={Employees}/>
<Route exact path="/Employdetail/:id" component={Employdetail}/>
<Route exact path="/EmployForm/:id?" component={EmployForm}/>
</Switch>

</div>
</BrowserRouter>

</ReactReduxFirebaseProvider>
</Provider>
  );
}

export default App;
