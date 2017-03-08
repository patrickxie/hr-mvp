const requests = require('axios')
const axiosCookieJarSupport = require('@3846masa/axios-cookiejar-support');
const tough = require('tough-cookie');

axiosCookieJarSupport(requests);

const cookieJar = new tough.CookieJar();


const BASE_URL = 'https://leetcode.com'
const LOGIN_URL = BASE_URL + '/accounts/login/'

const TEST_URL = 'http://localhost:8000/clicked'


const HEADERS = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2',
    'Connection': 'keep-alive',
    'Host': 'leetcode.com',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36',
    'Referer': 'https://leetcode.com/accounts/login/',
}

// axios.get('https://google.com', {
//   jar: cookieJar, // tough.CookieJar or boolean
//   withCredentials: true // If true, send cookie stored in jar
// })
// .then(() => {
//   console.log(cookieJar);
// });

const login = () => {

// requests.get('https://google.com', {
//   jar: cookieJar, // tough.CookieJar or boolean
//   withCredentials: true // If true, send cookie stored in jar
// })
// .then(() => {
//   console.log(cookieJar);
// });
// }
    let u = 'hrmvp123', p = 'hrmvp321'
    let loginData = {}
    requests.get(BASE_URL, {
        headers: HEADERS,
        jar: cookieJar,
        withCredentials: true
    })
    .then( (res) => {
        if (res.status !== 200) throw 'our login failed'
        // console.log(res)
        // console.log('cookie is: ', cookieJar)
        const config = res.config;
  // axios.defaults.jar === config.jar
//   console.log('CONFIG: ',config.jar.toJSON());
//   console.log('CONFIG: ',config.jar.toJSON().cookies[0].value);
//         console.log('store is : ', cookieJar.store)
        loginData.csrfmiddlewaretoken = config.jar.toJSON().cookies[0].value
        loginData.login = u
        loginData.password = p
        loginData.remember = 'on'
        return loginData
    })
    .then( data => {
        console.log('what is data right now: ', data)
    return requests({
        url: LOGIN_URL,
        method: 'post',
        headers: HEADERS,
        // jar: cookieJar,
        // withCredentials: true,
        data: loginData
      })
    }, err => err)
    .then(res => console.log('we got result: ', res))
    .catch(err=> console.log('we got error: ', err))
}


login()

module.exports.login = login

// 0TycWuVL8IWvK1AoSz1bRHa5WeoYS0xEuhhxJ5fwMNZrYecEyMNo7DaMRwF45CiL
//Cookie:csrftoken=0TycWuVL8IWvK1AoSz1bRHa5WeoYS0xEuhhxJ5fwMNZrYecEyMNo7DaMRwF45CiL; _ga=GA1.2.1039386482.1488955571; _gat=1

//k3PM164V13hIXkx47U4pgTG6V3KhOUGkGHiYKChnUNSfnCjQAvuWkU9y6sbd2yIM
//rUTyr34MQ9U9P448EPKLB7yV6HOtowVwLq6FBacsJjj3XxQcrZekhJWZgoINgQdW