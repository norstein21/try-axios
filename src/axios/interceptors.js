import axios from "axios";

const authIntercept = axios.create({
    baseURL: 'https://course-api.com'
});

authIntercept.interceptors.request.use(
    (request)=>{
        request.headers.common['Accept'] = 'application/json'
        console.log('request sent')
        return request;
    },
    (error)=>{
        return Promise.reject(error)
    }
)

authIntercept.interceptors.response.use(
    (response)=>{
        console.log('response accepted')
        return response
    },
    (error)=>{
        if(error === 404 ){
            console.log('ERROR NOT FOUND 404')
        }
        return Promise.reject(error)
    }
)

export default authIntercept