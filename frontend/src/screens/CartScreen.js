import React from 'react'

export default function CartScreen(props){
    const productId= props.match.params.id;
    const qtd = props.location.search? Number(props.location.search.split('=')[1])
    :1;
    return (
        <div>
            <h1>
                Tela do Carrinho
            </h1>
            <p>Adicionar ao Carrinho: ProdutoID: {productId} Qtd: {qtd} </p>
        </div>
    )
}