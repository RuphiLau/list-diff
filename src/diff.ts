import { ChangeType } from './enum'
import { DiffRecord } from './interface'
import { getIdx } from './utils'

export default function(oldList: Array<any>, newList: Array<any>, keyProp?: string) {
    let lastIdx: number = 0
    let lastNode = null
    const records: Array<DiffRecord> = []
    // Compare newList with oldList to find out items to insert or move
    newList.forEach(item => {
        const oldIdx: number = getIdx(oldList, item, keyProp)
        // It's a new inserted item
        if (oldIdx === -1) {
            records.push({
                item,
                type: ChangeType.INSERT,
                afterNode: lastNode
            })
        // It may be a move operation 
        } else {
            if (oldIdx < lastIdx) {
                records.push({
                    item,
                    type: ChangeType.MOVE,
                    afterNode: lastNode
                })
            }
            lastIdx = Math.max(oldIdx, lastIdx)
        }
        lastNode = item
    })

    // Find out items to remove
    oldList.forEach((item, i) => {
        const newIdx: number = getIdx(newList, item, keyProp)
        if (newIdx === -1) {
            records.push({
                item,
                type: ChangeType.REMOVE
            })
        }
    })

    return records
}