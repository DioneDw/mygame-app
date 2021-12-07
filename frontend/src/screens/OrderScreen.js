
import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderScreen(props){
      const orderId = props.match.params.id;
      const orderDetails = useSelector(state => state.orderDetails);
      const {order, loading, error} = orderDetails;
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(detailsOrder(orderId));
      }, [dispatch, orderId]);

      const checkoutHandler = () => {
        props.history.push('/signin?redirect=');
    };

    return loading? (<LoadingBox></LoadingBox>):
    error? (<MessageBox variant="danger">{error}</MessageBox>)
     : (
        <div>
        <h1>Pedido de Nº {order._id}</h1>
        <div className="row top">
            <div className="col-2">
             <ul>
                 <li>
                     <div className="card card-body">
                       <h2>Dados para a entrega</h2>
                       <p>
                       <strong>Nome:</strong> {order.shippingAddress.fullName} <br/>
                           <strong>Endereço:</strong> {order.shippingAddress.address},&nbsp;
                           {order.shippingAddress.city},&nbsp;
                           {order.shippingAddress.postalCode}
                       </p>                   
                     </div>
                 </li>
                 <li>
                     <div className="card card-body">
                       <h2>Pagamento</h2>
                       <p>
                           <strong>Método:</strong> {order.paymentMethod}
                       </p>
                     </div>
                 </li>
                 <li>
                     <div className="card card-body">
                       <h2>Itens do Pedido</h2>
                       <ul>
                        {order.orderItems.map((item) => (
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
                                <div>R${order.itemsPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Taxa</div>
                                <div>R${order.taxPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div><strong>Valor Total</strong></div>
                                <div><strong>R${order.totalPrice.toFixed(2)}</strong></div>
                            </div>
                        </li> 
                        <div className="card card-body">
                         <button className="primary block" onClick={checkoutHandler}>Continuar...</button>
                     </div>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
};

/*                         {order.isDelivered ? (<MessageBox variant="success">Pedido encaminhado{order.deliveredAt}</MessageBox>
) : ( <MessageBox variant="danger">Não registrado</MessageBox>  
)}
*/   