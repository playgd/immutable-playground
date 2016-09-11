'use strict'

const { OrderedMap } = require('immutable')

const newOrderedMap = OrderedMap({ key: 'value' })
console.log('newOrderedMap', newOrderedMap)
console.log('has key "key":', newOrderedMap.has('key'))

const otherOrderedMap = OrderedMap([['key', 'value']])
console.log('otherOrderedMap', otherOrderedMap)
