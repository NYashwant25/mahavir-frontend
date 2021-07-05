import React from 'react';
import './auth_style.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Layout from './../components/Layout/Index.js';
import {Link} from 'react-router-dom';
import Loader from "react-loader-spinner";
import {useSelector, useDispatch} from 'react-redux';
import {SignupForm, VerifyEmailOTP} from './../redux/actions/AuthAction'
const VerifyEmail = (props) => {
const [state, setState] = React.useState({
    OTP:"",
    Email:"",
    OTPError:""
})

React.useEffect(() => {
   setState({...state, Email:localStorage.getItem('VerifyEmail')});
}, [])

const loader = useSelector((reduxState)=>{
    return reduxState.auth.loader
})

const dispatch = useDispatch();

const Verify = () => {
    if(state.Email.length>5){
    setState({...state, OTPError:""})
    dispatch(VerifyEmailOTP(state));
    }
    else{
    setState({...state, EmailError:"Invalid OTP"})
    }
}

const globalData = useSelector((reduxState) => {
    return reduxState.auth.VerifyStatus
})

    
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
                <div className="col-md-4 col-sm-3"></div>
                <div className="col-md-4 col-sm-6" id="auth_box" style={{marginTop:100}}>
                    <h5 style={{textAlign:"center"}}>Verify Your Email Address</h5>
                    <p style={{color:"gray", fontSize:12}}>Enter your email address and we will sent you!</p>
                    <TextField required id="standard-required" type="number" value={state.OTP} onChange={(e)=>setState({...state,OTP:e.target.value})} style={{width:"100%"}} label="OTP"  /><br/><br/>
                    <p style={{textAlign:"left", color:"red", marginTop:-25, marginBottom:10,}}> <b> {state.EmailError}</b></p>
                    {
                        globalData=='invalid' ?
                        <p style={{textAlign:"left", color:"red", marginTop:-15, marginBottom:10,}}> <b>Invalid OTP</b></p>
                        :
                        globalData=='verified' ?
                        props.history.push('/signin')
                        :
                        null
                    }
                        <div className="col-sm-12">
                            <button type="button" id="login_btn" onClick={()=>Verify()}>Verify Now</button>
                        </div>
                </div>
                <div className="col-md-4 col-sm-3"></div>
            </div>
            <div className="col-sm-12" style={{marginTop:30}}>
                                <center><p>Don't have an account? <Link to="/signin">Signin</Link></p></center>
                            </div>
        </div>
}
        </Layout>
        </div>
    )
}

export default VerifyEmail