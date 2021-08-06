import axios from "axios";

export const api_domain = axios.create({
    baseURL: (process.env.REACT_APP_API_BASE_URL || 'https://sistemas.huwc.ufc.br/auth/'),
});