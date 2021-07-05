import React from 'react';
import './auth_style.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Layout from './../components/Layout/Index.js';
import GoogleLogin from 'react-google-login';
import {Link} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {useSelector, useDispatch} from 'react-redux';
import validator from 'validator';
import {SignupForm, ResetPasswordAction, SigninWidthFacebook, SigninWidthGoogle} from './../redux/actions/AuthAction';
const ResetPassword = (props) => {
const [state, setState] = React.useState({
    ConfirmPasswordError:"",
    Password:"",
    PasswordError:"",
    ConfirmPassword:"",
    PasswordValidate:"",
    OTP:"",
    OTP_Error:"",
    NOtMatchPassword:"",
    Email:""
})

React.useEffect(()=>{
    setState({...state, Email:localStorage.getItem('ResetPasswordEmail')})
},[])


const dispatch = useDispatch();

const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
};

const Register = () => {
    if(state.Password!='' && state.OTP!='' && state.ConfirmPassword){
       if(state.Password.length<6){
           setState({...state, PasswordValidate:'password length must minimum 6 character'})
       }
       else{
           if(state.Password==state.ConfirmPassword){
               dispatch(ResetPasswordAction(state))
           }
           else{
               setState({...state, NOtMatchPassword:"password not matched"})
           }
       }
    }
    else{
        setState({
            ...state, PasswordError:'this field is required', 
                        ConfirmPasswordError:"this field is required",
                        OTP_Error:"this field is required"
        })
    }
}


const globalData = useSelector((reduxState) => {
    if(reduxState.auth.login==true){
        props.history.push('/verify-email')
    }
    
    if(reduxState.auth.registerStatus=='exist'){
     return  'exist';
    }

    else if(reduxState.auth.registerStatus=='verified'){
    props.history.push('/verify-email')
    }
})

if(localStorage.getItem('ResetPasswordEmail')){
    return(
        <div id="without_footer">
        <Layout>
        <div className="container" style={{paddingBottom:50}}>
            <div className="row">
                <div className="col-lg-4 col-md-1 col-sm-2"></div>
                <div className="col-lg-4 col-md-10 col-sm-8" id="auth_box">
                    <h5 style={{textAlign:"center"}}>Reset Password</h5>
                    {/* <p style={{color:"gray", fontSize:12}}>after your registration is complete. you can see our opportunity products</p> */}
                    <TextField type="number" required id="standard-required" value={state.OTP} onKeyDown={handleKeyDown} style={{width:"100%"}} label="otp" onChange={(e)=>setState({...state, OTP:e.target.value})}  />
                    {state.OTP=='' ?
                    <p style={{textAlign:"left", color:"red", marginTop:5, }}> <b> {state.OTP_Error}</b></p>
                    :null
                    }
                    <TextField type="password" required id="standard-required" value={state.Password} onKeyDown={handleKeyDown} style={{width:"100%"}} label="Password" onChange={(e)=>setState({...state, Password:e.target.value})}  />
                    {state.Password=='' ?
                    <p style={{textAlign:"left", color:"red", marginTop:5}}> <b> {state.PasswordError} </b> </p>
                    :null}
                    {state.Password.length<6 ?
                    <p style={{textAlign:"left", color:"red", marginTop:5, marginBottom:5,}}> <b> {state.PasswordValidate} </b> </p>
                    :null}
                    
                    <TextField required id="standard-required" type="password" value={state.ConfirmPassword} onKeyDown={handleKeyDown} style={{width:"100%"}} label="Confirm Password" onChange={(e)=>setState({...state, ConfirmPassword:e.target.value})}  />
                    {state.ConfirmPassword=='' ?
                    <p style={{textAlign:"left", color:"red", marginTop:5, marginBottom:-5,}}> <b>{state.ConfirmPasswordError}</b></p>
                    :null}
                    {state.Password!=state.ConfirmPassword ?
                    <p style={{textAlign:"left", color:"red", marginTop:5, marginBottom:-5,}}> <b>{state.NOtMatchPassword}</b></p>
                    :null
                    }
                    
                    <br /><br />
                    <div className="row">
                        <div className="col-sm-6 col-xs-6 col-6" id="f">
                            {/* <input type="checkbox" style={{float:"left", marginTop:3, marginLeft:12}} />
                            <p style={{float:"left", marginLeft:7}}>Remember me</p> */}
                        </div>
                        <div className="col-sm-6 col-xs-6 col-6" id="f">
                            <p style={{marginTop:-10}}><Link to="/forgot-password">Forgot Password?</Link></p>
                        </div>
                        <div className="col-sm-12">
                            <button type="button" className="form-control" id="login_btn" onClick={()=>Register()}>SIGN UP</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-3"></div>
            </div>
           
        </div>
        </Layout>
        </div>
    )
}
else{
    return(
        <div>
            {props.history.push('/signin')}
        </div>
    )
}
}

export default ResetPassword