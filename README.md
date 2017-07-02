# Unit testing
**Dit is de basis voor de unit testing opdracht.**

## Opzetten van de applicatie
1. Installeer NodeJS versie 6 of hoger. ([https://nodejs.org/en/](https://nodejs.org/en/))
2. Zorg dat npm geïnstalleerd is. Wanneer je NodeJS installeerd krijg je deze er automatisch bij.
3. Clone deze repository op je laptop met Git. Via de Command line:
```
git clone https://github.com/jurgendevries/unit-testing-js.git 
```
4. Ga via de Command Line naar de map waar de Github repository gecloned is.
5. Voer het volgende commando uit: (Hiermee worden de benodigde dependencies geïnstalleerd).
```
npm install
```
6. Vervolgens installeer je karma-cli met het volgende commando. Hierdoor kunnen we straks de unit testen uitvoeren.
```
npm install -g karma-cli
```
7. Voer het volgende commando uit om te testen of alles werkt:
```
npm test
```

8. Je testen worden gestart maar niet uitgevoerd.

## Oplossen van de fouten
* Om de testen goed te laten draaien moeten in het bestand **karma.conf.js** de juiste locaties worden opgegeven om de applicatie en test bestanden te vinden.
  * Gebruik [http://karma-runner.github.io/1.0/config/configuration-file.html](http://karma-runner.github.io/1.0/config/configuration-file.html) voor meer informatie.
* Als je dit gedaan hebt worden de testen uitgevoerd maar falen er een aantal. In het bestand **converter.js** en **normalize.js** werkt de JavaScript nog niet naar behoren. Laat de testen slagen door de code in deze bestanden aan te passen.
* Schrijf vervolgens de lege testen zodat deze ook slagen. Zie de bestanden **calculate.test.js** en **normalize.test.js**.
* Voeg in **convert.js** een test toe voor de fix functie.

## Introductie testen met ESRI
**Om code te testen waar je gebruik maakt van de ESRI JavaScript API zul je meer voor moeten bereiden dan alleen de locaties van je JavaScript files beschikbaar maken. In de volgende stappen een uitleg hoe je dit kunt doen voor de opdracht met modules.**

* Clone het volgende project:
```
git clone https://github.com/jurgendevries/dojo-modules-testing 
```
* Volg de stappen in de README van het zojuist geclonede project.
