var commun = document.getElementById("commun")
,   velo = document.getElementById("velo")
,   marcheur = document.getElementById("marcheur")
,   voiture = document.getElementById("voiture")
,   imgCommun = document.getElementById("imgCommun")
,   imgVelo = document.getElementById("imgVelo")
,   imgMarcheur =document.getElementById("imgMarcheur")
,   imgVoiture = document.getElementById("imgVoiture")
,   communValue = ""
,   veloValue = ""
,   marcheurValue = ""
,   voitureValue = ""

const affichageTransport = (index, values) => {
    index.value = values.toFixed(0);
    console.log(index.value)
    /*Couleur du trait de l'input*/
    let classCouleur;
    (values >= 60 )? classCouleur = "red"
        :(values >= 45)? classCouleur = "orange"
        :(values >= 30)? classCouleur = "vert"
        :(values >= 15)? classCouleur = "noir" : classCouleur = "blue";
    
    index.setAttribute('class', classCouleur);
    index.classList.add('equip-input');
}

const tailleImageTrans = (index, values) => {
    /* taille de l'image */
    let imgTaille;
    (values >= 60 )? imgTaille = "height5"
        :(values >= 45)? imgTaille = "height4"
        :(values >= 30)? imgTaille = "height3"
        :(values >= 15)? imgTaille = "height2" : imgTaille = "height1";
    
    index.setAttribute('class', imgTaille)
    index.classList.add('equip-img')
}

const initValeurTrans = () => {
    communValue = parseInt(commun.value);
    veloValue = parseInt(velo.value);
    marcheurValue = parseInt(marcheur.value);
    voitureValue = parseInt(voiture.value); 
}

const initAffichageTrans = () => {
    affichageTransport(commun, communValue)
    affichageTransport(velo, veloValue)
    affichageTransport(marcheur, marcheurValue)
    affichageTransport(voiture, voitureValue)
    
    tailleImageTrans(imgCommun, communValue)
    tailleImageTrans(imgVelo, veloValue)
    tailleImageTrans(imgMarcheur, marcheurValue)
    tailleImageTrans(imgVoiture, voitureValue)
}

const miseAJourCommun = () => {
    initValeurTrans();   
            
    let pourcentage = veloValue + marcheurValue + voitureValue;
    let taux = 100 / pourcentage;
    veloValue = (taux * veloValue) * (100 - communValue) /100;
    marcheurValue = (taux * marcheurValue) * (100 - communValue) / 100;
    voitureValue = (taux * voitureValue) * (100 - communValue) / 100;
    
    initAffichageTrans();  
}

const miseAJourVelo = () => {
    initValeurTrans(); 
            
    let pourcentage = marcheurValue + communValue + voitureValue;
    let taux = 100 / pourcentage;
    marcheurValue = (taux * marcheurValue) * (100 - veloValue) /100;
    communValue = (taux * communValue) * (100 - veloValue) / 100;
    voitureValue = (taux * voitureValue) * (100 - veloValue) / 100;
    
    initAffichageTrans();
}

const miseAJourMarcheur = () => {
    initValeurTrans();
            
    let pourcentage = communValue + veloValue + voitureValue;
    let taux = 100 / pourcentage;
    communValue = (taux * communValue) * (100 - marcheurValue) /100;
    veloValue = (taux * veloValue) * (100 - marcheurValue) / 100;
    voitureValue = (taux * voitureValue) * (100 - marcheurValue) / 100;
    
    initAffichageTrans()
}

const miseAJourVoiture = () => {
    initValeurTrans();     
            
    let pourcentage = marcheurValue + veloValue + communValue;
    let taux = 100 / pourcentage;
    marcheurValue = (taux * marcheurValue) * (100 - voitureValue) /100;
    veloValue = (taux * veloValue) * (100 - voitureValue) / 100;
    communValue = (taux * communValue) * (100 - voitureValue) / 100;
    
    initAffichageTrans();
}