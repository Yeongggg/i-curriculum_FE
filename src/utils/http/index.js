import axios from 'axios';

// 타임아웃 30초
axios.defaults.timeout = 30000;
axios.interceptors.request.use(config => {
    console.log("요청 전 ", config.url);
    return config;
}, error => {
    return Promise.reject(error);
});
axios.interceptors.response.use(response => {
    console.log("응답이완료 ", response.config.url);
    return response;
}, error => {
    // 프로그램 방식으로 컴포넌트 호출
    
    if(error.response.status===401) {
        alert(error.response.status)
        return Promise.reject(error);
    }
    if(error.response.status===400){
        return Promise.reject(error);
    }
    // return Promise.reject(error);
});

const token=localStorage.getItem('authorization');
const defaultHeader = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `${token}`,
}


// 토근을 받아와서 헤더를 생성할때의 기본 헤더
// const tokenHeader = (token) => {
//     return headers = {
//         'Content-Type': 'application/json',
//         'Authorization': `vRealizeOpsToken ${token}`,
//         'Accept': 'application/json'
//     };
// }
const httpApi = {
    get: function (url, opt) {
        const apiOpt = {
            url: url,
            params: opt?.params ?? {},
            headers: opt?.headers ?? defaultHeader
        }
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: apiOpt.params,
                headers: apiOpt.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    post: function (url, body, opt) {
        const apiOpt = {
            url: url,
            params: opt?.params ?? {},
            headers: opt?.headers ?? defaultHeader,
            body: body ?? {}
        }
        return new Promise((resolve, reject) => {
            axios.post(url, apiOpt.body, {
                params: apiOpt.params,
                headers: apiOpt.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    delete: function (url, opt) {
        const apiOpt = {
            url: url,
            params: opt?.params ?? {},
            headers: opt?.headers ?? defaultHeader
        }
        return new Promise((resolve, reject) => {
            axios.delete(url, {
                params: apiOpt.params,
                headers: apiOpt.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    put: function (url, body, opt) {
        const apiOpt = {
            url: url,
            params: opt?.params ?? {},
            headers: opt?.headers ?? defaultHeader,
            body: body ?? {}
        }
        return new Promise((resolve, reject) => {
            axios.put(url, apiOpt.body, {
                params: apiOpt.params,
                headers: apiOpt.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    },
}

export default httpApi;