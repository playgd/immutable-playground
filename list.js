'use strict'

const { List, Map } = require('immutable')

const list1 = List([1, 2, 3])
console.log(list1)

const list2 = List.of(1, 2)
console.log(list2)
console.log(list2.size)
console.log(list2.push(3), list2) // unchanged

const list3 = List(Map({a: 1, b: 2}), Map({a: 1, b: 2}))
console.log(list3)
