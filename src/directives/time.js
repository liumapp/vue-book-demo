/**
 * @file time.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 4/16/18
 */

var Time = {
  getUnix: function () {
    var date = new Date()
    return date.getTime()
  },

  //00:00
  getTodayUnix: function () {
    var date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  },

  //今年1月1日00:00
  getYearUnix: function () {
    var date = new Date()
    date.setMonth(0)
    date.setDate(1)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  },

  //获取标准的年月日时间
  getLastDate: function (time) {
    var date = new Date(time)
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    return date.getFullYear() + '-' + month + '-' + day
  }

  
}
