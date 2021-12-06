import * as auth_service from '../../services/login.js'
import * as types_test from './parametrization.js'
import {check} from 'k6'

export let options = types_test.types[__ENV.TYPE_TEST]

export default function(){
	console.log('Tipo de prueba', __ENV.TYPE_TEST)
	const res = auth_service.execute()
    check(res,{
        "status was 200" : r => r.status == 200
    })
}

