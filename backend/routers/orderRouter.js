import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post('/', 
// O post vai verificar se o usuário é um usuário valido.
isAuth,
expressAsyncHandler(async(req, res)=>{
    // Checando se existem ordens ou nao.
if(req.body.orderItems.length === 0) {
    req.status(400).send({message: 'Carrinho Vazio'});
}else{       // Se tem itens no carrinho
    const order = new Order({
       orderItems: req.body.orderItems,
       shippingAddress: req.body.shippingAddress,
       paymentMethod: req.body.paymentMethod,
       itemsPrice: req.body.itemsPrice,
       taxPrice: req.body.taxPrice,
       totalPrice: req.body.totalPrice,
       user: req.user._id, // So precisamos do id do user.
       // Para pegar a informação de quem criou a ordem
    });
    const createdOrder = await order.save();
    res.status(201).send({menssage: 'Nova Ordem Criada', order: createdOrder});
}
})
);

export default orderRouter;