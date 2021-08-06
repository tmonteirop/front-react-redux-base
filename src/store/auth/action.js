import { api_domain } from '../../services/api_domain';

import history from '../../services/history';

import { actionTypeUser } from './action-type';

import { actionTypeMessage } from '../message/action-type';

export const signInRequest = (user) => {
    return async (dispatch) => {
        try {
            const { username, password } = user;

            const validateUser = await api_domain.post("/login", {
                username,
                password,
            });

            const response = await validateUser.data;

            const { auth, token } = response;

            // SET REQUISITION TOKEN
            api_domain.defaults.headers.Authorization = `Bearer ${token}`;

            // SEND DATA TO REDUCER
            dispatch({
                type: actionTypeUser.LOGIN,
                payload: { auth, token, username }
            });

            // CREATE TOKEN SESSION ITEM
            sessionStorage.setItem("@app:token", token);

            // REDIRECT USER TO PAGE
            history.push('/dashboard');

        } catch (error) {
            dispatch({
                type: actionTypeMessage.ERROR,
                payload: { title: 'Credenciais Inválidas!', description: 'Favor digitar novamente.' }
            })
            return console.log(error);
        }
    }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypeUser.LOGOUT,
        });

        // REMOVE TOKEN SESSION ITEM
        sessionStorage.removeItem("@app:token");

        // REDIRECT TO LOGIN PAGE
        history.push('/');
    }
}