import React from 'react';
import Layout from './../components/Layout/Index.js';
import Banner from './../components//Header/Banner.js';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Loader from "react-loader-spinner";
import Typography from '@material-ui/core/Typography';
import SweetAlert from 'react-bootstrap-sweetalert';
import Box from '@material-ui/core/Box';
import DatePicker from 'react-date-picker';
import 'react-notifications/lib/notifications.css';
import {Link} from 'react-router-dom'
import './../components/style.css';
import {useSelector, useDispatch} from 'react-redux';
import {CheckLogin, StatusOff} from './../redux/actions/AuthAction';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

  const Profile = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [sweetAlert, setSweetAlert] = React.useState(false);
  const [sweetAlertProfileUpdate, setSweetAlertProfileUpdate] = React.useState(false);
  const [token, setToken] = React.useState();
  const [localloader, setLocalloader] = React.useState(true);
  
  const [state, setState] = React.useState({
    Name:"",
    Email:"",
    Mobile:"",
    DOB:"",
    DOA:"",
    Address:"",
    Landmark:"",
    City:"",
    State:"",
    UserName:"",
    Salutation:"Mr.",
    localFlash:true
  })
  React.useEffect(()=>{
    checklogin()
  },[])

  const dispatch = useDispatch();

  const checklogin = () => {
    if(localStorage.getItem('token')){
      dispatch(CheckLogin())
    }
    else{
      props.history.push('/signin')
    }
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkvalidtoken = useSelector((reduxState) => {
    if(reduxState.auth.logintStatus=='waiting'){
      return 'waiting';
    }  

    else if(reduxState.auth.loginStatus=='invalid'){
      return 'invalid';
    }

    else if(reduxState.auth.loginStatus=='success'){
      return 'success';
    }

    else{
      return 'waiting';
    }
  })

  const authData = useSelector((reduxState)=>{
    return reduxState.auth.authData
  })

  const flash = useSelector((reduxState)=>{
    return reduxState.auth.flashStatus
  })

if(JSON.stringify(authData)!=='{}'){
  
  if(state.Name===''){
    setState({
      Name:authData.FirstName,
      Email:authData.Email,
      Mobile:authData.Mobile,
      DOB:authData.DOB,
      DOA:authData.DOA,
      UserName:authData.UserName,
      Address:authData.Address,
      Landmark:authData.Landmark,
      City:authData.City,
      State:authData.State,
      Salutation:authData.Salutation,

    })
  }
}


  if(flash){
   if(!sweetAlert) {
     setSweetAlert(true)
   }
   else if(sweetAlert){
     setTimeout(() => {
      setSweetAlert(false)
     }, 2000);
   }
  }
  
  
  
  if(checkvalidtoken=='waiting'){
     return(
    <>
   <Loader
        type="Puff"
        color="#A17D38"
        height={50}
        width={50}
        timeout={50000} //3 secs
        style={{marginTop:"20%", marginBottom:"20%"}}
      /> 
    </>    
      )
  }

  else if(checkvalidtoken=='invalid'){
      return (
        <div>
          {props.history.push('/signin')}
        </div>
      )
  }
  

  else{
      return(
<div id="profile">
{sweetAlert ?
  <SweetAlert
  success
  title="Login Success!"
  onConfirm={()=>setSweetAlert(false)}
  customButtons={
      <button className="form-control" style={{background:"#28a745", width:150, height:45, color:"white", border:"none", marginBottom:30}}>Continue</button>
  }
> 
</SweetAlert>
:null}


{sweetAlert ?
  <SweetAlert
  success
  title="Profile Updated Successfully!"
  onConfirm={()=>setSweetAlertProfileUpdate(false)}
  customButtons={
      <button className="form-control" style={{background:"#28a745", width:150, height:45, color:"white", border:"none", marginBottom:30}}>Continue</button>
  }
> 
</SweetAlert>
:null}
        <Layout>
         <div id="profile_banner">
        <div className="container">
        <div className="row">
              <h1><b>Profile</b></h1>
           </div>
           </div>
          </div>
           <div className={classes.root}>

      <AppBar position="static" color="default" style={{marginTop:20}}>
       <div className="container">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
       
          <Tab label="My Account" {...a11yProps(0)} />
          <Tab label="Order" {...a11yProps(1)} />
          <Tab label="Order History" {...a11yProps(2)} />
          <Tab label="Offers" {...a11yProps(3)} />
          <Tab label="Try at Home" {...a11yProps(4)} />
        </Tabs>
        </div>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="container" style={{marginTop:30}}>
            <div className="col-lg-8 col-md-8 col-sm-10">
                <h4>Edit Profile</h4>
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                  <label>Salutation</label>
                    <select className="form-control" value={state.Salutation} onChange={(e)=>setState({...state, Salutation:e.target.value})}>
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                  </div>

                   <div className="col-lg-5 col-md-5 col-sm-5">
                   <label>Name</label>
                   <input type="text" value={state.Name} onChange={(e)=>setState({...state, Name:e.target.value})} className="form-control" placeholder="full name..."/>
                  </div>

                  <div className="col-lg-5 col-md-5 col-sm-5">
                   <label>UserName</label>
                   <input type="text" readOnly value={state.UserName} onChange={(e)=>setState({...state, UserName:e.target.value})} className="form-control" placeholder="username..."/>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                   <label>Mobile Number</label>
                    <input type="text" value={state.Mobile} onChange={(e)=>setState({...state, Mobile:e.target.value})} className="form-control" placeholder="mobile number..."/>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                   <label>Email Address</label>
                    <input type="email" value={state.Email} onChange={(e)=>setState({...state, Email:e.target.value})} disabled className="form-control" placeholder="email address..."/>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                   <label>Date of Birth</label>
                    <input type="date" value={state.DOB} onChange={(e)=>setState({...state, DOB:e.target.value})} className="form-control" placeholder="date of birth..."/>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                   <label>Date of Anniversary (Optional)</label>
                    <input type="date" value={state.DOA} onChange={(e)=>setState({...state, DOA:e.target.value})} className="form-control" placeholder="date of anniversary..."/>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                   <label>Full Address</label>
                    <input type="text" value={state.Address} onChange={(e)=>setState({...state, Address:e.target.value})} className="form-control" placeholder="full address..."/>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                   <label>Landmark</label>
                    <input type="text" value={state.Landmark} onChange={(e)=>setState({...state, Landmark:e.target.value})} className="form-control" placeholder="landmark..."/>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                   <label>City</label>
                    <input type="text" value={state.City} onChange={(e)=>setState({...state, City:e.target.value})} className="form-control" placeholder="city..."/>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                   <label>State</label>
                    <input type="text" value={state.State} onChange={(e)=>setState({...state, State:e.target.value})} className="form-control" placeholder="state..."/>
                  </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                <button className="btn btn-success" style={{float:"right", marginTop:10, background:"#093363", color:"white", border:"none", width:"100%"}}>Save Details</button>
                </div>
                </div>
            </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="container" style={{marginTop:30}} id="orders">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12" id="orders_col">
                {/* <h4 style={{marginBottom:20}}>Confirm Orders</h4> */}
                <select>
                <option value="Confirm Order">Confirm Order</option>
                <option value="Cancelled Order">Confirm Order</option>
                </select>
               <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3" id="orders_col">
                  <div id="orders_img_box">
                    <img src="assets/images/Image_4.png" />
                  </div>
               </div>
               <div className="col-lg-5 col-md-5 col-sm-9 col-xs-9 col-9" id="orders_col">
               <div id="orders_details">
                <h5><b>22 Karet Gold Finger Ring</b></h5>
                <p>Date : 10-01-2021</p>
                <h6><i className="fa fa-check-circle" style={{color:"#1ACF44"}}> </i> &nbsp;Order Id : KLSFDKJLLL152455555</h6>
               </div>
               </div>
               <div className="col-lg-5 col-md-5 col-sm-12" id="orders_col">
                  <h2>₹ 35,496</h2>
                   <h6 id="rateProduct">Rate Product ⭐ ⭐ ⭐ ⭐ ⭐</h6>
               </div>
            </div>
            </div>
        </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="container" style={{marginTop:30}} id="orders">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12" id="orders_col">
                {/* <h4 style={{marginBottom:20}}>Confirm Orders</h4> */}
                <select>
                <option value="Confirm Order">Confirm Order</option>
                <option value="Cancelled Order">Confirm Order</option>
                </select>
               <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3" id="orders_col">
                  <div id="orders_img_box">
                    <img src="assets/images/Image_4.png" />
                  </div>
               </div>
               <div className="col-lg-5 col-md-5 col-sm-9 col-xs-9 col-9" id="orders_col">
               <div id="orders_details">
                <h5><b>22 Karet Gold Finger Ring</b></h5>
                <p>Date : 10-01-2021</p>
                <h6><i className="fa fa-check-circle" style={{color:"#1ACF44"}}> </i> &nbsp;Order Id : KLSFDKJLLL152455555</h6>
               </div>
               </div>
               <div className="col-lg-5 col-md-5 col-sm-12" id="orders_col">
                  <h2>₹ 35,496</h2>
                   <h6 id="rateProduct">Rate Product ⭐ ⭐ ⭐ ⭐ ⭐</h6>
               </div>
            </div>
            </div>
        </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    
    </div>
        </Layout>
         
        </div>
    );
  }


}



export default Profile;