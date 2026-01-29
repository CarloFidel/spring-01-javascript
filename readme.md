# Exercici: Funcionalitats modernes de JavaScript (12h)

## Contexte
Aquest projecte està dissenyat per introduir-te a les característiques modernes de JavaScript, des de ES6 fins a les versions més recents. A través d'exercicis pràctics, exploraràs conceptes com el block scoping, funcions fletxa, literals de plantilla, destructuració, noves APIs, i molt més. L'objectiu és que adquireixis una comprensió sòlida de com utilitzar aquestes funcionalitats per escriure codi més eficient, llegible i mantenible.

## Objectius d'aprenentatge
- Comprendre i aplicar el block scoping amb `let` i `const`.
- Utilitzar funcions fletxa per simplificar el codi i mantenir el context de `this`.
- Explorar literals de plantilla per interpolar cadenes i crear cadenes multi-línia.
- Aprendre a desestructurar objectes i arrays per accedir a dades de manera eficient.
- Familiaritzar-se amb les noves APIs com `Array.from`, `Object.assign`, i `String.includes`.
- Entendre i aplicar conceptes avançats com classes, promeses, async/await, iteradors, generadors, i més.

## Passos a seguir
1. **Preparació del repositori**: 
- Clona el repositori
```bash
$ git clone https://github.com/IT-Academy-BCN/it-sprint1-basics-js.git  
$ cd it-sprint1-basics-js
```
- Desconnecta el teu repositori del repositori de IT Academy. Utilitza la següent ordre de git:  
```sh  
$ git remote rm origin  
``` 
- Connecta el teu repositori amb el teu compte de GitHub:  
```sh  
$ git remote add origin <URL-del-teu-repositori>  
```  

2. **Instal·la les dependències**:
```bash
$ npm install
```
3. **Executa els tests**
- Utilitza Jest per executar els tests i veure quins passen i quins necessiten ser completats.
```bash
$ npm test
```
4. **Completa els exercicis**: 
- Cada fitxer dins del directori **`exercises`** conté tests que necessiten ser completats. Llegeix les instruccions dins de cada test i implementa el codi necessari per fer que passin.
- Pots llançar els tests en _mode watch_
```bash
$ npm run test:watch
```
- i seleccionar els fitxers d'un en un seguint les instruccions del terminal.

- Fes **un commit per cada test** que resolguis. Segueix les conventions de conventionalcommits.org

5. **Revisa les solucions**: 
- Un cop completats els exercicis, revisa les solucions per assegurar-te que has entès els conceptes.

## Lliurament de les respostes
- Completa els exercicis dins dels fitxers corresponents al directori exercises.
- Assegura't que tots els tests passen abans de fer el lliurament.
- Comparteix l'url del projecte complet als teus apunts.

## Questionari d'autoavaluació
1. Quina diferència hi ha entre var, let i const? Quan hauries d'utilitzar cadascun?
2. Com funcionen les funcions fletxa i com gestionen el context de this?
3. Quins avantatges ofereixen els literals de plantilla en comparació amb la concatenació de cadenes?
4. Què és la desestructuració i com pots utilitzar-la per simplificar el teu codi?
5. Quines són algunes de les noves APIs introduïdes en ES6 i versions posteriors? Pots donar exemples pràctics d'ús?
6. Què són les promeses i com es relacionen amb async/await?
7. Pots explicar la diferència entre iteradors i generadors? Quan utilitzaries cadascun?