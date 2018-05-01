//Fonction de mise à jour des onglets
const onglet = (feuillet, index) => {
    let onglets = document.getElementsByClassName("equip-menuItem")
    for (let onglet of onglets) {
        console.log(onglet)
       if (onglet.classList.contains("active")) {
           onglet.classList.remove("active")
           }
    }
    feuillet.classList.add('active')
    
    let items = document.getElementsByClassName("equip-content")
     for (let item of items) {
       if (!(item.classList.contains("hidden"))) {
           item.classList.add("hidden")
        }
    }
    index.classList.remove('hidden')
}