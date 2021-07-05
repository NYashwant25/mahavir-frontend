import React from 'react';
import './auth_style.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Layout from './../components/Layout/Index.js';
import {Link} from 'react-router-dom';
const OTP = () => {
    return(
    <div id="without_footer">
        <Layout>
        <div className="container" style={{paddingBottom:50}}>
            <div className="row">
                <div className="col-md-4 col-sm-3"></div>
                <div className="col-md-4 col-sm-6" id="auth_box">
                    <h5>Forgot Password</h5>
                    <p style={{color:"gray", fontSize:12}}>Enter your email address and we will send you instructions on how to reset your password!</p>
                    <TextField required id="standard-required" style={{width:"100%"}} label="Username or Email"  /><br/><br/>
                    
                     <div className="col-sm-12">
                            <button type="button" id="login_btn">GET OTP</button>
                        </div>
                </div>
                <div className="col-md-4 col-sm-3"></div>
            </div>
            <div className="col-sm-12" style={{marginTop:30}}>
                                <center><p>Don't have an account? <Link to="/signin">Signin</Link></p></center>
                            </div>
        </div>
        </Layout>
        </div>
    )
}

export default OTP