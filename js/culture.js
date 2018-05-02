var musee = document.getElementById("musee")
,   street = document.getElementById("street")
,   insolite = document.getElementById("insolite")
,   batiment = document.getElementById("batiment")
,   imgMusee = document.getElementById("imgMusee")
,   imgStreet = document.getElementById("imgStreet")
,   imgInsolite =document.getElementById("imgInsolite")
,   imgBatiment = document.getElementById("imgBatiment")
,   museeValue = ""
,   streetValue = ""
,   insoliteValue = ""
,   batimentValue = ""

const affichageCulture = (index, values) => {
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

const tailleImageCult = (index, values) => {
    /* taille de l'image */
    let imgTaille;
    (values >= 60 )? imgTaille = "height5"
        :(values >= 45)? imgTaille = "height4"
        :(values >= 30)? imgTaille = "height3"
        :(values >= 15)? imgTaille = "height2" : imgTaille = "height1";
    
    index.setAttribute('class', imgTaille)
    index.classList.add('equip-img')
}

const initValeurCult = () => {
    museeValue = parseInt(musee.value);
    streetValue = parseInt(street.value);
    insoliteValue = parseInt(insolite.value);
    batimentValue = parseInt(batiment.value); 
}

const initAffichageCult = () => {
    affichagePaysage(musee, museeValue)
    affichagePaysage(street, streetValue)
    affichagePaysage(insolite, insoliteValue)
    affichagePaysage(batiment, batimentValue)
    
    tailleImageCult(imgMusee, museeValue)
    tailleImageCult(imgStreet, streetValue)
    tailleImageCult(imgInsolite, insoliteValue)
    tailleImageCult(imgBatiment, batimentValue)
}

const miseAJourMusee = () => {
    initValeurCult();   
            
    let pourcentage = streetValue + insoliteValue + batimentValue;
    let taux = 100 / pourcentage;
    streetValue = (taux * streetValue) * (100 - museeValue) /100;
    insoliteValue = (taux * insoliteValue) * (100 - museeValue) / 100;
    batimentValue = (taux * batimentValue) * (100 - museeValue) / 100;
    
    initAffichageCult();

    
}

const miseAJourStreet = () => {
    initValeurCult(); 
            
    let pourcentage = insoliteValue + museeValue + batimentValue;
    let taux = 100 / pourcentage;
    insoliteValue = (taux * insoliteValue) * (100 - streetValue) /100;
    museeValue = (taux * museeValue) * (100 - streetValue) / 100;
    batimentValue = (taux * batimentValue) * (100 - streetValue) / 100;
    
    initAffichageCult();
}

const miseAJourInsolite = () => {
    initValeurCult();
            
    let pourcentage = museeValue + streetValue + batimentValue;
    let taux = 100 / pourcentage;
    museeValue = (taux * museeValue) * (100 - insoliteValue) /100;
    streetValue = (taux * streetValue) * (100 - insoliteValue) / 100;
    batimentValue = (taux * batimentValue) * (100 - insoliteValue) / 100;
    
    initAffichageCult()
}

const miseAJourBatiment = () => {
    initValeurCult();     
            
    let pourcentage = insoliteValue + streetValue + museeValue;
    let taux = 100 / pourcentage;
    insoliteValue = (taux * insoliteValue) * (100 - batimentValue) /100;
    streetValue = (taux * streetValue) * (100 - batimentValue) / 100;
    museeValue = (taux * museeValue) * (100 - batimentValue) / 100;
    
    initAffichageCult();
}