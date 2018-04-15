/**
 * @file util.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 4/15/18
 */
import axios from 'axios'

const Util = {
  imgPath: 'http://127.0.0.1:8011/img',
  apiPath: 'http://127.0.0.1:8010/'
}

Util.ajax = axios.create({
  baseURL: Util.apiPath
})

