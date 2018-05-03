var sensation = document.getElementById("sensation")
,   farniente = document.getElementById("farniente")
,   faune = document.getElementById("faune")
,   sport = document.getElementById("sport")
,   imgSensation = document.getElementById("imgSensation")
,   imgFarniente = document.getElementById("imgFarniente")
,   imgFaune =document.getElementById("imgFaune")
,   imgSport = document.getElementById("imgSport")
,   sensationValue = ""
,   farnienteValue = ""
,   fauneValue = ""
,   sportValue = ""

const affichageActivite = (index, values) => {
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

const tailleImageAct = (index, values) => {
    /* taille de l'image */
    let imgTaille;
    (values >= 60 )? imgTaille = "height5"
        :(values >= 45)? imgTaille = "height4"
        :(values >= 30)? imgTaille = "height3"
        :(values >= 15)? imgTaille = "height2" : imgTaille = "height1";
    
    index.setAttribute('class', imgTaille)
    index.classList.add('equip-img')
}

const initValeurAct = () => {
    sensationValue = parseInt(sensation.value);
    farnienteValue = parseInt(farniente.value);
    fauneValue = parseInt(faune.value);
    sportValue = parseInt(sport.value); 
}

const initAffichageAct = () => {
    affichagePaysage(sensation, sensationValue)
    affichagePaysage(farniente, farnienteValue)
    affichagePaysage(faune, fauneValue)
    affichagePaysage(sport, sportValue)
    
    tailleImageAct(imgSensation, sensationValue)
    tailleImageAct(imgFarniente, farnienteValue)
    tailleImageAct(imgFaune, fauneValue)
    tailleImageAct(imgSport, sportValue)
}

const miseAJourSensation = () => {
    initValeurAct();   
            
    let pourcentage = fauneValue + farnienteValue + sportValue;
    let taux = 100 / pourcentage;
    fauneValue = (taux * fauneValue) * (100 - sensationValue) /100;
    farnienteValue = (taux * farnienteValue) * (100 - sensationValue) / 100;
    sportValue = (taux * sportValue) * (100 - sensationValue) / 100;
    
    initAffichageAct();
}

const miseAJourFarniente = () => {
    initValeurAct(); 
            
    let pourcentage = fauneValue + sensationValue + sportValue;
    let taux = 100 / pourcentage;
    fauneValue = (taux * fauneValue) * (100 - farnienteValue) /100;
    sensationValue = (taux * sensationValue) * (100 - farnienteValue) / 100;
    sportValue = (taux * sportValue) * (100 - farnienteValue) / 100;
    
    initAffichageAct();
}

const miseAJourFaune = () => {
    initValeurAct();
            
    let pourcentage = sensationValue + farnienteValue + sportValue;
    let taux = 100 / pourcentage;
    sensationValue = (taux * sensationValue) * (100 - fauneValue) /100;
    farnienteValue = (taux * farnienteValue) * (100 - fauneValue) / 100;
    sportValue = (taux * sportValue) * (100 - fauneValue) / 100;
    
    initAffichageAct()
}

const miseAJourSport = () => {
    initValeurAct();     
            
    let pourcentage = fauneValue + farnienteValue + sensationValue;
    let taux = 100 / pourcentage;
    fauneValue = (taux * fauneValue) * (100 - sportValue) /100;
    farnienteValue = (taux * farnienteValue) * (100 - sportValue) / 100;
    sensationValue = (taux * sensationValue) * (100 - sportValue) / 100;
    
    initAffichageAct();
}