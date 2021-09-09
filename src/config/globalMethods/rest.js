import axios from "axios";
import requestUrl from '../base';
import apiConfig from '../apiConfig/index';

// 创建一个请求实例并配置请求的基础配置
const defineRest = axios.create({
    baseURL: requestUrl.baseURL,
    requestHeader: {
        'Content-Type': 'application/json'
    },
    timeout: 30000
})

function rest (api, param = {}, data= {}, options) {
    // 返回一个 Promise 对象，可以在 .then() 中处理回调
    return new Promise((resolve, reject) => {
        let apiArr = apiConfig[api].split(" "); // 根据空格分割请求方法和请求url
        let method = "get", // 默认 get 请求
            url = "";

        if (apiArr.length > 1) {
            // 长度大于1则取出 method
            method = apiArr[0];
            url = apiArr[1];
        } else {
            // 长度小于1默认 method
            url = apiArr[0];
        }

        // 请求需要的参数
        let ops = options ? options : {};
        ops.method = method;
        ops.url = url;
        ops.params = param ? param : {};
        ops.data = data ? data : {};
        // ops.headers = localStorage.getItem("token");
       
        restHandler(ops).then(res => {
            if (res.data.code == 2000) {
                resolve(res);
            } else {
                // 异常处理
                this.alertError(res.data.msg)
                reject(res);
            }
        })
    })
}

function restHandler (ops) {
    return new Promise((resolve, reject) => {
        // 请求参数
        let restOptions = {
            responseType: 'json', // 响应类型
            method: ops.method ? ops.method : "get",
            url: ops.url,
            params: ops.params,
            data: ops.data ? ops.data : {},
            // headers: ops.headers, // Request Headers
        }

        // 调用请求实例发送请求
        defineRest(restOptions).then(res => {
            resolve(res);
        }).catch(err => {
            // 请求异常处理（浏览器部分）
            if (err.response) {
                console.log('错误处理');
                // switch(err.response.status) {
                //     case 400: 
                // }
                reject(err)
            }
        })
    })
}

export default rest;