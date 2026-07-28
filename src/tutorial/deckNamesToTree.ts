import type { TreeDataItem } from "@/components/ui/tree-view";

export function convertDeckNamesToTree(deckNames: string[]) {
    const treeDataItems: TreeDataItem[] = [];

    for (let i = 0; i < deckNames.length; i++) {
        const deckName = deckNames[i];
        const deckNameParts = deckName.split("::");

        if (deckNameParts.length <= 1) {
            treeDataItems.push({
                id: "1",
                name: deckName
            });
        } else {
            const parentDeckName = deckNameParts[deckNameParts.length - 1];
            const parentTreeDataItem = treeDataItems.find(item => item.name === parentDeckName);
            parentTreeDataItem?.children?.push({
                id: "2",
                name: deckName
            });
        }
    }

    return treeDataItems;
}