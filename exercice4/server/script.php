<?php

/*  Question

    Q1 :
    Sachant qu'en PHP, le . (point) est l'opérateur de concaténation (mettre des chaînes bout à bout),
    trouvez une façon de ré-écrire votre script sans avoir besoin d'énumérer toutes les pièces possibles.
    Sauf si vous l'aviez déjà fait ainsi dès le départ !

    Testez votre code en utilisant la partie cliente de l'exercice 3. (Attention aux urls !)
*/

$file = "data-entree.json";

// TODO

$data = file_get_contents($file);
echo $data;