import * as _ from 'lodash'

const Num = 2;

interface Cat {
  name: String,
  age: Number
}

function touchCat(cat: Cat) {
  console.log(cat)
}

console.log(touchCat({name: 'guo', age: 12}));