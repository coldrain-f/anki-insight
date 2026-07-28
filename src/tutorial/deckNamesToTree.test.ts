import { expect, it, describe } from "vitest"
import { convertDeckNamesToTree } from "./deckNamesToTree";

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
        ];

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

    it('덱 이름을 트리구조로 변환한다 - Level 1', () => {
        const deckNames = [
            '⛴️ Language'
        ];

        const treeDataItem = convertDeckNamesToTree(deckNames);
        expect(treeDataItem).toEqual(
            [
                {
                    id: "1",
                    name: "⛴️ Language",
                }
            ]
        )
    })

    it('덱 이름을 트리구조로 변환한다 - Level 2', () => {
        const deckNames = [
            '⛴️ Language',
            '⛴️ Language::🗂️ English',
        ];

        const treeDataItem = convertDeckNamesToTree(deckNames);
        expect(treeDataItem).toEqual(
            [
                {
                    id: "1",
                    name: "⛴️ Language",
                    children: [{
                            id: "2",
                            name: "⛴️ Language::🗂️ English"
                        }
                    ]
                }
            ]
        )
    })
})

describe("split 함수 테스트", () => {
    it("분열된 데이터의 길이 1을 반환한다.", () => {
        const deckName = "⛴️ Language";
        const deckNameParts = deckName.split("::");
        expect(deckNameParts.length).toBe(1);
    })

    it("분열된 데이터의 길이 2를 반환한다.", () => {
        const deckName = "⛴️ Language::🗂️ English";
        const deckNameParts = deckName.split("::");
        expect(deckNameParts.length).toBe(2);
    })
})

describe("Parent DeckName 구하기", () => {
    it("", () => {
        const deckName = "⛴️ Language::🗂️ English";
        const deckNameParts = deckName.split("::");
        const parentDeckName =  deckNameParts[deckNameParts.length - 2];

        expect(parentDeckName).toBe("⛴️ Language");
    })

    it("", () => {
        const deckName = "⛴️ Language::🗂️ English::📚 영어 단어";
        const deckNameParts = deckName.split("::");
        const parentDeckName =  deckNameParts[deckNameParts.length - 2];

        expect(parentDeckName).toBe("🗂️ English");
    })
})
