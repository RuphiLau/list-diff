## Introduce
A list diff implementation that consumes no extra memory spaces

## Usage
```ts
import listDiff from './index'

const listA = [
    { key: 'a' },
    { key: 'b' },
    { key: 'c' },
    { key: 'd' },
    { key: 'e' }
]
const listB = [
    { key: 'b' },
    { key: 'd' },
    { key: 'c' }
]

const records = listDiff(listA, listB, 'key')
```
What it returns looks like:
```
[
    { item: { key: 'c' }, type: 'move', afterNode: { key: 'd' } },
    { item: { key: 'a' }, type: 'remove' },
    { item: { key: 'e' }, type: 'remove' }
]
```
You can take the records and apply them in the original list, after patching, the original list can be changed into the new list

## Notice
This algorithm is not the best one in changed steps, but it consumes less spaces, same as what React did. If you'd like less steps, you can refer to another algorithm, but it consumes extra assistant spaces