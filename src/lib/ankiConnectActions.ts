import { invokeAnkiConnect } from "@/lib/ankiConnect"

export function getDeckNames() {
    return invokeAnkiConnect("deckNames");
}

export function getDeckNamesAndIds() {
    return invokeAnkiConnect("deckNamesAndIds");
}