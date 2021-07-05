import React from 'react'
import Layout from './../components/Layout/Index.js';
import TextField from '@material-ui/core/TextField';
import "./css/form-validation.css"
import {useSelector, useDispatch} from 'react-redux';
import {CheckLogin, StatusOff} from './../redux/actions/AuthAction';
import { OrderDataPost, resetOrderState } from './../redux/actions/OrderActions';

const CheckOut = (props) => {
    const product = JSON.parse(localStorage.getItem('ProductDetails'))
    const checkOutData = JSON.parse(localStorage.getItem('checkOutData'))

    const [userId, setUserId] = React.useState()
    const [ state, setState ] = React.useState({
        FirstName:'',
        LastName:'',
        EmailAddress:'',
        MobileNumber:'',
        FullAddress:'',
        Landmark:'',
        PinCode:'',
        City:'',
        State:'',
    })

    React.useEffect( () => {
        if(localStorage.getItem("prevPath")){
            afterLoginFormSubmit()
        }
        if(localStorage.getItem("afterLoginCheckOutData")){
            let prevData =  JSON.parse(localStorage.getItem("afterLoginCheckOutData"))
            
            setState( { ...state,
                FirstName:prevData.FirstName,
                LastName:prevData.LastName,
                EmailAddress:prevData.EmailAddress,
                MobileNumber:prevData.MobileNumber,
                FullAddress:prevData.FullAddress,
                Landmark:prevData.Landmark,
                PinCode:prevData.PinCode,
                City:prevData.City,
                State:prevData.State,
            })
        }
        if(localStorage.getItem('token')){
            let token = localStorage.getItem('token')
      
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const tokenData = JSON.parse(window.atob(base64));
            setUserId(tokenData._id)
          }
    },[] )
   
    const dispatch = useDispatch();

    const authData = useSelector((reduxState)=>{
        console.log(reduxState.auth.authData)
        return reduxState.auth.authData
    })

    const inputChange = (e, name) => {
        setState(
            {
                ...state,
                [name]: e.target.value
            }
        )
    }

    const formSubmit = (e) => {
        e.preventDefault();

        let pro = [{
            ProductId:product._id,
            Quantity: checkOutData.Quantity,
            SetKaret: checkOutData.SetKaret,
            ToatalMakingCharge: checkOutData.ToatalMakingCharge,
            ProductPrice: checkOutData.ProductPrice,
            ShippingCharge: checkOutData.ShippingCharge,
            TaxAmount: checkOutData.TaxAmount,
            Discount: checkOutData.Discount,
            GoldPrice_1g: checkOutData.GoldPrice_1g,
            ProductGram: checkOutData.ProductGram,
        }]

        let shippingAddress = {   
            FirstName:state.FirstName,
            LastName:state.LastName,
            EmailAddress:state.EmailAddress,
            MobileNumber:state.MobileNumber,
            FullAddress:state.FullAddress,
            Landmark:state.Landmark,
            PinCode:state.PinCode,
            City:state.City,
            State:state.State,
        }

        let dt = {
            UserId:userId,
            product:pro,
            shippingAddress:shippingAddress
        }
        
        if(localStorage.getItem('token')){
            dispatch(OrderDataPost(dt))
            console.log(authData)
        } else {
            localStorage.setItem("afterLoginCheckOutData", JSON.stringify(shippingAddress))
            localStorage.setItem("prevPath", props.location.pathname)
            props.history.push('/signin')
        }   
    }

    const afterLoginFormSubmit = () => {
        dispatch(CheckLogin())
        localStorage.removeItem("prevPath")
    }

    const orderplaced = useSelector((reduxState)=>{
        if(reduxState.orderplaced.success){
          localStorage.removeItem("cart")
          localStorage.removeItem("cart_id")
          localStorage.removeItem("afterLoginCheckOutData")
          localStorage.removeItem("ProductDetails")
          localStorage.removeItem("userData")
          localStorage.removeItem("prevPath")
          dispatch(resetOrderState())
          props.history.push('/thankyou')
        }
        return true
    })
    

    return (
        <Layout>
            <div className="container" style={{ textAlign:"left", marginTop:"150px" }}>

                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            {/* <span className="badge badge-secondary badge-pill">3</span> */}
                        </h4>

                        <ul className="list-group mb-3">

                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-muted">{checkOutData.ProductTitle}</small>
                                </div>
                                <span className="text-muted">₹ {checkOutData.ProductPrice}</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Karat</h6>
                                    <small className="text-muted">Product Purity</small>
                                </div>
                                <span className="text-muted">{checkOutData.SetKaret}K</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Gram</h6>
                                    <small className="text-muted">Product Gram</small>
                                </div>
                                <span className="text-muted">{checkOutData.ProductGram}g</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Quantity</h6>
                                    <small className="text-muted">Product Quantity</small>
                                </div>
                                <span className="text-muted">{checkOutData.Quantity}</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Making Charge</h6>
                                    <small className="text-muted">Product Making Charge</small>
                                </div>
                                <span className="text-muted">₹ {checkOutData.ToatalMakingCharge}</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Shipping Charge</h6>
                                    <small className="text-muted">Product Shipping Charge</small>
                                </div>
                                <span className="text-muted">₹ {checkOutData.ShippingCharge}</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Discount</h6>
                                    <small className="text-muted">Discount on Product</small>
                                </div>
                                <span className="text-muted">₹ {checkOutData.Discount}</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Tax</h6>
                                    <small className="text-muted">Tax on Product</small>
                                </div>
                                <span className="text-muted">₹ {checkOutData.TaxAmount}</span>
                            </li>

                            {/* <li className="list-group-item d-flex justify-content-between bg-light card">
                                <div className="text-success">
                                    <h6 className="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span className="text-success">-$5</span>
                            </li> */}
                            
                            <div className="list-group-item d-flex justify-content-between">
                                <span>Total (INR)</span>
                                <strong>₹ {checkOutData.ProductPrice}</strong>
                            </div>

                        </ul>
                      
                        {/* <form className="card p-2">
                            <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                            </div>
                        </form> */}
                    </div>


                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>

                        <form className="needs-validation" onSubmit={ (e) => formSubmit(e) }>
                            <div className="row">
                                <div className="col-sm-6">
                                    <br/><TextField required 
                                    id="standard-required" 
                                    style={{width:"100%"}} 
                                    label="First Name"
                                    value={state.FirstName}  
                                    onChange={ (e) => inputChange(e, 'FirstName') }
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <br/><TextField 
                                    required 
                                    id="standard-required" 
                                    style={{width:"100%"}} 
                                    label="Last Name"
                                    value={state.LastName}  
                                    onChange={ (e) => inputChange(e, 'LastName') }  />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <br/><TextField 
                                    required 
                                    id="standard-required" 
                                    style={{width:"100%"}} 
                                    label="Email Address"
                                    value={state.EmailAddress}  
                                    onChange={ (e) => inputChange(e, 'EmailAddress') }  />
                                </div>
                                <div className="col-sm-6">
                                    <br/><TextField 
                                    required 
                                    id="standard-required" 
                                    style={{width:"100%"}} 
                                    label="Mobile Number"
                                    value={state.MobileNumber}  
                                    onChange={ (e) => inputChange(e, 'MobileNumber') }  />
                                </div>
                            </div>
                        

                            <div className="row">
                                <div className="col-sm-12">
                                    <br/><TextField 
                                    required 
                                    id="standard-required" 
                                    style={{width:"100%"}} 
                                    label="Full Address"
                                    value={state.FullAddress}  
                                    onChange={ (e) => inputChange(e, 'FullAddress') }  />
                                </div>
                                <div className="col-sm-6">
                                    <br/><TextField 
                                    required 
                                    id="standard-required" 
                                    style={{width:"100%"}} 
                                    label="Landmark"
                                    value={state.Landmark}  
                                    onChange={ (e) => inputChange(e, 'Landmark') }  />
                                </div>
                                <div className="col-sm-6">
                                    <br/><TextField 
                                    required 
                                    id="standard-required" 
                                    style={{width:"100%"}} 
                                    label="PinCode"
                                    value={state.PinCode}  
                                    onChange={ (e) => inputChange(e, 'PinCode') }  />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <br/><TextField 
                                    required 
                                    id="standard-required" 
                                    style={{width:"100%"}} 
                                    label="City"
                                    value={state.City}  
                                    onChange={ (e) => inputChange(e, 'City') }  />
                                </div>
                                <div className="col-sm-6">
                                    <br/><TextField 
                                    required 
                                    id="standard-required" 
                                    style={{width:"100%"}} 
                                    label="State"
                                    value={state.State}  
                                    onChange={ (e) => inputChange(e, 'State') }  />
                                </div>
                            </div>


                            <br />
                            <br />
                            

                            {/* <h4 className="mb-3">Payment</h4>

                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                                    <label className="custom-control-label" htmlFor="credit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit card</label>
                                    </div>
                                <div className="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="debit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Debit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="paypal">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paypal</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                    Name on card is required
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Credit card number is required
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Expiration date required
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Security code required
                                    </div>
                                </div>
                            </div> */}
                            {/* <hr className="mb-4" /> */}
                            <button id="main_cart_btn" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CheckOut;