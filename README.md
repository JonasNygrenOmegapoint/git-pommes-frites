# Uppgift 11

Att implementera olika delar av en feature som spänner över flera filer kan göras på lite olika sätt. Å ena sidan kanske man vill implementera en liten del av featuren i taget, och göra ändringar i alla filer i varje commit. Exempelvis som i denna branch. Man kanske lägger till en operation i `ts/list_operations.ts`, för att sedan använda den i `ts/data_aggregation.ts`. Därefter lägger man till en printer i `ts/printers.ts`, för att slutligen anropa den i `main.ts`. Fullt rimligt! Man kan enkelt följa för varje ny del av implementationen hur den läggs till och används i olika filer. Å andra sidan kanske man istället vill implementera alla operationer i en modul först, och låta den utgöra en commit. Då kan man commita varje färdig modul, en i taget, som har ett beroende till den föregående modulen. Då kommer man eventuellt få en lite cleanare historik som kanske inte uppfattas som lika spretig. Men om man redan har gjort på ett visst sätt, måste man hålla sig till det då? Såklart inte, vi tar hjälp av git!

För att "låsa upp" sina commits och commita om ändringar i en annan ordning, kan man använda `git reset --soft <commit-hash>`, där commit-hashen pekar ut den commit som är parent till den tidigaste commiten man vill låsa upp. `git reset --soft` kommer alltså låsa upp alla commits till, men inte inklusive, den utpekade commiten. Så låt säga att historiken ser ut som följer:

```
456def Third part of new feature
345cde Second part of new feature
234bcd First part of new feature
123abc Parent commit
```

Vi vill "låsa upp" commitsen `234bcd`, `345cde` och `456def`. Vi kör därför kommandot `git reset --soft 123abc` för att låsa upp alla dessa commits, exklusive den utpekade commiten `123abc`. När vi gjort det kommer alla ändringar vi gjort i dessa filer nu ligga stageade. Därefter är det enkelt att stagea och unstagea som vi vill för att commita om saker i en annan ordning. Exempelvis kan vi nu commita saker modul för modul istället, på följande sätt:

```
789ghi Third module
678fgh Second module
567efg First module
123abc Parent commit
```

Om du jobbar mot en remote-branch, glöm inte bort att lägga till flaggan `--force-with-lease` när du ska köra `git push` eftersom historiken på remote-branchen inte längre stämmer överens med din lokala historik och måste skrivas över!

## Uppgift

Lås upp alla commits på den här branchen till och med commiten som heter "Print sum of big numbers". Commita om alla ändringar så att du commitar en fil/modul i taget istället. Kom ihåg att du kan återställa branchen till dess ursprungsläge genom att kopiera commit-hashen för den senaste commiten och göra en hard reset till den commiten!

## Tips
Tänk på beroendet mellan filer som en graf! I grafen är varje fil en nod. Om en fil har ett beroende till en annan fil, går det en pil ut från den första filen och in i den andra filen. Börja då med att commita filen som bara har inåtgående pilar. Tänk sedan att den här noden tas bort ur grafen. Commita sen nästa fil som bara har inåtgående pilar o.s.v. Till slut kommer det bara finnas en fil kvar, som från början bara hade utåtgående pilar och som nu bara är en ensam nod i grafen. Den commitas sist. Om du följer den här metoden kommer varje commit att vara i ett sådant tillstånd att programmet fortfarande kommer kunna kompilera utan problem och fungera.

