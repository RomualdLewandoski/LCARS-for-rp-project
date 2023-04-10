import Logger from "./Logger";

var fetch = require('node-fetch')

async function get(url, isJson = true) {
    let ret
    let startTime = Date.now()
    await fetch(url).then((res) => {
        if (isJson){
            ret = res.json();
        }else{
            ret = res.text();
        }
        let endTime = Date.now()
        if (PLASMA.debug != null) {
            PLASMA.debug.addAjaxRequest(url, "get", startTime, endTime, 200)
        }
    }).catch((err) => {
        Logger.log(Logger.type.SEVERE, "Unable to reach (get) " + url + err)
        let endTime = Date.now()
        if (PLASMA.debug != null) {
            PLASMA.debug.addAjaxRequest(url, "get", startTime, endTime, 500)
        }
    })
    return ret
}

async function post(url, data, isJson = true) {
    let ret
    let startTime = Date.now()
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
        params.append(key, value);
    }
    await fetch(url, {
        method: 'POST',
        body: params,
    }).then((res) => {
        if(isJson){
            ret = res.json()
        }else{
            ret = res.text()
        }
        let endTime = Date.now()
        if (PLASMA.debug != null) {
            PLASMA.debug.addAjaxRequest(url, "post", startTime, endTime, 200)
        }
    }).catch((err) => {
        Logger.log(Logger.type.SEVERE, "Unable to reach (post) " + url + err)
        let endTime = Date.now()
        if (PLASMA.debug != null) {
            PLASMA.debug.addAjaxRequest(url, "post", startTime, endTime, 500)
        }
    })
    return ret
}

export default {
    get,
    post
}