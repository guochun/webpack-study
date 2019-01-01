import sum, {PI} from './sum'
const minus = require('./minus')
require(['./muti'], function (muti) {
  console.log('5*3的结果为', muti(5,3))
})
console.log('PI+2结果为: ', sum(PI,2))
console.log('10-5结果为: ', minus(10,5))