import listDiff from '../index'
import patch from './patch'

// For primitive data
const listA = [1, 3, 6, 7, 2]
const listB = [1, 2, 3, 7, 6]
const recordsAB = listDiff(listA, listB)
console.log('recordsAB')
console.log(recordsAB)
console.log('Apply patch')
patch(recordsAB, listA)
console.log(listA)

// For object data
const listC = [
    { key: 'a' },
    { key: 'b' },
    { key: 'c' },
    { key: 'd' },
    { key: 'e' }
]
const listD = [
    { key: 'b' },
    { key: 'd' },
    { key: 'c' }
]
const recordsCD = listDiff(listC, listD, 'key')
console.log('recordsCD')
console.log(recordsCD)
console.log('Apply patch')
patch(recordsCD, listC, 'key')
console.log(listC)