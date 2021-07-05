import React from 'react';
import { Drawer, Button, Radio, Space, Form, Input, Select, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './../style.css';
import './search_css.css';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Badge } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCartData, RemoveToCart, fetchcountCart} from './../../redux/actions/CartAction';

const Cart = (props) => {
	const [visible, setVisible] = React.useState(false);
    const Cart= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const Cartid= localStorage.getItem('cart_id') ? JSON.parse(localStorage.getItem('cart_id')) : [];
    const dispatch = useDispatch();
    React.useEffect(() => {
       setVisible(false)
       if(props.visible==true){
           setVisible(true)
       }
       dispatch(fetchCartData());
       dispatch(fetchcountCart());
    },[props.visible])

	const showDrawer = () => {
        setVisible(true)
	}

	const onClose = () => {
    setVisible(false)
	}

    const Remove = (id) => {
        // const newCart = [];
        // const newCartid = [];
        // Cart.map((row)=>{
        //     if(row._id!=id){
        //         newCart.push(row)
        //     }
        // })
        // localStorage.setItem('cart',JSON.stringify(newCart))


        //  Cartid.map((row)=>{
        //     if(row!=id){
        //         newCartid.push(row)
        //     }
        // })
        // localStorage.setItem('cart_id',JSON.stringify(newCartid))

    dispatch(RemoveToCart(id));
    }

const CartData = [];
const globalData = useSelector((reduxState) => {
  reduxState.cart.CartData.map((row)=>(
      CartData.push(
          <div id="item_box">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-xs-4 col-4" style={{padding:5}}>
                    <div id="img_box">
                        {row.product.ProductPictures[0]!=undefined ? <img src={row.product.ProductPictures[0].url} style={{width:"100%"}} /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" /> }
                    </div>
                </div>

                <div className="col-sm-8 col-xs-8 col-8" style={{padding:5}}>
                    <h5 style={{fontSize:17}}>{row.product.ProductTitle}</h5>
                    <p style={{fontSize:11,}}>{row.product.SUK}</p>

                   <div className="row">
                        <div className="col-sm-7 col-xs-6 col-6">
                             <h5 style={{marginTop:10}}><b>Rs.{Math.trunc(row.product.ProductPrice.ProductPrice)}</b></h5>
                    <p style={{fontSize:11,}}>Weight (Grams):1.501</p>
                    
                        </div>

                        <div className="col-sm-5 col-xs-6 col-6" style={{marginTop:-20, padding:0}}>
                            <div class="number" style={{marginTop:10}}>
                                        <Link><span class="minus" style={{color:"black"}}>-</span></Link>
                                        <input readonly type="text" value="1"/>
                                        <Link style={{fontSize:25, color:"black", marginTop:10}}><span class="plus">+</span></Link>
                                        </div>
                                <center><Link id="remove" onClick={()=>Remove(row._id)} style={{textAlign:"center", color:"black"}}>Remove</Link></center>
                        </div>
                   </div>
                </div>
            </div>        
            </div>
            </div>
      )
  ))
})




    return (
	<div>
    
    <Drawer
          width={500}
          onClose={() => onClose()}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >  <center><button id="proceed_to_checkout" >PROCEED TO CHECKOUT</button></center>
           
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <div style={{height:20, width:"100%", background:"#093363"}}></div>
            <div className="container" style={{padding:0}}>
            <div id="sideBar_checkout" style={{marginRight:20}}>
            <h6>Shopping Cart</h6>
            <button id="shop_close" onClick={()=>onClose()} style={{float:"right", background:"none", border:"none", fontSize:20, marginTop:-30}}>X</button>
            </div>

            {CartData}
            
            <div className="container">
                <div className="row">
                <div className="col-sm-12" style={{padding:10}}>
                    <center><button id="proceed_to_checkout" style={{background:"white", border:"1px solid #093363", color:"#093363"}}>Continue Shopping</button></center>
                </div>
            </div>
            </div>
            </div>
          </Form>
        </Drawer>
      </div>
    );
}

export default Cart
