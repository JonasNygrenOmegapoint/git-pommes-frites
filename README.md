# Uppgift 3

Som agila utvecklare vet vi att krav kan ändras, och att man ibland råkar göra fel. Kanske ska affärslogiken ändras i något man jobbat på, kanske har man råkat introducera en bugg man behöver rätta till. Vad man ofta gör i såna fall är att man rättar till felet, commitar, och sedan fortsätter jobba på sin feature tills den är klar och redo för en PR och review. Något som då kan bli en sak att försöka hålla i bakhuvudet för den som genomför en review är att featuren började med en viss implementation, för att sedan halvvägs igenom rättas till och implementeras lite annorlunda. Om man alltid squashar sina commits innan man gör en PR och blir reviewad, spelar detta ingen roll eftersom den squashade commiten kommer visa rätt implementation. Men i det fall att man vill behålla historiken som den är, utan att squasha för att underlätta för en reviewer att stegvis gå igenom PR:en, kommer detta skapa en liten kognitiv belastning att behöva hålla koll på den uppdaterade implementationen. För att undvika detta, kan man utnyttja det faktum att git commitar förändringar via deltan.

T. ex., att lägga till några rader kod i en commit kan ses som en addition, och att ta bort samma rader i commiten efter ses som en subtraktion. Dessa operationer, plus och minus, kommer i slutändan att ta ut varandra. Så hur kan vi utnyttja det?

Tänk dig att historiken ser ut ungefär som nedan:

```
- Börja implementera en feature
- Lägg till ny funktion (<- råkar introducera en bugg)
- Lägg till nästa funtion
- Rätta till bugg
- Slutför featuren
```

För att snygga till historiken och dölja att buggen ens fanns, kan vi göra en interactive rebase där vi skriver om lite i historiken. Det första vi gör då är att köra `git rebase HEAD~5` för att få upp följande i en editor:

```
pick Börja implementera en feature
pick Lägg till ny funktion (<- råkar introducera en bugg)
pick Lägg till nästa funtion
pick Rätta till bugg (<- buggfix)
pick Slutför featuren
```

Nästa steg är att vi flyttar om commiten som rättar till buggen till att ligga precis efter commiten som introducerade buggen:

```
pick Börja implementera en feature
pick Lägg till ny funktion (<- råkar introducera en bugg)
pick Rätta till bugg (<- buggfix)
pick Lägg till nästa funtion
pick Slutför featuren
```

Markera att commiten för buggfixen ska squashas:

```
pick Börja implementera en feature
pick Lägg till ny funktion (<- råkar introducera en bugg)
s Rätta till bugg (<- buggfix)
pick Lägg till nästa funtion
pick Slutför featuren
```

Squasha som vanligt. Det som kommer hända nu är att buggfixen squashas in i commiten som introducerade buggen, och eftersom de två operationerna att lägga till och att ta bort "tar ut varandra", kommer slutresultatet bli att buggen kommer försvinna, som att den aldrig hade hänt, medan resten av historiken är densamma.

## Uppgift

- Börja som vanligt med att kopiera commit-hashen för den senaste commiten.
- Identifiera commiten som introducerade en bugg i historiken. Meddelandet för denna commit är "Add function for getting big numbers".
- Identifiera commiten som fixade buggen. Meddelandet för denna commit är "Fixed bug".
- Använd en interactive rebase för att ändra om historiken så att buggen "aldrig har hänt" enligt instruktionerna ovan.

## Notera

I vissa fall går det inte att rätta till eller dölja buggar på det här sättet, i dessa fall är det bara att avbryta rebasen med `git rebase --abort` och låta det bero.
