import * as register_service from '../../services/registerUser.js'
import * as types_test from './parametrization.js'
import {check, sleep} from 'k6'

export let options = types_test.types[__ENV.TYPE_TEST]

export default function () {
	console.log('Tipo de prueba', __ENV.TYPE_TEST)
	const res = register_service.execute()
    check(res,{
        "status was 200" : r => r.status == 200
    })
}