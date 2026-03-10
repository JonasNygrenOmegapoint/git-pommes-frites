# Uppgift 6

Ofta när man sitter och utvecklar som bäst är det lätt hänt att man lägger till massa nya saker i en fil och sen commitar allt tillsammans, även om vissa saker rent konceptuellt inte borde höra ihop i samma commit. I såna lägen finns det ett väldigt smidigt option till `git add` man kan använda, nämligen `git add -p`. Detta option låter dig interaktivt välja vilka hunks i en fil som ska stageas, så att du kan commita delar av filen i flera commits. Detta kommando kan användas bara som det är, för att välja hunks bland alla filer med förändringar i, eller genom att ge det namnet på en specifik fil för att bara stagea hunks i just den filen. Så för att bara stagea hunks i filen `ts/datasets.ts`, kör kommandot `git add -p ts/datasets.ts`.

När den interaktiva stageingen föreslår en hunk du vill stagea, mata in `y`. Vill du inte stagea den föreslagna hunken, mata in `n`. Om man märker att git föreslår för stora hunks, kan man skriva in `s` som i split för att splitta upp i mindre hunks. Man kan också använda optionet `e` för att manuellt editera och välja vilka hunks man vill stagea.

## Uppgift

Lägg till några nya funktioner i `ts/datasets.ts`, och försök stagea saker i olika hunks.

1. Lägg till följande rader efter `getReverseDataset()`:

```
export const getEvenNumbers = () => getDataset().filter(isEven);

export const getOddNumbers = () => getDataset().filter(isOdd);

```

2. Lägg till följande rader efter raden med kommentaren `PRIVATE FUNCTIONS`

```
const isEven = (num: number) => num % 2 == 0;

const isOdd = (num: number) => !isEven(num);

```

3. Lägg till följande rad efter `getBigNumbers()`

```
export const getSmallNumbers = () => getDataset().filter(isSmallNumber);

```

4. Lägg till följande rad efter `isBigNumber()`

```
const isSmallNumber = (num: number) => !isBigNumber(num);
```

5. Försök stagea filen i olika hunks så att du kan dela upp förändringarna i två olika commits. Den första commiten borde innehålla raderna som du lade till i steg 1 och 2. Nästa commit borde innehålla raderna du lade till i steg 3 och 4. Om git föreslår för stora hunks (till exempel att den vill lägga till alla ändringar du gjort i filen som en enda stor hunk), mata in `s` som alternativ i den interaktiva stageingen för att splitta upp den i mindre hunks och fortsätt därefter att lägga till hunks interaktivt genom att mata in `y` på hunks som ska stageas och `n` på hunks som inte ska stageas.
6. Bonus: testa att mata in `e` under den interaktiva stageingen för att manuellt editera och välja vilka hunks du vill stagea.

Om du behöver återställa branchen, gör en hard reset till commiten som ligger innan dina nya commits!
