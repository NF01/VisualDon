## Préparation jeu de données

- Jeu de données choisi: [Potentiel d'énergie solaire des communes suisses](http://www.uvek-gis.admin.ch/BFE/ogd/52/Solarenergiepotenziale_Gemeinden_Daecher_und_Fassaden.json)  en json

- Explication du traitement de ces données:

  1. Copier-coller les données brutes dans un fichier json

  2. Filtrer les données par canton (Vaud) et par "Scenario2_RoofsOnly_PotentialSolarHeat_GWh" (>30)(= au Giga Watt Heure de puissance produit par le panneau solaire pour de la chaleur sur les toits seulement)

  3. Exclusion des clés de l'objet json inutile à nos donnée (exemple le canton déjà trier)

  4. Trier les nouvelles données de l'étape 3 par ordre décroissant de puissance des Giga Watt Heure

  5. "Stringifier" le tout avec la méthode 

     ```js
     JSON.stringify(resultat)
     ```

     puis le copier coller dans un nouveau dossier json qui deviendra le data.json avec lequel nous travaillerons par la suite.
