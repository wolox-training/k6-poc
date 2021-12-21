import * as common_data from '../utils/common.js'
import http from 'k6/http'

const HEADERS = {
    headers : common_data.headers
}

const BODY = {
        email: "admin@wolox.com.ar",
        password: "candidatoWolox2020"
}

export const execute = () => {
    var url = `${common_data.base_url}users/sessions`
    return http.post(url, JSON.stringify(BODY), HEADERS); 
}