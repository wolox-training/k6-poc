import * as common_data from '../utils/common.js'
import http from 'k6/http'

export const execute = (auth_token) => {
    var url = `${common_data.base_url}users`
    var headers = {
    	headers:{
    		'Authorization': auth_token.auth_response
		}
	}
    return http.get(url, headers); 
}