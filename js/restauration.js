var gastro = document.getElementById("gastro")
,   fastfood = document.getElementById("fastfood")
,   marche = document.getElementById("marche")
,   tradition = document.getElementById("tradition")
,   imgGastro = document.getElementById("imgGastro")
,   imgFastfood = document.getElementById("imgFastfood")
,   imgMarche =document.getElementById("imgMarche")
,   imgTradition = document.getElementById("imgTradition")
,   gastroValue = ""
,   fastfoodValue = ""
,   marcheValue = ""
,   traditionValue = ""

const affichageRestauration = (index, values) => {
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

const tailleImageRest = (index, values) => {
    /* taille de l'image */
    let imgTaille;
    (values >= 60 )? imgTaille = "height5"
        :(values >= 45)? imgTaille = "height4"
        :(values >= 30)? imgTaille = "height3"
        :(values >= 15)? imgTaille = "height2" : imgTaille = "height1";
    
    index.setAttribute('class', imgTaille)
    index.classList.add('equip-img')
}

const initValeurRest = () => {
    gastroValue = parseInt(gastro.value);
    fastfoodValue = parseInt(fastfood.value);
    marcheValue = parseInt(marche.value);
    traditionValue = parseInt(tradition.value); 
}

const initAffichageRest = () => {
    affichageRestauration(gastro, gastroValue)
    affichageRestauration(fastfood, fastfoodValue)
    affichageRestauration(marche, marcheValue)
    affichageRestauration(tradition, traditionValue)
    
    tailleImageRest(imgGastro, gastroValue)
    tailleImageRest(imgFastfood, fastfoodValue)
    tailleImageRest(imgMarche, marcheValue)
    tailleImageRest(imgTradition, traditionValue)
}

const miseAJourGastro = () => {
    initValeurRest();   
            
    let pourcentage = marcheValue +fastfoodValue + traditionValue;
    let taux = 100 / pourcentage;
    marcheValue = (taux * marcheValue) * (100 - gastroValue) /100;
    fastfoodValue = (taux * fastfoodValue) * (100 - gastroValue) / 100;
    traditionValue = (taux * traditionValue) * (100 - gastroValue) / 100;
    
    initAffichageRest();

    
}

const miseAJourFastfood = () => {
    initValeurRest(); 
            
    let pourcentage = marcheValue + gastroValue + traditionValue;
    let taux = 100 / pourcentage;
    marcheValue = (taux * marcheValue) * (100 - fastfoodValue) /100;
    gastroValue = (taux * gastroValue) * (100 - fastfoodValue) / 100;
    traditionValue = (taux * traditionValue) * (100 - fastfoodValue) / 100;
    
    initAffichageRest();
}

const miseAJourMarche = () => {
    initValeurRest();
            
    let pourcentage = gastroValue + fastfoodValue + traditionValue;
    let taux = 100 / pourcentage;
    gastroValue = (taux * gastroValue) * (100 - marcheValue) /100;
    fastfoodValue = (taux * fastfoodValue) * (100 - marcheValue) / 100;
    traditionValue = (taux * traditionValue) * (100 - marcheValue) / 100;
    
    initAffichageRest()
}

const miseAJourTradition = () => {
    initValeurRest();     
            
    let pourcentage = marcheValue + fastfoodValue + gastroValue;
    let taux = 100 / pourcentage;
    marcheValue = (taux * marcheValue) * (100 - traditionValue) /100;
    fastfoodValue = (taux * fastfoodValue) * (100 - traditionValue) / 100;
    gastroValue = (taux * gastroValue) * (100 - traditionValue) / 100;
    
    initAffichageRest();
}