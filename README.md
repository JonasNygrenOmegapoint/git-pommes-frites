# Uppgift 7

Vad är en remote, egentligen? En remote är bara ett repo som ligger någon annanstans. Det kan vara ett repo i Github, på en egen lokal server, eller rentav på din egen dator. Att ha en remote lokalt att pusha till för att testa olika saker i git, som till exempel att simulera att flera användare pushar till samma branch och hur man löser problem som uppstår när folk gör en rebase, är därför ganska smidigt. Så hur åstadkommer man detta?

Till att börja med kan man sätta upp ett bare repo. Detta görs egentligen på samma sätt som man vanligtvis sätter upp ett nytt repo, med `git init <namn_på_repo>`. Skillanden är att man också lägger till flaggan `--bare`, alltså `git init --bare <namn_på_repo>`. Efter att man har satt upp sitt bare repo, kan man lägga till det som en remote i ett annat repo med kommandot `git remote add origin <path_till_repot>`. Så om bare repot skapades i `~/git/bare_repo`, lägger man till det med `git remote add origin ~/git/bare_repo`. Därefter är det bara att göra `git push` och `git pull` som vanligt, som om repot hade legat på Github eller liknande!

## Uppgift

Sätt upp ett bare repo någonstans på din dator, och peka ut det som ny remote för det här repot. Detta görs enklast med kommandot `git remote set-url origin <path_till_repo>`. Testa att göra en förändring på någon branch, commita och sen pusha.
