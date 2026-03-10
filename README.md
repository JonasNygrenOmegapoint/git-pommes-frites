# Uppgift 10

Vi såg tidigare hur man gör för att rätta till en bugg och manipulerar historiken så att det ser ut som att buggen aldrig ens har hänt. Men ibland råkar man introducera en bugg någonstans i historiken men vet inte riktigt när. Ska man behöva checka ut varenda commit man gjort sen man började jobba på sin branch för att hitta när buggen introducerades? Ledande fråga, det finns ett effektivare alternativ.

Med `git bisect` gör man en binär sökning genom historiken mellan två commits som man markerar som start- resp. slutpunkter. Så hur funkar det?

För att börja göra en binär sökning, kör kommandot `git bisect start`. Därefter vill bisect ha två commits utpekade: en där man vet att buggen inte finns med, och en där man vet att den finns med. Den commit där man vet att buggen finns med markeras som `bad`, medan den commit där den inte finns med markeras som `good`. Detta görs genom att köra kommandona `git bisect bad <commit-hash>` resp. `git bisect good <commit-hash>`. Ex. om buggen finns med i den senaste commiten kan man skriva `git bisect bad HEAD`. Och om vi antar att den första commiten på branchen inte innehåller buggen, och har commit-hashen 123abc, kör man `git bisect good 123abc`. Därefter börjar den binära sökningen genom att bisect checkar ut en commit i taget, och så får man markera om buggen finns med eller inte i den commiten. Om den finns med kör man `git bisect bad`, annars `git bisect good`. När bisect till slut hittar commiten som introducerade buggen kommer den rapportera det. Därefter kan man som vanligt undersöka commiten för att kunna göra en buggfix. När man är klar med bisecten avslutar man genom att köra kommandot `git bisect reset`.

## Uppgift

Det verkar ha smugit sig in en bugg i programmet! Kör `node main.ts` i terminalen och inspektera outputen. Någonting verkar vara fel när man printar det första stora talet. Använd `git bisect` för att hitta commiten som introducerade buggen, och gör därefter en buggfix som rättar till problemet. Kanske kan du även få den att försvinna helt ur historiken?

Glöm inte att kopiera commit-hashen för den senaste commiten för att kunna återställa om det behövs!

