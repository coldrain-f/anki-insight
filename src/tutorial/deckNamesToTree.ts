import type { TreeDataItem } from "@/components/ui/tree-view";

export function convertDeckNamesToTree(deckNames: string[]) {
    const treeDataItem: TreeDataItem[] = [];
    const deckName = deckNames[0];
    treeDataItem.push({
        id: "1",
        name: deckName
    });

    

    return treeDataItem;
}