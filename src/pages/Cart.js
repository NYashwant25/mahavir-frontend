import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Layout from './../components/Layout/Index.js';
import TextField from '@material-ui/core/TextField';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux';
import { OrderDataPost, resetOrderState } from './../redux/actions/OrderActions';

// ------------------------------------------------------
const Cart = (props) => {
  const authData = useSelector((reduxState)=>{
  })

  const [userId, setUserId] = useState()
  const [FirstNameError, setFirstNameError] = useState(false)
  const [LastNameError, setLastNameError] = useState(false)
  const [EmailAddressError, setEmailAddressError] = useState(false)
  const [MobileNumberError, setMobileNumberError] = useState(false)
  const [FullAddressError, setFullAddressError] = useState(false)
  const [LandmarkError, setLandmarkError] = useState(false)
  const [PinCodeError, setPinCodeError] = useState(false)
  const [CityError, setCityError] = useState(false)
  const [StateError, setStateError] = useState(false)

  const [ totalPrice, settotalPrice] = useState(0)
  const [ totalGram, settotalGram] = useState(0)
  const [ totalQuanity, settotalQuanity] = useState(0)
  const [ totalShippingCharge, settotalShippingCharge] = useState(0)
  const [ totalMakkingCharge, settotalMakkingCharge] = useState(0)
  const [ totalDescount, settotalDescount] = useState(0)
  const [ totalTaxAmount, settotalTaxAmount] = useState(0)

  const [state, setState] = useState({
    currentStep: 1,
    email: '',
    username: '',
    password: '',
    orders:[],

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
  
  const dispatch = useDispatch();
  const CartData= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

  React.useEffect(() => {

    if(localStorage.getItem('token')){
      let token = localStorage.getItem('token')

      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const tokenData = JSON.parse(window.atob(base64));
      setUserId(tokenData._id)
    }
    
    let totalPrice = 0;
    let totalGram = 0;
    let totalQuanity = 0;
    let totalShippingCharge = 0;
    let totalMakkingCharge = 0;
    let totalDescount = 0;
    let totalTaxAmount = 0;

    for(let i=0; i< CartData.length; i++){
      
      totalPrice = (+totalPrice + +CartData[i].checkOutData.ProductPrice).toFixed(2)
      totalGram = (+totalGram + +CartData[i].checkOutData.ProductGram).toFixed(2)
      totalQuanity = (+totalQuanity + +CartData[i].checkOutData.Quantity).toFixed(2)
      totalShippingCharge = (+totalShippingCharge + +CartData[i].checkOutData.ShippingCharge).toFixed(2)
      totalMakkingCharge = (+totalMakkingCharge + +CartData[i].checkOutData.ToatalMakingCharge).toFixed(2)
      totalDescount = (+totalDescount + +CartData[i].checkOutData.Discount).toFixed(2)
      totalTaxAmount = (+totalTaxAmount + +CartData[i].checkOutData.TaxAmount).toFixed(2)
      
      if(i == CartData.length - 1){
        settotalPrice(totalPrice)
        settotalGram(totalGram)
        settotalQuanity(totalQuanity)
        settotalShippingCharge(totalShippingCharge)
        settotalMakkingCharge(totalMakkingCharge)
        settotalDescount(totalDescount)
        settotalTaxAmount(totalTaxAmount)
      }
    }

    setState({
      ...state,
      orders:CartData
    })

    if(localStorage.getItem("afterLoginCheckOutData")){
      let prevData = JSON.parse(localStorage.getItem("afterLoginCheckOutData"))
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
      if( userId != undefined && userId != "undefined" && userId != null && userId != "null" && userId != ""){
        formSubmit()
      }
    }
    // return () => {
    //   console.log(props)
    // }
  }, [])

  const handleChange = (event, name) => {
    const {value} = event.target
    setState({
      ...state,
      [name]: value
    })   
  }
   
  const _next = () => {
    let currentStep = state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    setState({
      ...state,
      currentStep: currentStep
    })
  }
    
  const _prev = () => {
    let currentStep = state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    setState({
      ...state,
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
const previousButton = () => {
  let currentStep = state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary mt-5" 
        type="button" onClick={_prev}>
      Previous
      </button>
    )
  }
  return null;
}

const nextButton = () => {
  let currentStep = state.currentStep;
  if(currentStep < 2){
    return (
      <button 
        style={{background:"#093363", color:"white", width:"150px"}}
        className="btn float-right mt-5" 
        type="button" onClick={_next}>
      Next
      </button>        
    )
  }
  if(currentStep < 3){
    return (
      <button 
        style={{background:"#093363", color:"white", width:"150px"}}
        className="btn float-right mt-5" 
        type="button" onClick={formSubmit}>
      Submit
      </button>        
    )
  }
  return null;
}

  const decQuantity = () => {
    alert("decrement")
  }

  const incQuantity = (id) => {
    
    const items = state.orders
    for (var i=0; i < items.length; i++) {
      if(items[i].checkOutData.ProductId === id){
        setState({  
          ...state,
          Quantity: [items[i].checkOutData.Quantity] + 1
        })
      }
      if(i == items.length - 1){
        console.log(state.orders)
      }
    }
  }
  
  const handleValidation = () => {

    let formIsValid = true;

    if(!state.FirstName){
      formIsValid = false
      setFirstNameError(true)
    } 
    else { 
      setFirstNameError(false) 
    }

    if(!state.LastName){
      formIsValid = false
      setLastNameError(true)
    } 
    else { 
      setLastNameError(false) 
    }

    if(!state.EmailAddress){
      formIsValid = false
      setEmailAddressError(true)
    } 
    else {
      setEmailAddressError(false) 
    }
    
    if(!state.MobileNumber){
      formIsValid = false
      setMobileNumberError(true)
    } 
    else {
      setMobileNumberError(false) 
    }

    if(!state.FullAddress){
      formIsValid = false
      setFullAddressError(true)
    } 
    else {
      setFullAddressError(false) 
    }

    if(!state.Landmark){
      formIsValid = false
      setLandmarkError(true)
    } 
    else {
      setLandmarkError(false) 
    }

    if(!state.PinCode){
      formIsValid = false
      setPinCodeError(true)
    } 
    else {
      setPinCodeError(false) 
    }

    if(!state.City){
      formIsValid = false
      setCityError(true)
    } 
    else {
      setCityError(false) 
    }

    if(!state.State){
      formIsValid = false
      setStateError(true)
    } 
    else {
      setStateError(false) 
    }
   return formIsValid
  }

  
  const formSubmit = (e) => {

    // e.preventDefault()
    let pro = []
    const CartDataOne = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    for(let i=0; i<CartDataOne.length;i++){
      pro.push(CartDataOne[i].checkOutData)
    }

    let shippingAddress = {
      FirstName:state.FirstName,
      LastName:state.LastName,
      EmailAddress:state.EmailAddress,
      MobileNumber:state.MobileNumber,
      FullAddress:state.FullAddress,
      Landmark:state.Landmark,
      PinCode:state.PinCode,
      City:state.City,
      State:state.State
    }
    
    if(handleValidation()){
      
      if(localStorage.getItem('token')){
        let dt = {
          UserId:userId,
          product:pro,
          shippingAddress:shippingAddress
        }
        dispatch(OrderDataPost(dt))
      } else {
          localStorage.setItem("afterLoginCheckOutData", JSON.stringify(shippingAddress))
          localStorage.setItem("prevPath", props.location.pathname)
          props.history.push('/signin')
      } 
    }else{
      console.log("form field is required")
    }
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
    <div className="" style={{textAlign:"left", marginBottom:70, marginTop:150}}>
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-9 col-md-8 col-sm-7" style={{ textAlign:"left" }}> */}
           
              <form>
             
                <Step1 
                  currentStep={state.currentStep} 
                  handleChange={handleChange}
                  decQuantity={decQuantity}
                  incQuantity={incQuantity}

                  totalPrice={totalPrice}
                  totalGram={totalGram}
                  totalQuanity={totalQuanity}
                  totalShippingCharge={totalShippingCharge}
                  totalMakkingCharge={totalMakkingCharge}
                  totalDescount={totalDescount}
                  totalTaxAmount={totalTaxAmount}
                />
                <Step2 
                  currentStep={state.currentStep} 
                  handleChange={handleChange}
                  
                  FirstName={state.FirstName}
                  LastName={state.LastName}
                  EmailAddress={state.EmailAddress}
                  MobileNumber={state.MobileNumber}
                  FullAddress={state.FullAddress}
                  Landmark={state.Landmark}
                  PinCode={state.PinCode}
                  City={state.City}
                  State={state.State}

                  FirstNameError={FirstNameError}
                  LastNameError={LastNameError}
                  EmailAddressError={EmailAddressError}
                  MobileNumberError={MobileNumberError}
                  FullAddressError={FullAddressError}
                  LandmarkError={LandmarkError}
                  PinCodeError={PinCodeError}
                  CityError={CityError}
                  StateError={StateError}

                  totalPrice={totalPrice}
                  totalGram={totalGram}
                  totalQuanity={totalQuanity}
                  totalShippingCharge={totalShippingCharge}
                  totalMakkingCharge={totalMakkingCharge}
                  totalDescount={totalDescount}
                  totalTaxAmount={totalTaxAmount}
                />
                {/* <Step3 
                  currentStep={state.currentStep} 
                  handleChange={handleChange}
                  password={state.password}
                /> */}
                {previousButton()}
                {nextButton()}
                <br />
                <br />

              </form>
{/*            
          </div>
        </div> */}
      </div>
    </div>
  </Layout>
  );
}

function Step1(props) {
  const SCart= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="container" style={{textAlign:"left", marginTop:-30}}>

      <div className="row mb-3">
        <div className="col-lg-12" style={{ marginLeft:-14}}>
          <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Cart</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="row" id="cart_page_item_row">
        <div className="col-md-4 col-lg-4 order-md-2">
          <ul className="list-group mb-3">

            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">Total Gram</h6>
                    <small className="text-muted">Product Gram</small>
                </div>
                <span className="text-muted">{props.totalGram}g</span>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                  <h6 className="my-0">Total Quantity</h6>
                  <small className="text-muted">Product Quantity</small>
              </div>
              <span className="text-muted">{props.totalQuanity}</span>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                  <h6 className="my-0">Total Making Charge</h6>
                  <small className="text-muted">Product Making Charge</small>
              </div>
              <span className="text-muted">₹ {props.totalMakkingCharge}</span>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                  <h6 className="my-0">Total Shipping Charge</h6>
                  <small className="text-muted">Product Shipping Charge</small>
              </div>
              <span className="text-muted">₹ {props.totalShippingCharge}</span>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                  <h6 className="my-0">Total Discount</h6>
                  <small className="text-muted">Discount on Product</small>
              </div>
              <span className="text-muted">₹ {props.totalDescount}</span>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                  <h6 className="my-0">Total Tax</h6>
                  <small className="text-muted">Tax on Product</small>
              </div>
              <span className="text-muted">₹ {props.totalTaxAmount}</span>
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
                <strong>₹ {props.totalPrice}</strong>
            </div>

            </ul>
        </div>
        <div className="col-md-8 col-lg-8 order-md-1">

          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6"><h6> Product Title </h6></div>
            <div className="col-md-2 col-sm-2 col-lg-2"><h6> Quantity </h6></div>
            <div className="col-md-2 col-sm-2 col-lg-2"><h6> Remove </h6></div>
            <div className="col-md-2 col-sm-2 col-lg-2"><h6> Total </h6></div>
          </div>

          {SCart.map((row)=>(
            <div className="row">
              
              <div className="col-md-6 col-sm-6 col-lg-6">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4" style={{padding:10}}>
                    <div id="img_box" style={{padding:20}}>
                    {row.product.ProductPictures[0]!=undefined ? <img src={row.product.ProductPictures[0].url} 
                    
                    style={{width:"100%"}} /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" /> }
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8" style={{paddingTop:20}}>
                    <h5 style={{fontSize:17}}>{row.product.ProductTitle}</h5>
                      <p style={{fontSize:11, marginTop:-7}}>
                        {row.product.SUK} <br />
                        Weight {row.product.Dimensions.ProductWeight} <br />
                        Ring Size {row.product.Dimensions.ProductHeight} 
                      </p>
                      {/* <div className="row" style={{marginTop:30}}>
                        <div className="col-sm-7 col-xs-7 col-7">
                          <h5 style={{marginTop:10}}><b>Rs.{row.checkOutData.ProductPrice}</b></h5>
                          <p style={{fontSize:11, marginTop:-7}}>Weight (Grams):{row.product.Dimensions.ProductWeight}</p>
                          <p style={{fontSize:11, marginTop:-5}}>Ring Size {row.product.Dimensions.ProductHeight}</p>
                        </div>
                      </div> */}
                  </div>
                </div>
              </div>

              <div className="col-md-2 col-sm-2 col-lg-2">
                <div id="total" style={{marginTop:40}}>
                  {row.checkOutData.Quantity}
                </div>
              </div>

              <div className="col-md-2 col-sm-2 col-lg-2">
                <div class="number" style={{marginTop:40}}>
                  <p>
                    <Link style={{color:"black", fontSize:15, marginLeft:10}}>Remove</Link>
                  </p>
                </div>
              </div>

              <div className="col-md-2 col-sm-2 col-lg-2">
                <div id="total" style={{marginTop:40}}>
                  <b>Rs.{row.checkOutData.ProductPrice}</b>
                </div>
              </div>

             
            </div>
          ))}

          <div className="row"></div>

        </div>
      </div>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="container" style={{textAlign:"left", marginTop:-30}}>

      <div className="row mb-3">
        <div className="col-lg-12" style={{ marginLeft:-14}}>
          <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Cart</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="row" id="cart_page_item_row">
        <div className="col-md-4 col-lg-4 order-md-2">
          <ul className="list-group mb-3">

            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">Total Gram</h6>
                    <small className="text-muted">Product Gram</small>
                </div>
                <span className="text-muted">{props.totalGram}g</span>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                  <h6 className="my-0">Total Quantity</h6>
                  <small className="text-muted">Product Quantity</small>
              </div>
              <span className="text-muted">{props.totalQuanity}</span>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                  <h6 className="my-0">Total Making Charge</h6>
                  <small className="text-muted">Product Making Charge</small>
              </div>
              <span className="text-muted">₹ {props.totalMakkingCharge}</span>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                  <h6 className="my-0">Total Shipping Charge</h6>
                  <small className="text-muted">Product Shipping Charge</small>
              </div>
              <span className="text-muted">₹ {props.totalShippingCharge}</span>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                  <h6 className="my-0">Total Discount</h6>
                  <small className="text-muted">Discount on Product</small>
              </div>
              <span className="text-muted">₹ {props.totalDescount}</span>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                  <h6 className="my-0">Total Tax</h6>
                  <small className="text-muted">Tax on Product</small>
              </div>
              <span className="text-muted">₹ {props.totalTaxAmount}</span>
            </li>


            <div className="list-group-item d-flex justify-content-between">
                <span>Total (INR)</span>
                <strong>₹ {props.totalPrice}</strong>
            </div>

            </ul>
        </div>
{/* ------------------ */}
        <div className="col-md-8 col-lg-8 order-md-1">
            <div className="row">
              <div className="col-sm-6">
                <br/>
                <TextField required id="standard-required" 
                value={props.FirstName} 
                onChange={ (e) => props.handleChange(e, 'FirstName')} 
                style={{width:"100%"}} 
                label="First Name"  />
                { props.FirstNameError ? <span style={{ color: "red" }}>First name is required</span> : null}
              </div>

              <div className="col-sm-6">
                <br/>
                <TextField required id="standard-required" 
                value={props.LastName} 
                onChange={ (e) => props.handleChange(e, 'LastName')} 
                style={{width:"100%"}} 
                label="Last Name"  />
                { props.LastNameError ? <span style={{ color: "red" }}>Last name is required</span> : null}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <br/>
                <TextField required id="standard-required" 
                value={props.EmailAddress} 
                onChange={ (e) => props.handleChange(e, "EmailAddress")} 
                style={{width:"100%"}} 
                label="Email Address"  />
                { props.EmailAddressError ? <span style={{ color: "red" }}>Email Address is required</span> : null}
              </div>

              <div className="col-sm-6">
                <br/>
                <TextField required id="standard-required" 
                value={props.MobileNumber} 
                onChange={ (e) => props.handleChange(e, "MobileNumber")} 
                style={{width:"100%"}} 
                label="Mobile Number"  />
                { props.MobileNumberError ? <span style={{ color: "red" }}>Mobile Numberis required</span> : null}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <br/>
                <TextField required id="standard-required" 
                value={props.FullAddress} 
                onChange={ (e) => props.handleChange(e, "FullAddress")} 
                style={{width:"100%"}} 
                label="Full Address"  />
                { props.FullAddressError ? <span style={{ color: "red" }}>Full Address is required</span> : null}
              </div>

              <div className="col-sm-6">
                <br/>
                <TextField required id="standard-required" 
                value={props.Landmark} 
                onChange={ (e) => props.handleChange(e, "Landmark")} 
                style={{width:"100%"}} 
                label="Landmark"  />
                { props.LandmarkError ? <span style={{ color: "red" }}>Landmark is required</span> : null}
              </div>

              <div className="col-sm-6">
                <br/>
                <TextField required id="standard-required" 
                value={props.PinCode} 
                onChange={ (e) => props.handleChange(e, "PinCode")} 
                style={{width:"100%"}} 
                label="PinCode"  />
                { props.PinCodeError ? <span style={{ color: "red" }}>Pin Codee is required</span> : null}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <br/>
                <TextField required id="standard-required" 
                value={props.City} 
                onChange={ (e) => props.handleChange(e, "City")} 
                style={{width:"100%"}} 
                label="City"  />
                { props.CityError ? <span style={{ color: "red" }}>City is required</span> : null}
              </div>

              <div className="col-sm-6">
                <br/>
                <TextField required id="standard-required" 
                value={props.State} 
                onChange={ (e) => props.handleChange(e, "State")} 
                style={{width:"100%"}} 
                label="State"  />
                { props.StateError ? <span style={{ color: "red" }}>State is required</span> : null}
              </div>
            </div>
          
          <div className="row"></div>

        </div>
      </div>
    </div>
  );
}

// function Step3(props) {
//   if (props.currentStep !== 3) {
//     return null
//   } 
//   return(
//     <React.Fragment>
//     <div className="form-group">
//       <label htmlFor="password">Password</label>
//       <input
//         className="form-control"
//         id="password"
//         name="password"
//         type="password"
//         placeholder="Enter password"
//         value={props.password}
//         onChange={props.handleChange}
//         />      
//     </div>
//     <button className="btn btn-success btn-block">Sign up</button>
//     </React.Fragment>
//   );
// }

export default Cart