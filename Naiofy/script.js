import * as register_endpoint from '../Naiofy/endpoints/register.js'
import * as login_endpoint from '../Naiofy/endpoints/login.js'
import * as users_list_endpoint from '../Naiofy/endpoints/users_list.js'
import * as albums_list_endpoint from '../Naiofy/endpoints/albums_list.js'
import * as album_photos_list_endpoint from '../Naiofy/endpoints/album_photos_list.js'
import {check} from 'k6'

export const options = {
    thresholds:{
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
        checks: ['rate>0,9'], // successful checks should be highter than 90%
    }
}

export function setup(){
    return {
        auth_response : login_endpoint.execute().headers.Authorization,
    }
}

export default function (data){
    const register_res = register_endpoint.execute();
    check(register_res,{
        "Created user" : r => r.status == 201
    })

    const login_res = login_endpoint.execute();
    const auth_token = login_res.headers.Authorization;
        check(auth_token,{ 
            "logged in successfully": () => auth_token !== '' });

    const user_list_res = users_list_endpoint.execute(data);
    check(user_list_res,{
        "Users list OK" : r => r.status == 200
    })

    const albums_list_res = albums_list_endpoint.execute(data);
    check(albums_list_res,{
        "Albums list OK" : r => r.status == 200
    })

    const album_photos_list_res = album_photos_list_endpoint.execute(data);
    check(album_photos_list_res,{
        "Album photos list OK" : r => r.status == 200
    })

}