# Uppgift 9

Att vara en detektiv tillhör också arbetet som utvecklare. Vilken commit var det som löste en viss ticket? Vilken eller vilka filer innehåller ett visst nyckelord? Vilka förändringar gjordes i en viss commit, och i vilka filer? Hur skiljer sig två commits från varandra?

Med git är det ingen konst att ta reda på allt detta. Låt oss besvara ovanstående frågor med de kommandon man kan använda för att få de svar man söker:

- För att söka i historiken efter ett visst ord som förekommer i ett commitmeddelande, som exempelvis ett ticketnummer, kan man använda `git log --all --grep="<sökterm>"`. Flaggan `--all` söker bland alla brancher, så den kan skippas om man bara vill söka i branchen man står i.
- Om man vill söka bland alla trackade filer i sitt repo efter ett visst sökord, kan man använda `git grep`. Lägg till flaggan `-i` för att göra sökningen non case-sensitive, och `--untracked` för att söka även bland filer som git inte trackar.
- För att se vilka förändringar en viss commit innehåller, använd kommandot `git show <commit>`. Det går att använda både commit-hash eller aliaset `HEAD~x` för att referera till en specifik commit.
- För att se skillnaden mellan två commits, använd `git diff <commit1> <commit2>`. Om man märker att diffen ser fel ut, som i att saker man lagt till ser ut att ha tagits bort och vice versa, släng på flagga `-R` för att byta plats på commitsen. Det här kommandot funkar även för att se vilka förändringar man gjort på sin branch om man vill få en överblick innan man stagear sina förändringar! I det fallet räcker det med att köra bara `git diff`. Om man jämföra innehållet i samma fil mellan två brancher kan man köra kommandot `git diff <branch1> <branch2> -- file`. Ex. för att jämföra innehållet i README.md mellan branchera `uppgift_1` och `uppgift_2`, kör `git diff uppgift_1 uppgift_2 -- README.md`.

## Uppgift

Testa att använda ovanstående kommandon för att söka i historiken, i repot, inspektera commits och jämföra commits. Testa också att jämföra två filer mellan olika brancher.

## Tips

Om du vill veta vilka options som finns till varje kommando, kör antingen `git <kommando> -h` för att få upp en hjälptext i terminalen, eller `git help <kommando>` för att få upp en mer utförlig dokumentationssida. Ex. `git diff -h` eller `git help diff` för att se hur `git diff` funkar.
