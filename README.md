# Uppgift 1 - Squasha commits

Många gånger behöver man squasha sina commits innan man mergar in sin branch till main eller liknande. I vissa fall går detta att göra via Github, DevOps eller Bitbucket som ett sista steg innan mergen sker. Men ibland saknas detta alternativ, och då behöver man göra det manuellt. Att squasha sina commits på branchen man jobbar på görs via en interactive rebase. Det sker i följande steg:

1. Identifiera hur många commits som ska squashas. Detta görs enklast genom att kolla i loggen med kommandot `git log`.
2. Hitta commiten som ligger innan commiten du vill squasha till.
3. Kopiera den commitens hash.
4. Kör kommandot `git rebase -i <commit-hash>`
	- Alternativt, om du vet hur många commits du vill squasha ihop kan du skriva `HEAD~x` istället för commit-hashen, där `x` är antalet commits du vill squasha ihop. Ex. om du vill squasha 4 commits, kan du skriva `git rebase -i HEAD~4`.
5. Nu kommer det öppnas en editor där de commits du vill squasha står listade med ordet "pick" framför sig. "Pick" betyder att commiten kommer plockas som den är, utan att ändras. Lägg märke till att om du pekade ut en commit-hash i rebase-kommandot så är den commiten inte med. Kommandot tar alltså alla commits till, men inte inklusive, den commiten. Lägg också märke till att commitsen är listade i "omvänd" ordning, alltså att den äldsta commiten står längst upp. För att squasha ihop alla commits i listan, byt ut ordet "pick" på alla commits utom den översta till "squash", eller bara ett "s". Låt "pick" stå kvar på den översta commiten.
6. När du är klar, spara och stäng filen. (Om filen öppnades i vim, använd `:wq`)
7. Nu kommer en ny fil öppnas i en editor, där alla commit-meddelanden för de commits du squashat står listade. Nu ska du skriva ett bra summerande commit-meddelande genom att antingen behålla ett av meddelandena eller skriva ett nytt. Därefter kan du ta bort de commit-meddelanden som inte ska vara kvar.
8. Spara och stäng filen när du är klar.
9. Nu är squashen klar, och du kan verifiera att den gick som förväntat genom att kolla den nya historiken med hjälp av `git log`.
10. Om du har jobbat mot en remote-branch, behöver du lägga till flaggan `--force-with-lease` när du gör en `git push`. Detta för att historiken på remote-branchen inte längre stämmer överens med din lokala histork och måste skrivas över med den lokala historiken.

## Uppgift

- Börja med att kopiera commit-hashen för den senaste commiten i historiken på den här branchen och spara den i en textfil eller liknande. Den kommer behövas för att kunna återställa branchen om du vill prova att göra om övningen flera gånger, eller om du fastnar och vill börja om. För att återställa branchen, kör kommandot `git reset --hard <commit-hash>` där commit-hashen är den du precis kopierade.
- Prova att squasha de tre senaste commitsen på denna branch genom att kopiera commit-hashen för den commit som lägger till denna README och utgå från den.
- Prova att squasha genom att använda `HEAD~3` istället för en commit-hash.
