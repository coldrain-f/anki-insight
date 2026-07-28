import type { TreeDataItem } from "@/components/ui/tree-view";

export function convertDeckNamesToTree(deckNames: string[]) {
    const treeDataItem: TreeDataItem[] = [];

    for (let i = 0; i < deckNames.length; i++) {
        const deckName = deckNames[i];
        const deckNameParts = deckName.split("::");

        if (deckNameParts.length <= 1) {
            treeDataItem.push({
                id: "1",
                name: deckName
            });
        } else {
            
        }
    }

    return treeDataItem;
}