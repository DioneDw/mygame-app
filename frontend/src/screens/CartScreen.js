import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qtd = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qtd));
        }
    }, [dispatch, productId, qtd]);


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };

    return (
        <div className="row top">
            <div className="col-2">
                <h1>Carrinho de Compras</h1>
                {cartItems.length === 0 ? (
                    <MessageBox>
                        O Carrinho de Compras vazio. <Link to="/">Volte as compras!</Link>
                    </MessageBox>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
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
                                    <div>
                                        <select
                                            value={item.qtd}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(item.product, Number(e.target.value))
                                                )
                                            }
                                        >
                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>${item.price}</div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            Remover do carrinho
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qtd, 0)} items) : R$
                                {cartItems.reduce((a, c) => a + c.price * c.qtd, 0)}
                            </h2>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={checkoutHandler}
                                className="primary block"
                                disabled={cartItems.length === 0}
                            >
                                Prosseguir para o Pagamento
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}