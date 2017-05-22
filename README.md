# Mario Car Driving

## Besturing

- SPATIE = Springen
- A = Langzamer rijden (snelheid wordt minimaal -1)
- D = Sneller rijden (snelheid wordt maximaal 1)
- Refresh de pagina om opnieuw te beginnen.

## Het doel

Het doel is om zoveel mogelijk punten te verzamelen zonder dat je auto laat crashen op de rotsen die op de weg staan. Wanneer je de muntjes raakt krijg je per keer 5 extra punten.

## Installatie

- Fork mijn project
- Open de map PRG08 in Visual Studio Code om de code te zien.
- Open /docs/index.html in een webbrowser.
- Veel plezier met spelen!

## Code

- In game.ts worden de objecten gemaakt en de loops gemaakt. Ook wordt hier gekeken of er een collision is tussen de auto en de objecten. Ook wordt hier de score op het eind weergegeven.
- In car.ts vind je alle dingen die de auto doet. Bij het sneller of langzamer gaan van de auto en bij het springen wordt de Strategy Pattern gebruikt (behavior.ts, driving.ts, jumping.ts en crashing.ts). Deze werkt op het moment nog niet helemaal perfect.
- In Block.ts en longBlock.ts vind je de code voor de blokken die op je weg staan. Deze krijgen zo snel mogelijk een overerving, omdat nu dubbele code wordt gebruikt.
- In Coin.ts vind je de code voor de muntjes.
- Singleton wordt gebruikt in game.ts en car.ts.

## Toepassingen
- Interface en Strategy Pattern bevatten het gedrag van de auto (behavior.ts, driving.ts, jumping.ts, crashing.ts).
- Singleton is gebruikt in game.ts, zodat je in car.ts geen this.game.functieNaam() hoeft te gebruiken.
- Encapsulation wordt gebruikt in onder andere game.ts en car.ts. Dit zijn de private variabelen.
- Compostion kan je vinden in game.ts en car.ts. In game.ts wordt 'this' meegegeven wanneer er een nieuwe car wordt gemaakt. In car.ts vind je 'g: Game' in de constructor.

## Aankomende verbeteringen

- GameObject moet worden gemaakt, waar block, longblock, coin en car vanaf erven. Zo zullen de objecten minder code bevatten (is nu dubbel en onhandig).
- Longblock moet weg, want dit is dubbele code.
- De auto krijgt een crash animatie als hij crasht.

## Spelen!

Spelen kan via https://0845855.github.io/PRG08/