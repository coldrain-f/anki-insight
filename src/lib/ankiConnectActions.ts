import { invokeAnkiConnect } from "@/lib/ankiConnect"

export function getDeckNames() {
    return invokeAnkiConnect<string[]>("deckNames");
}

export function getDeckNamesAndIds() {
    return invokeAnkiConnect("deckNamesAndIds");
}