import http from './http.js'; // 导入我们封装好的axios对象
import apis from './Api.js'; // 导入我们封装好的apis对象


export function getExampleData (params = {}){
    return http.get(apis.getExampleData, params) 
}
