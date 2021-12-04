import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props){
    const productId= props.match.params.id;
    const qtd = props.location.search
    ? Number(props.location.search.split('=')[1])
    :1;
    const dispatch = useDispatch();
    useEffect(()=> {
     if(productId){
        dispatch(addToCart(productId,qtd));
      }
    }, [dispatch,productId,qtd]);
    return (
        <div>
            <h1>
                Tela do Carrinho
            </h1>
            <p>Adicionar ao Carrinho: ProdutoID: {productId} Qtd: {qtd} </p>
        </div>
    )
}