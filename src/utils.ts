export function isPureObject(data: any): boolean {
    return (typeof data === 'object') && data !== null
}

function _getKey(data: any, keyProp?: string): any {
    if (isPureObject(data)) {
        return keyProp ? data[keyProp] : void 0
    }
    return data
}

export function getIdx(list: Array<any>, item: any, keyProp?: string): number {
    for (let i = 0; i < list.length; ++i) {
        if (_getKey(list[i], keyProp) === _getKey(item, keyProp)) {
            return i
        }
    }
    return -1
}