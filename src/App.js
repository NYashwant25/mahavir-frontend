import logo from './logo.svg';
import './App.css';
import { Drawer, Button, Radio, Space } from 'antd';
import Signup from './Authentication/Signup';
import Home from './pages/Home';
import ProductView from './pages/ProductView';
// Author G Manikam
import Checkout from './pages/CheckOut';

import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Occasion from './pages/Occasion';
import TryAtHome from './pages/TryAtHome';
import VideoCall from './pages/VideoCall';
import Collection from './pages/Collection';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import ForgotPassword from './Authentication/ForgotPassword';
import VerifyEmail from './Authentication/VerifyEmail';
import ResetPassword from './Authentication/ResetPassword';
import NotFound from './pages/404';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsofService from './pages/TermsofService';
import ReturnPolicy from './pages/ReturnPolicy';
import ShippingandHandling from './pages/ShippingandHandling';
import AllCategoryProduct from './pages/AllCategoryProduct';
import Careers from './pages/Careers';
import Signin from './Authentication/Signin';
import OTP from './Authentication/OTP';
import ProductList from './pages/ProductList';
import ProductListCollection from './pages/ProductListCollection';
import PurityProduct from './pages/PurityProduct';
import { Provider } from "react-redux";
import {store} from './redux/store';
import { createBrowserHistory } from 'history';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PriceRangeProduct from './pages/PriceRangeProduct';

import Thankyou from './pages/Thankyou';

const browserHistory = createBrowserHistory();
function App() {
  return (
    <Provider store={store}>
    <div className="App">
          <BrowserRouter history={browserHistory}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/otp" component={OTP} />
              <Route exact path="/collection" component={Collection} />
              <Route exact path="/occasion/:id" component={Occasion} />
              <Route path="/product-details" component={ProductView} />
              <Route path="/check-out" component={Checkout} />
              <Route path="/cart" component={Cart} />
              <Route path="/thankyou" component={Thankyou} />


              
              <Route path="/Contact" component={Contact} />
              <Route path="/appointment" component={Appointment} />
              <Route path="/try-at-home" component={TryAtHome} />
              <Route path="/video-call" component={VideoCall} />
              <Route exact path="/product-list/:ProductIn/:SearchCategory/:SearchType" component={ProductList} />
              <Route exact path="/product-list/:ProductIn/:SearchCategory" component={ProductList} />
              <Route exact path="/product-list/:ProductIn" component={ProductList} />
              <Route exact path="/All-Jewellery/:SearchCategory" component={AllCategoryProduct} />
              <Route exact path="/All-Jewellery/purity/:SearchCategory" component={PurityProduct} />
              <Route exact path="/All-Jewellery" component={AllCategoryProduct} />
              <Route exact path="/collection/:CollectionName" component={ProductListCollection} />
              <Route exact path="/purity/:PurityName" component={ProductList} />
              <Route path="/price-range/:Price" component={PriceRangeProduct} />
              <Route exact path="/gift-for-special-ones/:GiftName" component={ProductList} />
              <Route exact path="/metal/:MetalName" component={ProductList} />
              <Route path="/profile" component={Profile} />
              <Route path="/verify-email" component={VerifyEmail} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/return-policy" component={ReturnPolicy} />
              <Route path="/shipping-and-handling" component={ShippingandHandling} />
              <Route path="/terms-of-service" component={TermsofService} />
              <Route path="/careers" component={Careers} />
              <Route path="/about" component={ResetPassword} />

              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
