## Réactivité (programmation) 

La programmation réactive est un paradigme de programmation basé sur le fait que les variables instanciées dans le code sont réactive à leur changement de valeur. 
En d'autres termes si cette variable est utilisé dans une fonction cette fonction sera ré-enclenché à chaque fois que la valeur de la variable changera, elle est donc réactive. 

La programmation réactive n'est pas native dans le langage javascript, il faut donc passer par la programmation événementielle pour qu'à chaque fois que l'utilisateur fait un changement celui-ci soit répercuté au bon endroit et que le DOM soit rafraichit.

Une alternative et de choisir une librairie qui implémente nativement la réactivité comme SVELTE ou OBSERVABLE.