import * as general_data from '../resources/services/general.js'
import * as user_data from '../resources/services/user.js'
import http from 'k6/http'

export const execute = (auth_data) => {
	var url = `${general_data.base_url}${user_data.url}`
	var headers = {
    	headers:{
    		'Authorization': "Token " + auth_data.authResponse.user.token
		}
	}
	return http.get(url,headers);
}
