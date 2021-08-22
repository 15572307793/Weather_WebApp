/*
 * @Autor: Jiang
 * @Date: 2021-01-06 16:25:45
 * @LastAutor: you name
 * @LastEditTime: 2021-02-05 21:39:45
 * @FilePath: /RemoteExperiment2.0_Web/src/router/store/action.js
 */
import request from "@src/utils/request.js";
import { message } from 'antd';
import * as actionType from './actionType';

//获取动态路由
export const getRouterRequest = (isLogin) => {
    return (dispatch) => {
        request('POST', '/api/server/web/rest/router/findRouter', {
            cmd: 'findRouter',
            type: 'request',
            request: {
                isLogin
            }
        }).then(obj => {
            console.log('routesssssss',obj)
            let res = obj.response;
            if (res.res) {
                // message.success('获取路由成功', 1);
                dispatch(getRouterReducer(res.message))
            } else {
                message.error('获取路由失败' + res.exception, 1);
            }
        }).catch(err => console.log(err));
    }
}

const getRouterReducer = (data) => ({
    type: actionType.GET_ROUTER,
    data
})

