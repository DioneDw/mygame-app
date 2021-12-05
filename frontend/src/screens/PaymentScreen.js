import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodScreen(props) {
    const cart = useSelector((state) => state.cart);
    const {shippingAddress}= cart;
    if(!shippingAddress.address){
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('Boleto');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
            <form className="form " onSubmit={submitHandler}>
                <div>
                    <h1>Método de Pagamento</h1>
                </div>
                <div>
                    <input type="radio" id="boleto" value="Boleto" name="paymentMethod"
                        required checked onChange={(e) =>
                            setPaymentMethod(e.target.value)}>
                    </input>
                    <label htmlFor="boleto">Boleto Bancário</label>
                </div>
                <div>
                    <input type="radio" id="pix" value="Pix" name="paymentMethod"
                        required onChange={(e) =>
                            setPaymentMethod(e.target.value)}>
                    </input>
                    <label htmlFor="pix">Pix</label>
                </div>
                <div>
                    <button className="primary" type="submit">Continuar</button>
                </div>
            </form>
        </div>
    )
}