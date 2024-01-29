<?php
/*  Question

    Note : 
    Ce script PHP ne dialogue pas avec un serveur de base de données.
    Il charge directement des fichiers au format JSON en retourne leur contenu dans la réponse HTTP
    

    Q1:
    Ecrire ce script de sorte à ce que :
    Si l'on fait une requête HTTP ciblant script.php incluant un paramètre direction ayant pour
    valeur le nom d'une pièce (entree, salon, couloir, grenier...), le script répond en renvoyant
    au client le contenu du fichier json correspondant.

    Par défaut, si jamais la valeur du paramètre direction ne devait correspondre à aucune pièce 
    connue, le script devra retourner les données "data-entree.json"

    Vous testerez le bon comportement de ce script en effectuant vos requêtes "à la main" depuis la
    barre d'adresse de votre navigateur ou bien en utilisant l'extension Thunder Client de VS Code.

    Indication :
    Alternativement à la structure if/else if vous pouvez également utiliser la structure switch/case
    (https://www.php.net/manual/fr/control-structures.switch.php).
    Ces 2 écritures sont équivalentes en terme de logique. La second peut présenter l'avantage d'être
    un peu plus lisible.
*/