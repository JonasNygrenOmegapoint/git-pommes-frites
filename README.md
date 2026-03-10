# Uppgift 5

Om man råkar göra fel under en rebase, eller gör en `git reset --hard <commit-hash>` till fel commit är det lätt att tänka att man har gjort ett gravt misstag och att det inte går att återställa historiken som den var innan man gjorde sin rebase eller reset. Men frukta icke! Det är här reflogen kommer in. Git sparar referenser lokalt så att man ska kunna återställa historiken om man skulle råka göra fel. Dessa referenser skapas varje gång man:

- byter branch
- commitar
- stashar
- resetar
- rebasear

Man kan se en logg över de senaste referenserna som skapats genom att köra kommandot `git reflog`. Varje rad i loggen består av en commit-hash, ett alias för referensen på formen `HEAD@{x}` för att lättare kunna checka ut den referensen istället för att använda commit-hashen, samt vilken operation som utfördes när referensen skapades. Med hjälp av detta kan man till exempel återställa historiken som den var innan man gjorde en reset eller rebase. Detta görs genom att leta upp den referens som ligger precis innan man gjorde en reset eller rebase, och gör en hard reset till den commiten.

## Uppgift

Checka ut någon av de föregående brancherna du jobbat på hittills, och lek runt med att göra rebasing eller en reset och försök sedan återställa historiken med hjälp av reflogen. Testa att checka ut olika commits genom att köra `git checkout <commit-hash>`, och se om historiken ser rätt ut genom att köra `git log`. Stämmer den överens med hur den såg ut innan du gjorde en rebase eller reset? Då har du hittat rätt commit, och kan köra `git checkout <branchen du var på>` för att gå tillbaka till rätt utgångspunkt (och komma ut ur detached HEAD state) följt av `git reset --hard <commit-hash>`. Stämmer historiken inte överens? Prova att checka ut en annan commit/referens. Du kan alltid komma tillbaka till utgångsläget genom att köra kommandot `git checkout <branchen du var på>`.
