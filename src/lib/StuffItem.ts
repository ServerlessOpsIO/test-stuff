import { v4 as uuid } from 'uuid'

export interface StuffItemKeys {
    pk: string
    sk: string
}

export interface StuffItemData {
    [key: string]: any
}

export interface StuffItem extends StuffItemKeys, StuffItemData { }

/**
 * Create a new StuffItemKeys object with the same value for pk and sk. Key values a uuid or the 
 * optional id parameter if provided
 * @param id - optional string to use as the key value
 *
 * @returns StuffItemKeys
 */
export function createKeys(id?: string): StuffItemKeys {
    const key = id || uuid()
    return {
        pk: key,
        sk: key
    }
}

/**
 * Create a new StuffItemKeys object with the same value for pk and sk
 * @param id - string to use as the key value
 *
 * @returns StuffItemKeys
 */
export function getKeys(id: string): StuffItemKeys {
    return {
        pk: id,
        sk: id
    }
}
