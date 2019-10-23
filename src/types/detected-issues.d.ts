/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type DetectedIssues = {
    issues: {
        decodedLocations?: {
            column: number
            line: number
            [k: string]: any
        }[][]
        swcID: string
        swcTitle: string
        description: {
            head: string
            tail: string
            [k: string]: any
        }
        severity: string | null
        locations: {
            sourceMap?: string | null
            sourceType?: string | null
            sourceFormat?: string | null
            sourceList?: string[]
            [k: string]: any
        }[]
        extra: {
            [k: string]: any
        }
        [k: string]: any
    }[]
    sourceType: string | null
    sourceFormat: string | null
    sourceList: string[]
    meta: {
        [k: string]: any
    }
    [k: string]: any
}[]
