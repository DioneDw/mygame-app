import  Mongoose  from 'mongoose';

// Criando um  Schema para os Produtos utilizando o mongoose
const productSchema = new Mongoose.Schema( {
    name: {type: String, required: true, unique: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    plataform: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number,required: true },
    countInStock: {type: Number, required: true},
    rating: {type: Number, required: true},
    numReviews: {type: Number, required: true},
},

{
timestamps: true,
});

// Criando um Model para os Produtos utilizando o mongoose
const Product= Mongoose.model('Product', productSchema);

export default Product;