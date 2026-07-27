import { expect, it, describe } from "vitest"

describe('첫 테스트', () => {
    it('두 수를 더한다', () => {
        expect(1 + 1).toBe(2)
    })

    it('음수도 정상 처리한다', () => {
        expect(-1 + 1).toBe(0)
    })
})