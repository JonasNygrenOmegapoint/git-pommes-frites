# Uppgift 4

I vissa fall när man gör en rebase kan det hända att man får med sig andra personers commits in på sin branch som hamnar mellan ens egna commits. När detta händer skulle man kunna köra en interactive rebase och markera de commits man inte vill behålla med `drop` (eller bara `d`) för att bli av med dem och behålla bara de commits man själv gjort. Detta blir dock snabbt en ganska jobbig process om man råkat få med sig ett stort antal commits som behöver droppas. Ett mer effektivt alternativ är istället att köra en `git reset --hard <commit>` till en av sina tidigare commits, och sen göra `git cherry-pick <commit>` på de commits som man vill behålla.

T. ex., tänk dig att historiken ser ut ungefär som nedan:

```
- Börja implementera en feature (<- vill behålla)
- Lägg till ny funktion (<- vill behålla)
- Någon annans commit (<- vill droppa)
- Också någon annans commit (<- vill droppa)
- Slutför featuren (<- vill behålla)
```

Notera commit-hashen för den sista commiten du vill behålla (om det är fler än en commit kan man antingen squasha ihop de sista commitsen så att man bara har en commit att cherry-picka, eller så kan man notera commit-hashen för alla dessa commits och cherry-picka dem en efter en).

Gör en `git reset --hard <commit-hash>` till den senaste commiten som gjordes innan den första commiten du vill droppa, så att historiken ser ut som följer:

```
- Börja implementera en feature (<- vill behålla)
- Lägg till ny funktion (<- vill behålla)
```

Till sist gör du en `git cherry-pick <commit-hash>` på den commit som försvann när du gjorde en reset, så att historiken uppdateras till följande:

```
- Börja implementera en feature (<- vill behålla)
- Lägg till ny funktion (<- vill behålla)
- Slutför featuren (<- vill behålla)
```

## Uppgift

Nu ska vi fixa historiken på den här branchen så att vi blir av med de commits som vi inte vill behålla.

- Börja som vanligt med att kopiera commit-hashen för den senaste commiten. Spara den i en textfil eller liknande så att du lätt kan hitta den om du vill återställa allt som det var innan du började uppgiften.
- Kopiera på samma sätt commit-hashen för commiten du vill behålla. Dess commitmeddelande är "Make divider pretty".
- Identifiera den senaste commiten i historiken som ligger innan den första commiten vi inte vill ta med i historiken. Dess commitmeddelande är "Improve divider printing".
- Gör en `git reset --hard <commit-hash>` till commiten som heter "Improve divider printing".
- Gör en `git cherry-pick <commit-hash>` på commiten som heter "Make divider pretty".
- Lös merge-konflikten som uppstår.
- Stagea ändringarna och gör en `git cherry-pick --continue`.
- Nu öppnas en fil i en editor för att ändra commitmeddelandet. Den kan bara stängas utan att ändras i.
- Verifiera att historiken ser ut som förväntat och att de commits vi inte vill behålla är borta.

