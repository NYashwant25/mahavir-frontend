import React from 'react';
import Layout from './../components/Layout/Index.js';
import './../components/style.css';
import TextField from '@material-ui/core/TextField';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom'
const Careers = () => {
    return(
        <Layout>
            <div className="container">
             <div className="row" id="bread_crumb">
                <div className="col-sm-12" style={{textAlign:"left", marginTop:10, marginBottom:20}}>
                      <Breadcrumb>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Careers</Breadcrumb.Item>
  </Breadcrumb>
                </div>
            </div>
                <div className="row">
                <div className="col-sm-1"></div>
                    <div className="col-sm-10">                    
                        <center><h5 style={{textAlign:"center", color:"gray"}}>Careers</h5></center>
                        <center><p>Our Customer are at the heart of everything we do at Mahaveer Ashok. In these unprecedented times where we are recovering from a pandemic and figuring out the new normal for us, we urge you to make use of this Book. An Appointment service on our website. Thus we can not only provide personalizedcare to you at the store, we can also adhere to social distancing norms and thus provde a safe and secure environment so that you can have peace of mind while shopping at your favourite Mahaveer Ashok store.</p></center>
                    </div>
                </div>
            </div>

        <div style={{background:"#BCE1FB", padding:30}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">                    
                       <img src="assets/images/girl_banner.jpg" style={{width:"100%"}} />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">                    
                       <div id="form_box">
                            <div className="row">
                                <div className="col-sm-12">
                                    <br/><TextField required id="standard-required" style={{width:"100%"}} label="User or Email" value=" "  />
                                </div> 
                                 <div className="col-sm-12">
                                    <br/><TextField required id="standard-required" style={{width:"100%"}} label="User or Email" value=" "  />
                                </div> 
                                 <div className="col-sm-4">
                                    <br/><TextField required id="standard-required" style={{width:"100%"}} label="User or Email" value=" "  />
                                </div> 
                                <div className="col-sm-4">
                                    <br/><TextField required id="standard-required" style={{width:"100%"}} label="User or Email" value=" "  />
                                </div> 
                                <div className="col-sm-4">
                                    <br/><TextField required id="standard-required" style={{width:"100%"}} label="User or Email" value=" "  />
                                </div>  
                                 <div className="col-sm-12">
                                    <br/><TextField required id="standard-required" style={{width:"100%"}} label="User or Email" value=" "  />
                                </div> 
                                 <div className="col-sm-6">
                                    <br/><TextField required id="standard-required" style={{width:"100%"}} label="User or Email" value=" "  />
                                </div> 
                                <div className="col-sm-6">
                                    <br/><TextField required id="standard-required" style={{width:"100%"}} label="User or Email" value=" "  />
                                </div> 
                                <div className="col-sm-6">
                                    <br/><TextField required id="standard-required" style={{width:"100%"}} label="User or Email" value=" "  />
                                </div> 
                                <div className="col-sm-6">
                                    <br/><TextField required id="standard-required" style={{width:"100%"}} label="User or Email" value=" "  />
                                </div> 
                                <div className="col-sm-12">
                                <center><button id="book_btn">Book Now</button></center>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container" style={{textAlign:"left"}}>
                <div className="row">
                    
                    <div className="col-sm-10" style={{paddingTop:80, paddingBottom:70}}>
                        <h5>TRY AT HOME</h5><br/>
                        <p>1. Fill the details in the form pertaining to the  store you want to visit with a convenient date and  time of your choice.</p>
                        <p>2. Fill the details in the form pertaining to the  store you want to visit with a convenient date and  time of your choice.</p>
                        <p>3. At the store, our store Manager will personally assist you to choose from a range of handpicked designs kept aside as per your preference Safety is our prime concern, hence we ensure to take utmost care in  Jwellary handling, we have ensured to sanitize the Jewellary pieces before and after any trails. while you are at  our premises, be assured to takeaway a personalized and safe shopping experience.</p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </Layout>
    );
}

export default Careers;