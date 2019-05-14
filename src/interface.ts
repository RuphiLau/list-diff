import { ChangeType } from './enum'

export interface DiffRecord {
    type: ChangeType
    item?: any
    afterNode?: any
}