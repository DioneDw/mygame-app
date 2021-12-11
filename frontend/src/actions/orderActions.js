import {
    CART_EMPTY,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDENS_USER_LIST_REQUEST,
    ORDENS_USER_LIST_FAIL,
    ORDENS_USER_LIST_SUCCESS,
} from "../constants/orderConstants"
import Axios from 'axios';

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
        const { userSignin: { userInfo }, } = getState();
        const { data } = await Axios.post('/api/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });

        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
        dispatch({ type: CART_EMPTY });
        localStorage.removeItem('cartItems');

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.get(`/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
    }
  };

  export const listOrderMine = () => async(dispatch, getState) => {
    dispatch({type:ORDENS_USER_LIST_REQUEST});
    const {userSignin:{userInfo},} = getState();
    try {
      const {data} = await Axios.get('/api/orders/mine', {
        headers: {
          Authorization:`Bearer ${userInfo.token}`,
        },
      });
      dispatch({type:ORDENS_USER_LIST_SUCCESS, payload: data});
    } catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
      dispatch({type:ORDENS_USER_LIST_FAIL, payload: message});
    }
  };
