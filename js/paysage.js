var foret = document.getElementById("foret")
,   montagne = document.getElementById("montagne")
,   mer = document.getElementById("mer")
,   ville = document.getElementById("ville")
,   imgforet = document.getElementById("imgForet")
,   imgmontagne = document.getElementById("imgMontagne")
,   imgmer =document.getElementById("imgMer")
,   imgville = document.getElementById("imgVille")
  

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

const miseAJourForet = () => {
    let foretValue = parseInt(foret.value);
    let montagneValue = parseInt(montagne.value);
    let merValue = parseInt(mer.value);
    let villeValue = parseInt(ville.value);       
            
    let pourcentage = montagneValue + merValue + villeValue;
    let taux = 100 / pourcentage;
    montagneValue = (taux * montagneValue) * (100 - foretValue) /100;
    merValue = (taux * merValue) * (100 - foretValue) / 100;
    villeValue = (taux * villeValue) * (100 - foretValue) / 100;
    
    affichagePaysage(foret, foretValue)
    affichagePaysage(montagne, montagneValue)
    affichagePaysage(mer, merValue)
    affichagePaysage(ville, villeValue)
    
    tailleImage(imgForet, foretValue)
    tailleImage(imgMontagne, montagneValue)
    tailleImage(imgMer, merValue)
    tailleImage(imgVille, villeValue)
    
}

const miseAJourMer = () => {
    let foretValue = parseInt(foret.value);
    let montagneValue = parseInt(montagne.value);
    let merValue = parseInt(mer.value);
    let villeValue = parseInt(ville.value);       
            
    let pourcentage = montagneValue + foretValue + villeValue;
    let taux = 100 / pourcentage;
    montagneValue = (taux * montagneValue) * (100 - merValue) /100;
    foretValue = (taux * foretValue) * (100 - merValue) / 100;
    villeValue = (taux * villeValue) * (100 - merValue) / 100;
    
    affichagePaysage(foret, foretValue)
    affichagePaysage(montagne, montagneValue)
    affichagePaysage(mer, merValue)
    affichagePaysage(ville, villeValue)
    
    tailleImage(imgForet, foretValue)
    tailleImage(imgMontagne, montagneValue)
    tailleImage(imgMer, merValue)
    tailleImage(imgVille, villeValue)
}

const miseAJourMontagne = () => {
    let foretValue = parseInt(foret.value);
    let montagneValue = parseInt(montagne.value);
    let merValue = parseInt(mer.value);
    let villeValue = parseInt(ville.value);       
            
    let pourcentage = foretValue + merValue + villeValue;
    let taux = 100 / pourcentage;
    foretValue = (taux * foretValue) * (100 - montagneValue) /100;
    merValue = (taux * merValue) * (100 - montagneValue) / 100;
    villeValue = (taux * villeValue) * (100 - montagneValue) / 100;
    
    affichagePaysage(foret, foretValue)
    affichagePaysage(montagne, montagneValue)
    affichagePaysage(mer, merValue)
    affichagePaysage(ville, villeValue)
    
    tailleImage(imgForet, foretValue)
    tailleImage(imgMontagne, montagneValue)
    tailleImage(imgMer, merValue)
    tailleImage(imgVille, villeValue)
}

const miseAJourVille = () => {
    let foretValue = parseInt(foret.value);
    let montagneValue = parseInt(montagne.value);
    let merValue = parseInt(mer.value);
    let villeValue = parseInt(ville.value);       
            
    let pourcentage = montagneValue + merValue + foretValue;
    let taux = 100 / pourcentage;
    montagneValue = (taux * montagneValue) * (100 - villeValue) /100;
    merValue = (taux * merValue) * (100 - villeValue) / 100;
    foretValue = (taux * foretValue) * (100 - villeValue) / 100;
    
    affichagePaysage(foret, foretValue)
    affichagePaysage(montagne, montagneValue)
    affichagePaysage(mer, merValue)
    affichagePaysage(ville, villeValue)
    
    tailleImage(imgForet, foretValue)
    tailleImage(imgMontagne, montagneValue)
    tailleImage(imgMer, merValue)
    tailleImage(imgVille, villeValue)
}