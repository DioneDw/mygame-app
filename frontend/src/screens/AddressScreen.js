import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveInfoDelivery } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function AddressInfoScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const cart= useSelector(state => state.cart);
    const {shippingAddress} = cart;
    if (!userInfo) {
        props.history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveInfoDelivery({ fullName, address, city, postalCode }));
        props.history.push('/payment');
        // dispatch que vai salvar a ação do address
    };
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Endereço de Entrega</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Nome Completo</label>
                    <input type="text" id="fullName" placeholder="Informe o nome completo"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)} >
                    </input>
                </div>
                <div>
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" placeholder="Informe seu endereço"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} >
                    </input>
                </div>
                <div>
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" placeholder="Informe a sua cidade"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} >
                    </input>
                </div>
                <div>
                    <label htmlFor="postalCode">CEP</label>
                    <input type="text" id="postalCode" placeholder="Informe o seu CEP"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)} >
                    </input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}