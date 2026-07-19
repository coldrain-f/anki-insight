import { useEffect, useState } from "react";
import { getDeckNames } from "@/lib/ankiConnectActions";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DeckOption = {
  label: string,
  value: string
}

export function App() {

  const [deckNames, setDeckNames] = useState<DeckOption[]>([]);

  useEffect(() => {
    getDeckNames().then((names: string[]) => {
      const formattedDeckNames = names.map(name => ({ label: name, value: name }));
      setDeckNames(formattedDeckNames);
    })
      .catch(error => new Error(error));

  }, []);

  return (
    <Select items={deckNames}>
      <SelectTrigger className="w-full max-w-64">
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
  )
}

export default App
