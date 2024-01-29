/*  Questions 

    Note : vous allez ajouter le dialogie HTTP entre partir cliente et partie serveur.
    Donc à présent, vous devez faire vos tests via votre hébergement sur mmi.unilim.fr

    Q0 :
    Reportez la vue (V) du précédent exercice dans celui-ci.

    Q1 :
    Bien lire les commentaires, puis complétez et testez C.goTo depuis la console du navigateur
    (par exemple en appelant C.goTo('salon') )

    Q2 :
    Complétez encore C.goTo de sorte à afficher les informations de la piece avec V.renderRoom
    plutôt que de seulement les loguer brutes dans la console.

    Q3 :
    A ce stade, il ne se passe rien si l'on clique sur un bouton pour choisir une direction.
    Modifiez le template #direction-template pour rectifier cela. Prenez pour exemple ce que
    vouds avez fait dans le TD2.

    Q4 :
    Complétez la fonction C.start de sorte à ce que, quand on ouvre la page index.html, 
    s'affiche immédiatement la pièce correspondant à l'entrée. N'oubliez pas que déclarer n'est pas appeler !

    Q5 :
    Complétez une dernière fois la fonction C.goTo pour que le fond d'écran change si l'on atteint la sortie.

/*  C

    Vous connaissez déjà V (la vue) qui regroupe toutes les données et opérations qui sont spécifiques à l'interface, l'affichage.
    Mais dans une application il y a aussi des opérations qui sont ne sont pas spécifiques à l'interface.
    Notamment il y a toute les opérations qui font la logique de l'application, ce qu'elle doit faire et quand.
    Ce type d'opération, on prendra l'habitude de les placer dans un objet C, pour Controleur.

*/
let C = {};


/*  C.goTo

    . paramètre dir : une chaîne de caractères qui indique une piece de la maison
    La fonction interroge en HTTP le serveur pour obtenir les données de la pièce en json.
    Lorsqu'elle les obtient (ça prend du temps ! même si ce sont des millisecondes), elle
    fait appel à V.renderRoom pour mettre à jour l'interface. Gère le changement de bg en fin de partie.
*/
C.goTo = async function( dir ){
    let answer = await fetch( /* TODO Q1 ! mettre ici la bonne url pour requêter le serveur */);
    let json = await answer.json();
    console.log(json);
    // TODO Q2
    // TODO Q5
}

/*  C.start

    Fonction d'initialisation de l'application cliente.
    On mettra dans cette fonction tout ce que l'on veut faire au lancement de l'application.
*/
C.start = function(){
   // TODO
}

/*  V

    La vue, objet qui regroupe toutes les opérations d'affichage et propres à l'interface
*/
let V = {};

// TODO Q0 : Reportez ici le code de votre exercice 2.

// tout commence ici : 
// TODO