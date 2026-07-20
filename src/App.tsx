import { useEffect, useState } from "react";
import { getDeckNames } from "@/lib/ankiConnectActions";

import type { DeckOption } from "@/types/anki";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import type { TreeDataItem } from "@/components/ui/tree-view";
import { TreeView } from "@/components/ui/tree-view";

export function App() {

  const [deckNames, setDeckNames] = useState<DeckOption[]>([]);

  useEffect(() => {
    getDeckNames().then((names: string[]) => {
      console.log(names);
      const formattedDeckNames = names.map(name => ({ label: name, value: name }));
      setDeckNames(formattedDeckNames);
    })
      .catch(error => new Error(error));

  }, []);

  // TEST
  const data: TreeDataItem[] = [
    {
      id: "1",
      name: "Item 1",
      children: [
        {
          id: "2",
          name: "Item 1.1",
          children: [
            {
              id: "3",
              name: "Item 1.1.1",
            },
            {
              id: "4",
              name: "Item 1.1.2",
            },
          ],
        },
        {
          id: "5",
          name: "Item 1.2 (disabled)",
          disabled: true,
        },
      ],
    },
    {
      id: "6",
      name: "Item 2 (draggable)",
      draggable: true,
    },
  ];

  return (
    <>
      <TreeView data={data} />
      <Select items={deckNames}>
        <SelectTrigger className="w-full max-w-256">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Decks</SelectLabel>
            {deckNames.map((deckName) => (
              <SelectItem key={deckName.value} value={deckName.value}>
                {deckName.value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}

export default App
