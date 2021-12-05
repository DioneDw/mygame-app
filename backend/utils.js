import jwt, { decode } from 'jsonwebtoken';

export const generateToken = (user) =>{
    return jwt.sign(
        {
        _id: user._id,
        name: user.name,
        email:user.email,
        isAdmin: user.isAdmin,
    }, 
    process.env.JWT_SECRET || 'somethingsecret', 
    {
    expiresIn: '30d',   
    }
    );
};

// Para pegar o usuário que fez o pedido iremos usar um intermediario
export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization){          // Se existir autorização então vamos pegar o token, partindo do 7 caracter.
        const token = authorization.slice(7, authorization.length); 
        // Descripta o token
        jwt.verify(token, process.env.JWT_SECRET || 'somethingsecret', (err, decode)=>{
            // Se tiver erro, então o token é invalido.
            if(err){
            res.status(401).send({message: 'Token Invalido'});
            } else{
                req.user= decode;
                next();
            }
        }
        );
}else{
    res.status(401).send({message: 'Sem Token'});
    }
};