import * as common_data from '../utils/common.js'
import http from 'k6/http'
import {randomIntBetween, randomString} from 'https://jslib.k6.io/k6-utils/1.1.0/index.js'

const HEADERS = {
    headers : common_data.headers
}

const BODY = {
        email: `${randomString(10)}@wolox.com.ar`,
        password: `${randomString(8)}${randomIntBetween(1, 5)}`,
        firstName: `${randomString(8)}`,
        lastName: `${randomString(7)}`,
}

export const execute = () => {
    var url = `${common_data.base_url}users`
    return http.post(url, JSON.stringify(BODY), HEADERS); 
}