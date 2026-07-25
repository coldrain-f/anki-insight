import { invokeAnkiConnect } from "@/lib/ankiConnect"

type DeckNameAndId = {
    id: number;
    deckName: string;
}

//Todo: function 반환타입 주기
export function getDeckNames() {
    return invokeAnkiConnect<string[]>("deckNames");
}

export async function getDeckNamesAndIds() {
    const deckNamesAndIds: DeckNameAndId[] = [];

    await invokeAnkiConnect<Record<string, number>>("deckNamesAndIds")
        .then(res => {
            Object.entries(res)
                .forEach(v => deckNamesAndIds.push({ deckName: v[0], id: v[1] }));
        });

    return deckNamesAndIds;
}