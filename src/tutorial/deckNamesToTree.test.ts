import { expect, it, describe } from "vitest"

describe('덱 이름을 트리 구조로 변환', () => {
    it('덱 이름을 반환한다', () => {
        const deckNames = [
            '⛴️ Language',
            '⛴️ Language::🗂️ English',
            '⛴️ Language::🗂️ English::📚 영어 단어',
            '⛴️ Language::🗂️ English::📚 영어 단어::📖 English 단어장',
            '⛴️ Language::🗂️ English::📚 영어 단어::📖 English 해커스 구문독해 100',
            '⛴️ Language::🗂️ English::📚 영어 컨텐츠',
            '⛴️ Language::🗂️ English::📚 영어 컨텐츠::📖 English 문장 해석',
        ]

        expect(deckNames)
            .toEqual(['⛴️ Language',
                '⛴️ Language::🗂️ English',
                '⛴️ Language::🗂️ English::📚 영어 단어',
                '⛴️ Language::🗂️ English::📚 영어 단어::📖 English 단어장',
                '⛴️ Language::🗂️ English::📚 영어 단어::📖 English 해커스 구문독해 100',
                '⛴️ Language::🗂️ English::📚 영어 컨텐츠',
                '⛴️ Language::🗂️ English::📚 영어 컨텐츠::📖 English 문장 해석']
            )
    })
})