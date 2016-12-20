'use strict'

const { Seq, Map } = require('immutable')
let filterCounter = 0
let mapCounter = 0

const seq = Seq.of(1,2,3,4,5,6,7,8)
  .filter(x => {
    filterCounter++
    return x % 2
  }).map(x => {
    mapCounter++
    return x * x
  })

// console.log(seq)
console.log(seq.get(1))
console.log('filterCounter: %s\nmapCounter: %s', filterCounter, mapCounter)

// ============

const seq2 = Map({ a: 1, b: 2, c: 3 }).toSeq()
console.log(
  seq2.flip().map(key => key.toUpperCase()).flip().toObject()
)
