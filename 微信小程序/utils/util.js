//公共JS文件
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//测试utils里的js文件被替他js文件调用
function sayHello(name){
  console.log("Hello ${name} !")
}
function sayGoodbye(name){
  console.log("Goodbye ${name} !")
}
module.exports.sayHello=sayHello//被其他js文件调用
exports.sayGoodbye=sayGoodbye

module.exports = {
  formatTime: formatTime
}

