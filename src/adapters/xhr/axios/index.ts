import Axios from "axios"
import { AXIOS_CONFIG } from "../../../helpers/constants/api/axios/config"

const getAxiosInstance = () => {
    return Axios.create(AXIOS_CONFIG);
}

export const getResource = (url: string) => {
    const axios = getAxiosInstance();

    return axios.get(url);
}

export const postResource = (url: string, requestData: Object) => {
    const axios = getAxiosInstance();
    
    return axios.post(url, requestData);
}