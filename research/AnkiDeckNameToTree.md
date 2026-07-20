### AnkiDeckNames Structure

```javascript
const deckNames = [
    "⛴️ Language",
    "⛴️ Language::🗂️ English",
    "⛴️ Language::🗂️ English::📚 영어 단어",
    "⛴️ Language::🗂️ English::📚 영어 단어::📖 English 단어장",
    "⛴️ Language::🗂️ English::📚 영어 단어::📖 English 해커스 구문독해 100"
]
```

### Tree Structure

```javascript
const data: TreeDataItem[] = [
    {
      id: "1",
      name: "⛴️ Language",
      children: [
        {
          id: "2",
          name: "🗂️ English",
          children: [
            {
              id: "3",
              name: "📚 영어 단어",
              children: [
                {
                  id: "4",
                  name: "📖 English 단어장"
                },
                {
                  id: "5",
                  name: "📖 English 해커스 구문독해 100"
                }
              ]
            }
          ]
        }
      ]
    }
  ];
```

DeckNames를 TreeData 구조로 변환시킬 방법은?

DeckName의 lenth - 2에 위치하는 데이터가 부모데이터니까 split으로 자른 후 lenth - 2로 부모를 찾고 있으면 그 부모의 children에 push하고 없으면 Roos니까 TreeData에 push하는 형태로 가면?

1. "⛴️ Language::🗂️ English"를 구분자 "::"으로 split하기
2. ["⛴️ Language", "🗂️ English"]으로 분리되면 lenth - 2로 부모를 뽑아낸다. 부모는 2-2=0에 위치한 ⛴️ Language가 된다.
3. TreeData에서 name값이 ⛴️ Language인 데이터가 있는지 찾는다.
4. 있으면 그 데이터의 children에 push
5. 없으면 루트로 간주하고 TreeData에 push

3번에 적어놓은대로 TreeData에서 데이터를 찾는 방법은? find()함수로 찾아지는지?