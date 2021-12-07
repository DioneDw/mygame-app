import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function ProfileScreen() {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user} = userDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);
    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile;
    }
    return (
        <div>
           <form className="form" onSubmit={submitHandler}>
               <div>
                   <h1>
                       Perfil do Usuário:
                   </h1>
               </div>
               {
                   loading ? ( <LoadingBox></LoadingBox>
                    ) : 
                   error ? (<MessageBox variant="danger"> {error}</MessageBox>
                    ) : (
                    <>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input 
                        id="name"
                        type="text"
                        placeholder="Informe o nome"
                        value={user.name}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="email">Nome</label>
                        <input 
                        id="email"
                        type="email"
                        placeholder="Informe o seu email"
                        value={user.name}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Nome</label>
                        <input 
                        id="password"
                        type="password"
                        placeholder="Informe sua senha"
                        value={user.name}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="confirmpassword">Nome</label>
                        <input 
                        id="confirmpassword"
                        type="confirmpassword"
                        placeholder="Confirme a senha"
                        ></input>
                    </div>
                    <div>
                        <label/>
                        <button className="primary" type="submit">
                            Atualizar registro.
                        </button>
                    </div>
                    </>
                 )}
           </form>
        </div>
    );
}