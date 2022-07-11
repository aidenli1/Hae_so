import axios from "axios";

import {
    LOGIN_USER
} from './types';

export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }


    // const request = axios
    //     .post('/api/users/login', dataTosubmit)
    //     .then(response => response.data)

    // return {
    //     type: LOGIN_USER,
    //     payload: request
    // }

}