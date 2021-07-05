import React from 'react';
import Layout from './../components/Layout/Index.js';
import Banner from './../components//Header/Banner.js';
import './../components/style.css';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom'

const ReturnPolicy = () => {
    return(
        <Layout>
            <div className="container" style={{paddingBottom:70}}>
             <div className="row">
                <div className="col-sm-12" style={{textAlign:"left", marginTop:0, marginBottom:30}}>
                      <Breadcrumb>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Return Policy</Breadcrumb.Item>
  </Breadcrumb>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h4 style={{textAlign:"left", fontWeight:"bold"}}>Return Policy</h4>

                    <div style={{marginTop:20}}>
                    <p style={{textAlign:"left"}}>
                        <b>1. Collection of Personally Identifiable Information </b><br />
                    </p>
                    <p style={{textAlign:"left"}}> We collect email address from you when you select email during the first app launch. This enables us to sync your wishlist and shopping cart already created by you on the BlueStone website. We also use your contact information to send you offers and recommendations based on your previous orders, your browsing history and your interests.</p>
                    </div>


                     <div style={{marginTop:20}}>
                    <p style={{textAlign:"left"}}>
                        <b>1. Collection of Personally Identifiable Information </b><br />
                    </p>
                    <p style={{textAlign:"left"}}> We collect email address from you when you select email during the first app launch. This enables us to sync your wishlist and shopping cart already created by you on the BlueStone website. We also use your contact information to send you offers and recommendations based on your previous orders, your browsing history and your interests.</p>
                    </div>


                     <div style={{marginTop:20}}>
                    <p style={{textAlign:"left"}}>
                        <b>1. Collection of Personally Identifiable Information </b><br />
                    </p>
                    <p style={{textAlign:"left"}}> We collect email address from you when you select email during the first app launch. This enables us to sync your wishlist and shopping cart already created by you on the BlueStone website. We also use your contact information to send you offers and recommendations based on your previous orders, your browsing history and your interests.</p>
                    </div>

                    
                </div>
            </div>

            
            </div>
            
        </Layout>
    );
}

export default ReturnPolicy;