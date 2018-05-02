var foret = document.getElementById("foret")
,   montagne = document.getElementById("montagne")
,   mer = document.getElementById("mer")
,   ville = document.getElementById("ville")
,   imgForet = document.getElementById("imgForet")
,   imgMontagne = document.getElementById("imgMontagne")
,   imgMer =document.getElementById("imgMer")
,   imgVille = document.getElementById("imgVille")
,   foretValue = ""
,   montagneValue = ""
,   merValue = ""
,   villeValue = ""

const affichagePaysage = (index, values) => {
    index.value = values.toFixed(0);
    
    /*Couleur du trait de l'input*/
    let classCouleur;
    (values >= 60 )? classCouleur = "red"
        :(values >= 45)? classCouleur = "orange"
        :(values >= 30)? classCouleur = "vert"
        :(values >= 15)? classCouleur = "noir" : classCouleur = "blue";
    
    index.setAttribute('class', classCouleur);
    index.classList.add('equip-input');
}

const tailleImage = (index, values) => {
    /* taille de l'image */
    let imgTaille;
    (values >= 60 )? imgTaille = "height5"
        :(values >= 45)? imgTaille = "height4"
        :(values >= 30)? imgTaille = "height3"
        :(values >= 15)? imgTaille = "height2" : imgTaille = "height1";
    
    index.setAttribute('class', imgTaille)
    index.classList.add('equip-img')
}

const initValeur = () => {
    foretValue = parseInt(foret.value);
    montagneValue = parseInt(montagne.value);
    merValue = parseInt(mer.value);
    villeValue = parseInt(ville.value); 
}

const initAffichage = () => {
    affichagePaysage(foret, foretValue)
    affichagePaysage(montagne, montagneValue)
    affichagePaysage(mer, merValue)
    affichagePaysage(ville, villeValue)
    
    tailleImage(imgForet, foretValue)
    tailleImage(imgMontagne, montagneValue)
    tailleImage(imgMer, merValue)
    tailleImage(imgVille, villeValue)
}

const miseAJourForet = () => {
    initValeur();   
            
    let pourcentage = montagneValue + merValue + villeValue;
    let taux = 100 / pourcentage;
    montagneValue = (taux * montagneValue) * (100 - foretValue) /100;
    merValue = (taux * merValue) * (100 - foretValue) / 100;
    villeValue = (taux * villeValue) * (100 - foretValue) / 100;
    
    initAffichage();

    
}

const miseAJourMer = () => {
    initValeur(); 
            
    let pourcentage = montagneValue + foretValue + villeValue;
    let taux = 100 / pourcentage;
    montagneValue = (taux * montagneValue) * (100 - merValue) /100;
    foretValue = (taux * foretValue) * (100 - merValue) / 100;
    villeValue = (taux * villeValue) * (100 - merValue) / 100;
    
    initAffichage();
}

const miseAJourMontagne = () => {
    initValeur();
            
    let pourcentage = foretValue + merValue + villeValue;
    let taux = 100 / pourcentage;
    foretValue = (taux * foretValue) * (100 - montagneValue) /100;
    merValue = (taux * merValue) * (100 - montagneValue) / 100;
    villeValue = (taux * villeValue) * (100 - montagneValue) / 100;
    
    initAffichage()
}

const miseAJourVille = () => {
    initValeur();     
            
    let pourcentage = montagneValue + merValue + foretValue;
    let taux = 100 / pourcentage;
    montagneValue = (taux * montagneValue) * (100 - villeValue) /100;
    merValue = (taux * merValue) * (100 - villeValue) / 100;
    foretValue = (taux * foretValue) * (100 - villeValue) / 100;
    
    initAffichage();
}