/*  Questions : 

    Les questions de cet exercice portent uniquement sur la partie cliente.
    Ce sont des choses déjà faites en R1.12
    C'est pour voir si vous avez bonne mémoire !
    Le dialogue HTTP avec le serveur viendra plus tard.

    Q1 :
    Complétez la fonction V.changeBackground. Testez depuis la console du navigateur.
    (les classes de style bg et bgOut sont déjà déclarées dans style.css)

    Q2 :
    Complétez la fonction V.formatDirectionTemplate. Testez depuis la console du navigateur
    en utilisant test.portes en paramètre.

    Q3 : 
    Complétez la fonction V.formatRoomTemplate. Testez depuis la console du navigateur
    en utilisant test en paramètre.

    Q4:
    Complétez la fonction V.renderRoom. Testez depuis la console du navigateur 
    en utilisant test en paramètre.
*/


/*  test

    Cette objet comporte les données de l'entrée.
    Il est juste là le temps que vous rendiez la Vue de l'application fonctionnelle.
    Servez-vous en pour tester vos codes depuis la console de votre navigateur.

    Note : s'agissant de la partie cliente (qui s'exécute sur le navigateur) sans (encore)
    d'interactions avec la partie serveur, vous pouvez utiliser le Live Server pour faire vos tests.
*/
let test = {
    description: "Vous vous trouvez dans l'entrée de la maison. 3 options s'offrent à vous.",
    portes: ["couloir", "salon", "cuisine"]
}

/*  V

    La vue, objet qui regroupe toutes les opérations d'affichage et propres à l'interface
*/
let V = {};




/*  V.formformatDirectionTemplate

    . paramètre portes : un tableau de nom de pièces
    > valeur de retour : une chaîne concatenant des templates #direction-template formatés avec chaque nom de pièces
*/
V.formatDirectionTemplate = function(portes){
    let tpl = document.querySelector("#direction-template").innerHTML;
    // TODO
    return html;
}

/*  V.formatRoomTemplate 

    . paramètre data : un objet contentant les informations sur une pièce de la maison
    > valeur de retour : une chaîne représentant le template #room-template formaté avec les informations contenues dans data
*/
V.formatRoomTemplate = function(data){
    // TODO
}

/*  V.renderRoom

    . paramètre data : un objet contentant les informations sur une pièce de la maison
    > valeur de retour : aucune

    La fonction fait appel à V.formatRoomTemplate et place le résultat dans l'élément #room de la page (index.html)
*/ 
V.renderRoom = function(data){
    // TODO
}

/*  V.changeBackground

    Pas de paramètre, pas de valeur de retour.
    La fonction change l'image en arrière plan de la page en enlevant la classe de style bg 
    à l'élément body puis en ajoutant la classe de style bgOut à l'élément body
*/
V.changeBackground = function(){
    // TODO
}

