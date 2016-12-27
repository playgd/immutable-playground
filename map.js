'use strict'

const { Map } = require('immutable')

console.log('const { Map } = require("immutable")')

const map1 = Map({ 1: 'one' })

console.log('\nCreate map with an object. All keys are just strings:')
console.log('const map1 = Map({ 1: "one" })');
console.log('map1.get(1) -> %s', map1.get(1))
console.log('map.get("1") -> %s', map1.get('1'))

const map2 = Map()
const obj = {}
const map21 = map2.set(1, 'one').set(obj, 'object').set({}, 'unacessible')

console.log('\nCreate map, and set properties with set() method. The key may be from any type. And chainable:')
console.log('const map2 = Map()\nconst obj = {}\nconst map21 = map2.set(1, "one").set(obj, "object").set({}, "new object")')
console.log('map21.get(1) -> %s', map21.get(1))
console.log('map21.get("1") -> %s', map21.get('1'))
console.log('map21.get({}) -> %s', map21.get({}))
console.log('map21.get(obj) -> %s', map21.get(obj))

const map3 = Map([
  [1, 'one'],
  ['2', 'two']
])

console.log('\nCreate map with array of arrays:')
console.log('const map3 = Map([\n  [1, "one"],\n  ["2", "two"]\n])')
console.log('map3.get(1) -> %s', map3.get(1))
console.log('map3.get("1") -> %s', map3.get('1'))
console.log('map3.get(2) -> %s', map3.get(2))
console.log('map3.get("2") -> %s', map3.get('2'))

const map4 = Map({
  innerMap: Map({
    inner2: 'test'
  })
})

console.log('map4.getIn(["innerMap", "inner2"]) -> %s // test', map4.getIn(['innerMap', 'inner2']))
