import React from 'react';
import Layout from './../components/Layout/Index.js';
import Banner from './../components//Header/Banner.js';
import './../components/style.css';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom'
const Contact = () => {
    return(
        <Layout>
            <div className="container" style={{paddingBottom:70}}>
             <div className="row">
                <div className="col-sm-12" style={{textAlign:"left", marginTop:-30, marginBottom:30}}>
                      <Breadcrumb>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Contact</Breadcrumb.Item>
  </Breadcrumb>
                </div>
            </div>
                <div className="row">
                    <div className="col-sm-6" id="contact_page_col">                    
                    <img src="https://cdn.shopify.com/s/files/1/0313/2234/1509/products/IMG_6734_LR_2048x.jpg?v=1593355011" />
                    </div>

                    <div className="col-sm-6" id="contact_page_col_2">                    
                      <h5 style={{color:"gray"}}>WE HAVE EVERYTHING YOU NEED</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p><br /><br/>
                      <Link to="/contact" id="contact_btn">Contact Us &nbsp;&nbsp;&nbsp; <i className="fa fa-long-arrow-right"></i></Link>
                    </div>
                </div>


                  <div className="row" style={{marginTop:70}}>
                      <div className="col-sm-3"></div>                    
                    <div className="col-sm-6">                    
                        <center> <h5 style={{color:"gray"}}>WE HAVE EVERYTHING YOU NEED</h5></center>
                         <p style={{color:"gray", fontSize:11}}>Lorem  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                    <div className="col-sm-3"></div>   
                    
                     <div className="col-sm-4" style={{marginTop:30}}>    
                     <center><i className="fa fa-clock-o fa-4x" style={{color:"gray"}}></i></center>
                        <h6 style={{color:"gray", marginTop:10}}>FREE RESOURCES</h6>
                        <p style={{color:"gray", fontSize:10, marginTop:10}}>Lorem  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                     </div> 

                      <div className="col-sm-4" style={{marginTop:30}}>    
                     <center><i className="fa fa-clock-o fa-4x" style={{color:"gray"}}></i></center>
                        <h6 style={{color:"gray", marginTop:10}}>FREE RESOURCES</h6>
                        <p style={{color:"gray", fontSize:10, marginTop:10}}>Lorem  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                     </div> 

                      <div className="col-sm-4" style={{marginTop:30}}>    
                     <center><i className="fa fa-clock-o fa-4x" style={{color:"gray"}}></i></center>
                        <h6 style={{color:"gray", marginTop:10}}>FREE RESOURCES</h6>
                        <p style={{color:"gray", fontSize:10, marginTop:10}}>Lorem  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                     </div>                 
                </div>

                <div className="row" style={{marginTop:80}}>
                  <div className="col-sm-6" id="contact_page_col_2">                    
                      <h5 style={{color:"gray"}}>WE HAVE EVERYTHING YOU NEED</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p><br /><br/>
                      <Link to="/contact" id="contact_btn">Contact Us &nbsp;&nbsp;&nbsp; <i className="fa fa-long-arrow-right"></i></Link>
                    </div>
                    <div className="col-sm-6" id="contact_page_col">                    
                    <img src="https://cdn.shopify.com/s/files/1/0313/2234/1509/products/IMG_6734_LR_2048x.jpg?v=1593355011" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;