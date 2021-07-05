import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Profile from './Profile';
import Signup from './../Authentication/Signup';
import ForgotPassword from './../Authentication/ForgotPassword';
import VerifyEmail from './../Authentication/VerifyEmail';
import Signin from './../Authentication/Signin';
import OTP from './../Authentication/OTP';
import {useSelector, useDispatch} from 'react-redux';

const PrivateRoute = () => {
    const[token, setToken] = React.useState();
    React.useEffect(()=>{
        setToken(localStorage.getItem('token'))
    },[])
    if(token){
    return(
              <>
              <Switch>
              <Route path="/verify-email" component={VerifyEmail} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/otp" component={OTP} />
              </Switch>
              </>
    )
}

else{
    return(
              <>
              <Route  component={Profile} />
              <Route path="/profile" component={Profile} />
              </>
    )
}
}

export default PrivateRoute;