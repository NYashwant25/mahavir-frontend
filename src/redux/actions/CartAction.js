export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const CART_COUNT = 'CART_COUNT';
export const CART_ID = 'CART_ID';

export const AddToCart = (payload) => dispatch => {
  const Cart= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const Cartid= localStorage.getItem('cart_id') ? JSON.parse(localStorage.getItem('cart_id')) : [];

  Cart.push(payload)
  localStorage.setItem('cart',JSON.stringify(Cart))


  Cartid.push(payload.product._id)
  localStorage.setItem('cart_id',JSON.stringify(Cartid))

  dispatch({
      type:ADD_CART,
      payload:Cart
  })

  dispatch({
      type:CART_COUNT,
      payload:Cartid.length
  })

    dispatch({
      type:CART_ID,
      payload:Cartid
  })
  
}

export const fetchCartData = () => dispatch => {
  const Cart= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const Cartid= localStorage.getItem('cart_id') ? JSON.parse(localStorage.getItem('cart_id')) : [];
  dispatch({
      type:ADD_CART,
      payload:Cart
  })

  dispatch({
      type:CART_ID,
      payload:Cartid
  })
}

export const fetchcountCart = () => dispatch => {
    const Cartid= localStorage.getItem('cart_id') ? JSON.parse(localStorage.getItem('cart_id')) : [];
    dispatch({
        type:CART_COUNT,
        payload:Cartid.length
    })

    dispatch({
      type:CART_ID,
      payload:Cartid
  })
}

export const RemoveToCart = (payload) => dispatch => {
  const Cart= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const Cartid= localStorage.getItem('cart_id') ? JSON.parse(localStorage.getItem('cart_id')) : [];
  const newCart = [];
  const newCartid = [];
        Cart.map((row)=>{
            if(row.product._id!=payload){
                newCart.push(row)
            }
        })

  localStorage.setItem('cart',JSON.stringify(newCart)) 

  Cartid.map((row)=>{
            if(row!=payload){
                newCartid.push(row)
            }
        })
  localStorage.setItem('cart_id',JSON.stringify(newCartid))

  dispatch({
      type:ADD_CART,
      payload:newCart
  })

  dispatch({
      type:CART_COUNT,
      payload:newCartid.length
  })

  dispatch({
      type:CART_ID,
      payload:newCartid
  })
}