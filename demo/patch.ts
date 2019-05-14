import { DiffRecord } from '../src/interface'
import { ChangeType } from '../src/enum'
import { getIdx } from '../src/utils'

/**
 * Patch to change the old list into the new one
 * @param {Array<DiffRecord>} records 
 * @param {Array<any>} list 
 * @param {string?} keyProp 
 * @return {void}
 */
export default function patch(records: Array<DiffRecord>, list: Array<any>, keyProp?: string) {
    for (const record of records) {
        const { type } = record
        if (type === ChangeType.INSERT) {
            const idx = getIdx(list, record.afterNode, keyProp)
            list.splice(idx + 1, 0, record.item)
        } else if (type === ChangeType.REMOVE) {
            const idx = getIdx(list, record.item, keyProp)
            list.splice(idx, 1)
        } else if (type === ChangeType.MOVE) {
            const itemIdx = getIdx(list, record.item, keyProp)
            const [ item ] = list.splice(itemIdx, 1)
            const idx = getIdx(list, record.afterNode, keyProp)
            list.splice(idx + 1, 0, item)
        }
    }
}