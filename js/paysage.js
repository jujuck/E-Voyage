var foret = document.getElementById("foret")
,   montagne = document.getElementById("montagne")
,   mer = document.getElementById("mer")
,   ville = document.getElementById("ville")

const affichagePaysage = (index, values) => {
    index.value = values.toFixed(0);
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
}