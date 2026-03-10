# Uppgift 2

Ibland när man gör en rebase kan det uppstå merge-konflikter. Detta sker oftast eftersom en eller flera filer man har jobbat i har uppdaterats på main-branchen, vilket innebär att "utgångsläget" man hade när man branchade första gången har förändrats. När man gör en rebase, ändrar man i praktiken vilken commit i historiken man branchade ut från på main-branchen. Om det har skett förändringar i filer man jobbat i på sin branch mellan att man branchade ut och den senaste commiten på main, kan det därför bli en konflikt när man rebasar. Vad man kan lägga märke till då är att git försöker applicera alla commits man gjort på sin branch, en efter en, från den senaste commiten på main. Har man otur kommer det uppstå en merge-konflikt varje gång git applicerar en commit, som man då måste hantera. För att underlätta antalet merge-konflikter att hantera, kan det vara lättare att squasha alla commits på sin branch innan man gör en rebase.

För att hantera en merge-konflikt som uppstår vid en rebase, gör följande:

1. Gör en rebase på main genom att köra kommandot `git rebase main`.
2. Om det uppstår en konflikt i en eller flera filer, hantera konflikterna i samtliga filer.
3. När alla konflikter är hanterade, stagea alla filer genom att köra kommandot `git add -u`.
4. Kör kommandot `git rebase --continue`.
5. Om det öppnas en editor med ett commit-meddelande, stäng bara filen utan att spara.
6. Upprepa steg 2-5 för varje ny konflikt som uppstår när en commit appliceras.
7. Nu är rebasen klar!

## Uppgift

1. Börja med att spara commit-hashen för den senaste commiten i historiken på denna branch. Den behövs för att kunna återställa historiken som den var innan rebasing och eventuell squash, precis som i förra uppgiften.
2. Börja med att göra en rebase på main genom att köra kommandot `git rebase main`. Lös alla konflikter, en i taget, enligt instruktionerna ovan. När du är klar, återställ historiken som den var innan rebasen.
3. Prova nu att squasha alla commits på denna branch innan du gör en rebase, genom att först köra `git rebase -i HEAD~3`. Gör precis som i förra uppgiften för att squasha. Kör sedan kommandot `git rebase main`. Lös alla konflikter som uppstår. Lägg märke till att detta bara behöver göras för en commit den här gången! Det kommer fortfarande uppstå konflikter i alla filer, men de behöver bara hanteras en gång per fil.

## Testa din förståelse

Checka ut en ny branch från denna branch, och försök skapa ett scenario som gör att det kommer bli en merge-konflikt när du rebasar den nya branchen på denna branch.
