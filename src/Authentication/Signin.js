import React from 'react';
import './auth_style.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Layout from './../components/Layout/Index.js';
import GoogleLogin from 'react-google-login';
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Loader from "react-loader-spinner";
import {SigninWidthForm, SigninWidthFacebook, SigninWidthGoogle} from './../redux/actions/AuthAction';
import {useSelector, useDispatch} from 'react-redux'
const Signin = (props) => {
    const[state, setState] = React.useState({
        Email:"",
        Password:""
    });
    const[EmailError, setEmailError] = React.useState('');
    const[PasswordError, setPasswordError] = React.useState('');
    const[UserNotFound, setUserNotFound] = React.useState(false);
    const[PasswordNotMatch, setPasswordNotMatch] = React.useState(false);

    const dispatch = useDispatch();

    const responseGoogle = (response) => {        
        dispatch(SigninWidthGoogle(response))
    }

    const responseGooglee = (response) => {
        localStorage.setItem('response_googlee', JSON.stringify(response))
    }

    const responseFacebook = (response) => {
        dispatch(SigninWidthFacebook(response))
    }



const Login = () => {
    if(state.Email!=='' && state.Password!==''){
        dispatch(SigninWidthForm(state))
    }
    else{
        setEmailError("this field is required")
        setPasswordError("this field is required")
    }
}

const loader = useSelector((reduxState)=>{
    return reduxState.auth.loader
})

const flash = useSelector((reduxState)=>{
    return reduxState.auth.flashStatus
  })

const globalData = useSelector((reduxState) => {
    if(reduxState.auth.loginStatus=='notfound'){
         return 'notfound';
    }
    
    else if(reduxState.auth.loginStatus=='passwordnotmatch'){
        return 'passwordnotmatch'
    }

    else if(reduxState.auth.loginStatus=='success'){
         localStorage.setItem('token', reduxState.auth.token)
         localStorage.setItem('userData', reduxState.auth.token)
         if(localStorage.getItem("prevPath")){
            props.history.push(localStorage.getItem("prevPath"))
         } else{
            props.history.push('/profile')
         }
         
    }
    
    else if(reduxState.auth.loginStatus=='notverified'){
        localStorage.setItem('VerifyEmail',state.Email)
        props.history.push('/verify-email');
    }

    else{
        
         console.log(reduxState.auth)
    }
})

if(flash){
    NotificationManager.success('Login Success','')
}

    return(
        <div id="without_footer">
        {console.log(globalData)}
        <Layout> 
        {loader ? 
         <Loader
        type="Puff"
        color="#A17D38"
        height={50}
        width={50}
        style={{marginTop:"20%", marginBottom:"20%"}}
      />  :
        <div className="container" style={{paddingBottom:50}}>
            <div className="row">
                <div className="col-lg-4 col-md-1 col-sm-2"></div>
                <div className="col-lg-4 col-md-10 col-sm-8" id="auth_box">
                   <center> <h5 style={{textAlign:"center"}}>Signin</h5></center>
                    <p style={{color:"gray", fontSize:12}}>Welcome back, you've been missed!</p>
                    {globalData=='notfound' ? <p style={{color:"red", textAlign:"left"}}><b>Username or Email Address not found</b></p> :null}
                    {globalData=='passwordnotmatch' ? <p style={{color:"red", textAlign:"left"}}><b>Password Not Matched</b></p> :null}
                    <TextField required id="standard-required" value={state.Email} onChange={(e)=>setState({...state, Email:e.target.value})} style={{width:"100%"}} label="Username or Email"  />
                    {state.Email =='' ?<p style={{color:"red", textAlign:"left", marginBottom:-7}}><b>{EmailError}</b></p> :null}
                    <TextField type="password" required id="standard-required" value={state.Password} onChange={(e)=>setState({...state, Password:e.target.value})} style={{width:"100%"}} label="Password"  />
                    {state.Password =='' ? <p style={{color:"red", textAlign:"left"}}><b>{PasswordError}</b></p> :null}
                    <div className="row">
                        <div className="col-sm-6 col-xs-6 col-6" id="f"><br />
                            <input type="checkbox" style={{float:"left", marginTop:3, marginLeft:12}} />
                            <p style={{float:"left", marginLeft:7}}>Remember me</p>
                        </div>
                        <div className="col-sm-6 col-xs-6 col-6" id="f"><br />
                            <p><Link to="/forgot-password">Forgot Password?</Link></p>
                        </div>
                        <div className="col-sm-12"><br />
                            <button type="button" className="form-control" onClick={()=>Login()} id="login_btn">SIGN IN</button>
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
                                    <button  id="google_btn" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <i className="fa fa-google"></i> Continue with Google</button>
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
                                <center><p>Don't have an account? <Link to="/signup">Signup</Link></p></center>
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

export default Signin