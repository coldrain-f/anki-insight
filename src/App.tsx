import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

async function invokeAnkiConnect(action: string, params = {}) {
  const response = await fetch("http://localhost:8765", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action,
      version: 6,
      params
    })
  });

  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }

  return data.result;
}


export function App() {

  const [deckNames, setDeckNames] = useState([]);

  useEffect(() => {
    invokeAnkiConnect("deckNames")
      .then(deckNames => {
        const formattedDeckNames = deckNames.map((deckName: string) => ({
          label: deckName,
          value: deckName
        }));

        setDeckNames(formattedDeckNames);
      })
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
