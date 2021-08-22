/*
 * @Autor: Jiang
 * @Date: 2021-08-22 17:08:16
 * @LastAutor: you name
 * @LastEditTime: 2021-08-22 17:09:42
 * @FilePath: /Weather_WebApp/src/utils/request.js
 */
export const IP = "http://127.0.0.1:8088";
export default function request(method, url, body) {
  ////////////////////////---fetch请求---////////////////////////////////
  method = method.toUpperCase(); ///转化成大写
  body = body && JSON.stringify(body);
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-auth-token": "",
    },
    body: body, ///需要转换成JSON格式之后在进行传输
  })
    .then((res) => {
      console.log(`request`, res.data);
      return res.data;
    })
    .catch((err) => console.log(`失败`, err));
}
export const post = (url, body) => request("POST", url, body);
