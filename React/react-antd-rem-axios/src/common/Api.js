// 集中管理路由，所有的接口地址：
//  1.整个应用用到了哪些接口一目了然
//  2.接口地址可能变化，方便管理
import axios from 'axios';
import qs from 'qs';

const publicUrl = 'https://sales.yingyinglicai.com:8443/sales/init/loanMarketList.do'
let commonHeader = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
export const loginHttp = {
    loginAjax: (data) => {
        return axios({
            headers: commonHeader,
            method: 'post',
            url:publicUrl,
            data: qs.stringify(data)
        });
    }
}