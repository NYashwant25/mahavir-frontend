import React from 'react';
import Layout from './../components/Layout/Index.js';
import './../components/style.css';
import TextField from '@material-ui/core/TextField';
import {Breadcrumb} from 'antd';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {SubmitTryAtHome, StatusOff} from './../redux/actions/TryAtHomeAction'
const Appointment = () => {
    const [state, setState] = React.useState({
        Name:"",
        Email:"",
        Mobile:"",
        Address:"",
        City:"",
        State:"",
        Stone:"",
        Interest:"",
        Description:"",
        Error:false,
        ProductId:"",
        Category:"Appointment",
        
    })

    React.useEffect(() => {
        setState({ProductId:localStorage.getItem('TryAtHomeProductId')})
    }, [])

    const [DateandTime, setDateandTime] = React.useState(new Date())
    const dispatch = useDispatch();
    const SubmitData = () => {
        if(state.Name=='' || state.Name==null){
            alert('Please Enter Full Name')
            return;
        }

        if(state.Email=='' || state.Email==null){
            alert('Please Enter Valid Email Address')
            return;
        }

        if(state.Mobile=='' || state.Mobile==null || state.Mobile.length<10 || state.Mobile.length>10){
            alert('Please Enter 10 digit Mobile Number') 
            return;
        }

        if(state.Address=='' || state.Address==null){
            alert('Please Enter Your Address')
            return;
        }

        if(state.City=='' || state.City==null){
            alert('Please Enter City Name')
            return;
        }

        if(state.State=='' || state.State==null){
            alert('Please Enter State Name')
            return;
        }

        if(state.Stone=='' || state.Stone==null){
            alert('Please Enter Stone')
            return;
        }

        dispatch(SubmitTryAtHome(state))

        setState({
        Name:"",
        Email:"",
        Mobile:"",
        Address:"",
        City:"",
        State:"",
        Stone:"",
        Interest:"",
        Description:"",
        Error:false,
        ProductId:"",
        Category:"Try-At-Home",
         })
    }

    const flash = useSelector((reduxState)=>{
        return reduxState.tryathome.status
    })


    if(flash=='success'){
         NotificationManager.success('Thanks', 'We got your message. we will contact you soon');
        dispatch(StatusOff())
    }
    return(
        <Layout>
            <div className="container">
             <div className="row">
                <div className="col-sm-12" style={{textAlign:"left", marginTop:10, marginBottom:20}}>
                      <Breadcrumb>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Appointment</Breadcrumb.Item>
  </Breadcrumb>
                </div>
            </div>
                <div className="row">
                <div className="col-sm-1"></div>
                    <div className="col-sm-10">                    
                        <center><h5 style={{textAlign:"center", color:"gray"}}>BOOK AN APPOINTMENT</h5></center>
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
                                <TextField required style={{width:"100%", marginTop:10}} label="Name" value={state.Name} onChange={(e)=>setState({...state, Name:e.target.value})} />
                                </div> 
                                 <div className="col-sm-12" >
                                <TextField required  style={{width:"100%", marginTop:10}} label="Email"  value={state.Email} onChange={(e)=>setState({...state, Email:e.target.value})} />
                                </div> 
                                 <div className="col-sm-6" >
                                    <TextField required type="number" style={{width:"100%", marginTop:10}} label="Mobile Number"  value={state.Mobile}  onChange={(e)=>setState({...state, Mobile:e.target.value})} />
                                </div> 
                                <div className="col-sm-6" >
                                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <DateTimePicker autoOk format="MM-dd-yyyy hh:mm a"  value={state.DateandTime} style={{width:"100%", marginTop:25}} disablePast ampm={false} value={DateandTime} onChange={setDateandTime} />
                                </MuiPickersUtilsProvider>
                                </div> 
                                <div className="col-sm-12" >
                                <TextField required  style={{width:"100%", marginTop:10}} label="Address" value={state.Address}  onChange={(e)=>setState({...state, Address:e.target.value})} />
                                </div>  
                                 <div className="col-sm-6" >
                                <TextField required  style={{width:"100%", marginTop:10}} label="City" value={state.City}  onChange={(e)=>setState({...state, City:e.target.value})} />
                                </div> 
                                 <div className="col-sm-6" >
                                <TextField required  style={{width:"100%", marginTop:10}} label="State"  value={state.State}  onChange={(e)=>setState({...state, State:e.target.value})} />
                                </div> 
                                <div className="col-sm-6" >
                                <TextField required  style={{width:"100%", marginTop:10}} label="Stone"  value={state.Stone}  onChange={(e)=>setState({...state, Stone:e.target.value})} />
                                </div> 
                                <div className="col-sm-6" >
                                    <TextField required  style={{width:"100%", marginTop:10}} label="Interest"  value={state.Interest}  onChange={(e)=>setState({...state, Interest:e.target.value})} />
                                </div> 
                                <div className="col-sm-12" >
                                <TextField required  style={{width:"100%", marginTop:10}} label="Description"  value={state.Description}  onChange={(e)=>setState({...state, Description:e.target.value})} />
                                </div> 
                                <div className="col-sm-12" style={{marginTop:10}}>
                                <center><button onClick={()=>SubmitData()} id="book_btn">Book Now</button></center>
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
                        <h5>BOOK AN APPOINTMENT</h5><br/>
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

export default Appointment;