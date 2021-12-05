import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function SigninScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        // TO DO SIGN IN ACTION
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Faça seu Login</h1>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter email" 
                        required
                        onChange={e => setEmail(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter password" 
                        required
                        onChange={e => setPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">Logar</button>
                </div>
                <div>
                    <label/>
                    <div>
                        Novo usuário? {' '}
                        <Link to="/register">Registre-se</Link>
                    </div>
                </div>
            </form>

        </div>
    );
}