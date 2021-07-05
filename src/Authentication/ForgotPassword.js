import React from 'react';
import './auth_style.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Layout from './../components/Layout/Index.js';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {ForgotPasswordAction, ResetPasswordAction, SigninWidthFacebook, SigninWidthGoogle} from './../redux/actions/AuthAction';
const ForgotPassword = (props) => {
const [state, setState] = React.useState({
    Email:"",
    Email_Error:""
})

const dispatch = useDispatch();

const Submit = () => {
    if(state.Email==''){
        setState({...state, Email_Error:"this field is required"})
    }
    else{
        dispatch(ForgotPasswordAction(state))
    }
}

const globalData = useSelector((reduxState)=>{
    return reduxState.auth.get_otp
})

if(globalData=='true'){
    localStorage.setItem('ResetPasswordEmail', state.Email)
    props.history.push('/reset-password')
}

console.log(globalData)
    return(
        <div id="without_footer">
        <Layout>
        <div className="container" style={{paddingBottom:50}}>
            <div className="row">
                <div className="col-md-4 col-sm-3"></div>
                <div className="col-md-4 col-sm-6" id="auth_box" style={{marginTop:100}}>
                    <h5 style={{textAlign:"center"}}>Forgot Password</h5>
                    <p style={{color:"gray", fontSize:12}}>Enter your email address and we will send you instructions on how to reset your password!</p>
                    <TextField required id="standard-required" style={{width:"100%"}} label="Username or Email" value={state.Email} onChange={(e)=>setState({Email:e.target.value})} /><br/><br/>
                    {state.Email=='' ?
                    <p style={{textAlign:"left", color:"red", marginTop:-15, }}> <b> {state.Email_Error}</b></p>
                    :null
                    }
                    {globalData=='false' ? <p style={{textAlign:"left", color:"red", marginTop:-20, }}> <b>invalid email address </b></p> :null}
                    
                    <div className="col-sm-12">
                        <button type="button" className="form-control" onClick={()=>Submit()} id="login_btn">GET OTP</button>
                    </div>
                </div>
                <div className="col-md-4 col-sm-3"></div>
            </div>
            <div className="col-sm-12" style={{marginTop:30}}>
                <center><p>Don't have an account? <Link to="/signup">Signup</Link></p></center>
            </div>
        </div>
        </Layout>
        </div>
    )
}

export default ForgotPassword