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
  },

  // 转化时间
  getFormatTime: function (timestamp) {
    var now = this.getUnix()
    var today = this.getTodayUnix()
    var year = this.getYearUnix()
    var timer = (now - timestamp) / 1000 // 转换为秒级时间
    var tip = ''

    if (timer <= 0) {
      tip = '刚刚好'
    } else if (Math.floor(timer/60) <= 0) {
      tip = '刚刚好'
    } else if (timer < 3600) {
      tip = Math.floor(timer/60) + '分钟前'
    } else if (timer >= 3600 && (timestamp - today >= 0)) {
      tip = Math.ceil(timer/3600) + '小时前'
    } else if (timer/86400 <= 31) {
      tip = Math.ceil(timer/86400) + '天前'
    } else {
      tip = this.getLastDate(timestamp)
    }

    return tip
  }

}

export default {
  bind: function (el, binding) {
    el.innerHTML = Time.getFormatTime(binding.value * 1000)
    el.__timeout__ = setInterval(function () {
      el.innerHTML = Time.getFormatTime(binding.value * 1000)
    } , 60000)
  },

  unbind: function (el) {
    clearInterval(el.__timeout__)
    delete el.__timeout__
  }
}
