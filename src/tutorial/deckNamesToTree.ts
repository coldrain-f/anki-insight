import type { TreeDataItem } from "@/components/ui/tree-view";

export function getDeckNamePartsByDeckName(deckName: string) {    
    if (deckName === "") return [] as string[];
    return deckName.split("::");
}

export function getParentDeckNameByDeckName(deckName: string) {
    const deckNameParts = getDeckNamePartsByDeckName(deckName);
    return deckNameParts[deckNameParts.length - 2];
}

export function convertDeckNamesToTree(deckNames: string[]) {
    const treeDataItems: TreeDataItem[] = [];

    for (let i = 0; i < deckNames.length; i++) {
        const deckName = deckNames[i];
        const deckNameParts = getDeckNamePartsByDeckName(deckName);

        if (deckNameParts.length <= 1) {
            treeDataItems.push({
                id: "1",
                name: deckName
            });
        } else {
            const parentDeckName = getParentDeckNameByDeckName(deckName);
            const parentTreeDataItem = treeDataItems.find(item => item.name === parentDeckName);
            parentTreeDataItem?.children?.push({
                id: "2",
                name: deckName
            });
        }
    }

    return treeDataItems;
}