import * as general_data from '../resources/services/general.js'
import * as auth_data from '../resources/services/login.js'
import http from 'k6/http'

const HEADERS = {
    headers: auth_data.headers
}

const BODY = auth_data.body 

export const execute = () => {
    var url = `${general_data.base_url}${auth_data.url}`
    return http.post(url, JSON.stringify(BODY), HEADERS); 
}