
import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PlaceOrderScreen(props){
    const cart = useSelector((state) => state.cart);
    if(!cart.paymentMethod){
        props.history.push('/payment');
    }
    const toPrice = (num)=> Number(num.toFixed(2));
    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a,c)=>a+c.qtd * c.price, 0)
    );
    cart.taxPrice= toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice= cart.itemsPrice + cart.taxPrice;
      
      const placeOrderHandler= () =>{
          // Next.
      };
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="row top">
            <div className="col-2">
             <ul>
                 <li>
                     <div className="card card-body">
                       <h2>Envio</h2>
                       <p>
                           <strong>Nome:</strong> {cart.shippingAddress.fullName} <br/>
                           <strong>Endereço</strong>{cart.shippingAddress.address},
                           {cart.shippingAddress.city},{cart.shippingAddress.address},
                           {cart.shippingAddress.postalCode}
                       </p>
                     </div>
                 </li>
                 <li>
                     <div className="card card-body">
                       <h2>Pagamento</h2>
                       <p>
                           <strong>Método:</strong> {cart.paymentMethod}
                       </p>
                     </div>
                 </li>
                 <li>
                     <div className="card card-body">
                       <h2>Itens do Pedido</h2>
                       <ul>
                        {cart.cartItems.map((item) => (
                            <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="small"
                                        ></img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>{item.qtd} x R${item.price} = R${item.qtd * item.price}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                     </div>
                 </li>
             </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>Resumo do pedido</h2>
                        </li>
                        <li>
                            <div className="row">
                                <div>Items</div>
                                <div>R${cart.itemsPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Taxa</div>
                                <div>R${cart.taxPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div><strong>Valor Total</strong></div>
                                <div><strong>R${cart.totalPrice.toFixed(2)}</strong></div>
                            </div>
                        </li>
                        <li>
                            <button type="button"
                            onClick={placeOrderHandler} 
                            className="primary-block" 
                            disabled={cart.cartItems.length === 0}>
                                Confirmar Pedido
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}