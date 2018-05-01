

//Fonction de mise à jour des onglets
const diapo = (feuillet, index) => {
    let poinsons = document.getElementsByClassName("accueil-footer-temoin")
    for (let poinson of poinsons) {
       if (poinson.classList.contains("highlight")) {
           poinson.classList.remove("highlight")
           }
    }
    feuillet.classList.add('highlight')
    
    let diapos = document.getElementsByClassName("accueil-image")
     for (let diapo of diapos) {
       if (!(diapo.classList.contains("hidden"))) {
           diapo.classList.add("hidden")
        }
    }
    index.classList.remove('hidden')
}

/*Relance de la fonction*/


