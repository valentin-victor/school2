// variables globales
var fond_carte = ['#1bfd9c', 'white'];
var elements = document.getElementsByClassName('interieur_theme_secondaire');
var etat;
var titre;
var validePage;
var maxCarte;
var titreNom = ["strategie","specification","ux_ui","contenus","architecture","frontend","backend","hebergement"];
var firstLoad = 0; // 0 = premier load ||| 1 = premier load déjà effectué



function initialisation(titre2){

    if(firstLoad == 0){ // si premier chargement; initier tous les cookies à faux par défaut
        
    }

    maxCarte=elements.length;
    titre = titreNom[titre2] // mise en place du bon titre

    // initialisation des couleurs de toutes les cartes -- version cookie à faire (meilleur)
    etat = new Array(maxCarte);
    for(var i=0; i<=maxCarte; i++){
        etat[i] = get_cookie(`${titre}${i}`);
        if(etat[i] == undefined){
            elements[i] = 1;
        }
        else if(etat[i] == 0){
            elements[i].style.backgroundColor = fond_carte[0];
        }
    }

    textePanier(); // initier valeur panier
}


function changeColor(nbre){ // changer la couleur de la carte au clic
    // prendre valeur cookie de l'état du div
    var bin = get_cookie(`${titre}${nbre}`);
    //window.alert(bin);
    if(bin == 0){ // ajoute 1
        elements[nbre].style.backgroundColor = fond_carte[1];
        bin = 1;
        document.cookie = `${titre}${nbre}=${bin}; SameSite=None; Secure`; // update l'état cookie
        textePanierUpdate(1);

    } 
    else if(bin == 1 || bin == -1){ // retire 1
        elements[nbre].style.backgroundColor = fond_carte[0];
        bin = 0;
        document.cookie = `${titre}${nbre}=${bin}; SameSite=None; Secure`; // update l'état cookie
        textePanierUpdate(2);

    }

}

function get_cookie(cookie_name) { // rend la valeur du cookie
    let c_name = cookie_name + "=";
    let cookie_decoded = decodeURIComponent(document.cookie);
    let cookie_parts = cookie_decoded.split(';');
    
    for(let i = 0; i <cookie_parts.length; i++) {
        let c = cookie_parts[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(c_name) == 0) {
            return c.substring(c_name.length, c.length);
        }
    }
    return "-1"; // si erreur, = -1
}


function textePanier(){ // initie le panier de la page
    var validePage = Number(get_cookie(`${titre}`));
    if(validePage == -1){
        var validePage = 0;
    }
    document.cookie = `${titre}=${validePage}; SameSite=None; Secure`; // update l'état cookie
    document.getElementById("textePanier").innerText = `${validePage} / ${maxCarte}`;//`${validePage} / ${maxCarte}`; // texte panier
}

function textePanierUpdate(vEntre) { // change la valeur du panier
    var validePage = Number(get_cookie(`${titre}`));
    maxCarte;
    if(vEntre == 1){ // retire 1
        validePage = validePage - 1;
    }
    else if(vEntre == 2){ // ajoute 1
        validePage = validePage + 1;
    }
    document.cookie = `${titre}=${validePage}; SameSite=None; Secure`; // update l'état cookie
    document.getElementById("textePanier").innerText = `${validePage} / ${maxCarte}`;//`${validePage} / ${maxCarte}`; // texte panier
}


function initialisationPanier() { // initialisation de la page panier
    // loop tous les cookies
    texteToutCarte = "";
    mainDiv = document.getElementById("initTexteCarte");


        // loop tous les cookies valides
        for(a=0;a<=495;a++){

            // vérifie quel est le nom actuel
            if(a == 0) { titreActuel = titreNom[0]; numActuel = 0; loop=0;} 
            else if(a == 58) { titreActuel = titreNom[1]; loop=0;}
            else if(a == 114) { titreActuel = titreNom[2];loop=0; }
            else if(a == 178) { titreActuel = titreNom[3];loop=0; }
            else if(a == 226) { titreActuel = titreNom[4];loop=0; }
            else if(a == 288) { titreActuel = titreNom[5];loop=0; }
            else if(a == 362) { titreActuel = titreNom[6];loop=0; }
            else if(a == 434) { titreActuel = titreNom[7];loop=0; }
            


            actuel = get_cookie(`${titreActuel}${loop}`);
            if(actuel == 0){ // afficher si actif
                numActuel = numActuel + 1;
                //document.getElementsByClassName(`interieur_theme_secondaire`)[numActuel].add();
                //document.getElementsByClassName(`interieur_theme_secondaire`)[a].style.visibility = "visible";
            }
            else if(actuel == 1){ // cacher si inactif
                document.getElementsByClassName(`interieur_theme_secondaire`)[numActuel].remove();
                //numActuel = 0;
                //document.getElementsByClassName(`interieur_theme_secondaire`)[a].style.visibility = "hidden";
            }
            else { // si autre ne rien faire
                document.getElementsByClassName(`interieur_theme_secondaire`)[numActuel].remove();
                //numActuel = 0;
                //document.getElementsByClassName(`interieur_theme_secondaire`)[a].style.visibility = "hidden";
            }
            loop = loop + 1;
            
        }

    testaa = new Array(titreActuel);


    // affichage tout

    
    //document.getElementById("initTexteCarte").innerText = test; // texte panier
    //window.alert("ahhhh");
    

}

function cacher(){
    window.alert("ahhhh");
}

    // 2. JS insérer le HTML nécessaire suivant les cookies "1" pour tous les titres
    // https://www.delftstack.com/howto/javascript/load-html-file-javascript/
    // 3. JS télécharger toutes les cartes dans un PDF (+ comment crée un projet)



    


// -------- aide --------

// document.cookie = "name=oeschger; SameSite=None; Secure";
// "name" = le nom ||| oeschger = valeur



// récupérer une donnée
/*
var someVarName = localStorage.getItem("variableSauvegarde");
*/

// sauvegarder une donnée
/*
localStorage.setItem("variableSauvegarde", 0);;
*/

// window.alert("ahhhh");

// accessdata FTK