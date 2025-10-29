import { describe, expect, it } from '@jest/globals'
import { getCode } from '../src/helper/codes.helper'

describe('Nanoid test', () => {
    it('should generate 1.000.000.000 code', () => {
        const codes = new Set<string>()
        for (let i = 0; i < 1000000; i++) {
            codes.add(getCode())
        }
        expect(codes.size).toBe(1000000)
    })
})
