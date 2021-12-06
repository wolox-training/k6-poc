import * as auth_service from '../../services/login.js'
import * as user_service from '../../services/user.js'
import * as types_test from './parametrization.js'
import {check, sleep} from 'k6'


export let options = types_test.types[__ENV.TYPE_TEST]

export function setup(){
    return {
        authResponse : JSON.parse(auth_service.execute().body)
    }
}

export default function (data) {
    const res = user_service.execute(data)
    check(res,{
        "status was 200" : r => r.status == 200
    })
    sleep(1);
}