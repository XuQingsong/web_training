// import { a } from './a';
// import './index.css';
import 'babel-polyfill'

// a()

// let const 用法
// console.log(a)
// {
//   let b = 1;
//   var a = 10;
  
//   function c() { b=2 }
//   c()
  
  
// }

// console.log(a)
// console.log(b)

// 对象的解构赋值

// const object = {
//   aa: 'hello',
//   bb: 'world',
//   cc: 'this',
//   dd: 'time'
// }

// const { aa, cc, ee='ee' } = object
// console.log(aa, cc, ee)

// Set和Map

// const s = new Set([2,2,4,2,3,5,2,'5', NaN, NaN])
// const array = [2,2,4,2,3,5,2,'5', NaN, NaN]
// console.log(s, s[2], array[2])

// // const s = new Set(a)
// // const result = Array.from(s)
// // console.log(result)

// function dedupe(array) {
//   return Array.from(new Set(array));
// }

// const dedupeA = (arr) => (Array.from(new Set(arr)))
// const a = [2,2,4,2,3,5,2,'5', NaN, NaN]
// console.log(dedupeA(a))

// const ob = {
//   a: '2eq',
//   b: 'dasdas',
//   1: '12321',
// }
// console.log(ob)

// // Map
// const data = {};
// const element = document.getElementById('myDiv');

// data[element] = 'metadata';
// console.log(data)

// const m = new Map()
// const element1 = document.getElementById('myDiv');
// m.set(element1, 'metadata')
// console.log(m)

// const items = [
//   ['name', '张三'],
//   ['title', 'Author']
// ];

// const map = new Map(items);
// console.log(map)

// // generator

// function* helloWorldGenerator() {
//   console.log('aaa');
//   yield 'hello';
//   console.log('bbb');
//   yield 'world';
//   console.log('ccc');
//   return 'ending';
// }

// var hw = helloWorldGenerator();
// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())
// hw.next()

// async await

const getStockSymbol = function () {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('get', 'http://crm.xuziqiao.com/api/finance', true)
    xhr.send({})
    xhr.onreadystatechange = function () { 
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.response))
        } else {
          reject(xhr.response)
        }
      }
    }
  })
}

const getStockPrice = function () {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('get', 'http://crm.xuziqiao.com/api/finance', true)
    xhr.send({})
    xhr.onreadystatechange = function () { 
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.response))
        } else {
          reject(xhr.response)
        }
      }
    }
  })
}

async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  // console.log(symbol)
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName('goog').then(function (reslut) { console.log(reslut) })