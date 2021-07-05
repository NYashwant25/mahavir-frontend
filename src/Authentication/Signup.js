import React from 'react';
import './auth_style.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Layout from './../components/Layout/Index.js';
import GoogleLogin from 'react-google-login';
import {Link} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {useSelector, useDispatch} from 'react-redux';
import Loader from "react-loader-spinner";
import validator from 'validator';
import {SignupForm, SigninWidthFacebook, SigninWidthGoogle} from './../redux/actions/AuthAction';
const Signup = (props) => {

const [state, setState] = React.useState({
    FirstName:"",
    LastName:"",
    GoogleProfile:"",
    FacebookProfile:"",
    GoogleId:"",
    FacebookId:"",
    UserName:"",
    UserNameError:"",
    EmailError:"",
    PasswordError:"",
    MobileError:"",
    Email:"",
    EmailValidate:"",
    PasswordValidate:"",
    MobileValidate:"",
    Mobile:"",
    Password:"",
    Color:"",
    required:false,
    exists:false
})

const dispatch = useDispatch();

const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
};

const Register = () => {
    if(state.UserName!='' &&  state.Email!='' && state.Mobile!='' && state.Password!=''){
        if(validator.isEmail(state.Email)){
            if(state.Password.length>5){
            if(state.Mobile.length==10){
            localStorage.setItem('VerifyEmail',state.Email)
            dispatch(SignupForm(state))
            }
            else{
            setState({...state, MobileValidate:"please enter a 10 digit mobile number"})    
            }
            }
            else{
            setState({...state, PasswordValidate:"password length min 6 character"})
            }
        }
        else{
            setState({...state, EmailValidate:"invalid email address"})
        }
    }
    else{
        setState({
            ...state, EmailError:'this field is required', 
                        PasswordError:"this field is required",
                        MobileError:"this field is required",
                        UserNameError:"this field is required"
        })
    }
}

const loader = useSelector((reduxState)=>{
    return reduxState.auth.loader
})

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


const responseGoogle = (response) => {        
    setState({...state, FirstName:response.profileObj.givenName, LastName:response.profileObj.familyName, Email:response.profileObj.email, GoogleId:response.profileObj.googleId, GoogleProfile:response.profileObj.imageUrl})
    dispatch(SigninWidthGoogle(state))
}

const responseGooglee = (response) => {
    localStorage.setItem('response_googlee', JSON.stringify(response))
}

const responseFacebook = (response) => {
  console.log(response);
}


    return(
        <div id="without_footer">
        <Layout>
        {loader ? 
         <Loader
        type="Puff"
        color="#A17D38"
        height={50}
        width={50}
        style={{marginTop:"20%", marginBottom:"20%"}}
      />   
      :
        <div className="container" style={{paddingBottom:50}}>
            <div className="row">
                <div className="col-lg-4 col-md-1 col-sm-2"></div>
                <div className="col-lg-4 col-md-10 col-sm-8" id="auth_box">
                    <h5 style={{textAlign:"center"}}>Create your account</h5>
                    <p style={{color:"gray", fontSize:12}}>after your registration is complete. you can see our opportunity products</p>
                    {globalData=='exist' ? <p style={{color:"red", textAlign:"left"}}><b>UserName or Email already exists!</b></p> :null}
                    <TextField required id="standard-required" onKeyDown={handleKeyDown} value={state.UserName}  style={{width:"100%"}} label="Username" onChange={(e)=>setState({...state, UserName:e.target.value})} />
                    {state.UserName=='' ?
                    <p style={{textAlign:"left", color:"red", marginTop:5, marginBottom:-5,}}> <b> {state.UserNameError}</b></p>
                    :null}
                    <TextField required id="standard-required" value={state.Email} onKeyDown={handleKeyDown} style={{width:"100%"}} label="Email Address" onChange={(e)=>setState({...state, Email:e.target.value})}  />
                    {state.Email=='' ?
                    <p style={{textAlign:"left", color:"red", marginTop:5, marginBottom:-5,}}> <b> {state.EmailError}</b></p>
                    :null}
                    <p style={{textAlign:"left", color:"red", marginTop:0, marginBottom:0,}}> <b> {state.EmailValidate}</b></p>
                    <TextField type="password" required id="standard-required" value={state.Password} onKeyDown={handleKeyDown} style={{width:"100%"}} label="Password" onChange={(e)=>setState({...state, Password:e.target.value})}  />
                    {state.Password=='' ?
                    <p style={{textAlign:"left", color:"red", marginTop:5, marginBottom:-5,}}> <b> {state.PasswordError}</b></p>
                    :null}
                    <p style={{textAlign:"left", color:"red", marginTop:2, marginBottom:0,}}> <b> {state.PasswordValidate}</b></p>
                    <TextField required id="standard-required" type="number" value={state.Mobile} onKeyDown={handleKeyDown} style={{width:"100%"}} label="Mobile Number" onChange={(e)=>setState({...state, Mobile:e.target.value})}  />
                    {state.Mobile=='' ?
                    <p style={{textAlign:"left", color:"red", marginTop:5, marginBottom:-5,}}> <b>{state.MobileError}</b></p>
                    :null}
                    <p style={{textAlign:"left", color:"red", marginTop:2, marginBottom:0,}}> <b> {state.MobileValidate}</b></p>
                    <br /><br />
                    <div className="row">
                        <div className="col-sm-6 col-xs-6 col-6" id="f">
                            {/* <input type="checkbox" style={{float:"left", marginTop:3, marginLeft:12}} />
                            <p style={{float:"left", marginLeft:7}}>Remember me</p> */}
                        </div>
                        <div className="col-sm-6 col-xs-6 col-6" id="f">
                            <p style={{marginTop:-20}}><Link to="/forgot-password">Forgot Password?</Link></p>
                        </div>
                        <div className="col-sm-12">
                            <button type="button" className="form-control" id="login_btn" onClick={()=>Register()}>SIGN UP</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-3"></div>
            </div>
            <div className="row" style={{marginTop:-20}}>
                <div className="col-md-3 col-sm-3"></div>
                    <div className="col-lg-6 col-md-12">
                       <div className="row" style={{marginTop:50}}>
                            <div className="col-sm-6">
                                   <GoogleLogin
                                    clientId="276354919009-6qvg5bvqrv54lhg7f0g9a1f3o9oqq8r8.apps.googleusercontent.com"
                                    render={renderProps => (
                                    <button id="google_btn" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-google"></i> Continue with Google</button>
                                    )}
                                    buttonText="Login"
                                    uxMode='popup'
                                    redirectUri="http://localhost:3000"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGooglee}
                                    cookiePolicy={'single_host_origin'}
                                    />
                            </div>

                            <div className="col-sm-6">
                            <FacebookLogin
                            appId="234387615021787"
                            callback={responseFacebook}
                            render={renderProps => (
                            <button id="facebook_btn" onClick={renderProps.onClick}><i className="fa fa-facebook"></i> Continue with Facebook</button>
                            )}
                            />
                            </div>
                            <div className="col-sm-12" style={{marginTop:30}}>
                                <center><p>Don't have an account? <Link to="/signin">Signin</Link></p></center>
                            </div>
                       </div>
                    </div>
                <div className="col-md-3 col-sm-3"></div>
                </div>
        </div>
}
        </Layout>
        </div>
    )
}

export default Signup