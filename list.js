'use strict'

const { List } = require('immutable')

const list1 = List([1, 2, 3])
console.log(list1)

const list2 = List.of(1, 2, 3)
console.log(list2)
