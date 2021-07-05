import React from 'react';
import Layout from '../components/Layout/Index.js';
import './../components/style.css';
import {Link} from 'react-router-dom'

const Thankyou = () => {
    return(
        <Layout>
            <div className="container" style={{paddingBottom:70, textAlign: 'center'}}>
            <br />
            <br />
                <h1>Thank you</h1>
                <p>Your order has been placed</p>

                <Link to="/"
                    style={{background:"#093363", color:"white", width:"200px"}}
                    className="btn mt-5" >
                    Continue to shopping
                </Link>  
            </div>
        </Layout>
    );
}

export default Thankyou;