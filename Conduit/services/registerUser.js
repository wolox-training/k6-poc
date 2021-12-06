import * as general_data from '../resources/services/general.js'
import * as register_data from '../resources/services/registerUser.js'
import * as faker_data from '../faker/faker.js'
import http from 'k6/http'

const HEADERS = {
    headers: register_data.headers
}

const BODY = faker_data.generateUser()

export const execute = () => {
    var url = `${general_data.base_url}${register_data.url}`
    return http.post(url, JSON.stringify(BODY), HEADERS);
}