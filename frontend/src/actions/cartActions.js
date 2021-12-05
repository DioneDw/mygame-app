import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

export const addToCart = (productId, qtd) => async(dispacth, getState) =>{
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispacth({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image:data.image,
            price:data.price,
            countInStock: data.countInStock,
            product: data._id,
            qtd,
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart= (productId) => (dispatch, getState) =>{
  dispatch({type: CART_REMOVE_ITEM, payload: productId});
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const saveInfoDelivery = (data) => (dispacth) =>{
   dispacth({type: CART_SAVE_SHIPPING_ADDRESS, payload: data});
   localStorage.setItem('shippingAddress', JSON.stringify(data));
}