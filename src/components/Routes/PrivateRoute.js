import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isLoaded , isEmpty} from 'react-redux-firebase';
import {useSelector} from 'react-redux';

import Loading from '../layout/Loading';

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useSelector(state =>state.firebase.auth);
    if(!isLoaded(auth)) {
      return <Loading/>
    }



    return !isEmpty(auth) ? (<Route {...rest} render = {(props) => <Component {...rest} {...props}/>}/>): (<Redirect to="/Login"/>); //render props
}

export default PrivateRoute;