/**
 * @file proxy.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 4/15/18
 */

const http = require('http')
const request = require('request')

const hostname = '127.0.0.1'
const port = 8010
const imgPort = 8011

const apiServer = http.createServer((req , res) => {
  const url = 'http://news-at.zhihu.com/api/4' + req.url;
  const options = {
    url: url
  }

  function callback (error , response , body) {
    if (!error && response.statusCode === 200) {
      res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
      res.setHeader('Access-Control-Allow-Origin', '*')
      //return the content
      res.end(body)
    }
  }

  request.get(options, callback)
})

apiServer.listen(port, hostname, () => {
  console.log(`接口代理运行在http://${hostname}:${port}/`)
})


const imgServer = http.createServer((req, res) => {
  const url
})
