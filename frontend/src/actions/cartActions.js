import Axios from 'axios';
import { CART_ADD_ITEM } from "../constants/cartConstants";

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