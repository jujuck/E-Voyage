//Définition des variables
let PaysForet = document.getElementById("foret");
let PaysMontagne = document.getElementById("montagne")
let PaysMer = document.getElementById("mer")
let PaysVille = document.getElementById("ville")

let TransportCommun = document.getElementById("commun")
let TransportVoiture = document.getElementById("voiture")
let TransportVelo = document.getElementById("velo")
let TransportMarche = document.getElementById("marcheur")

let AlimentationGastro = document.getElementById("gastro")
let AlimentationFastFood = document.getElementById("fastfood")
let AlimentationMarche = document.getElementById("marche")
let Alimentationtradition = document.getElementById("tradition")

let CultureMusee = document.getElementById("musee")
let CultureStreet = document.getElementById("street")
let CultureInsolite = document.getElementById("insolite")
let CultureBatiment = document.getElementById("batiment")

let ActiviteSensation = document.getElementById("sensation")
let ActiviteFarniente = document.getElementById("farniente")
let ActiviteFaune = document.getElementById("faune")
let ActiviteSport = document.getElementById("sport")


//Mise en place de la fonction du pdf
 var doc = new jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: [20, 30]
})


function createPDF() {
   
    doc.addFont("Arial", "Helvetica")
    
    doc.setFont("Arial")
    doc.setFontSize("45")
    doc.text(`Vos lieux privilégiés de vacances`, 5, 1)
    
    
    doc.setFont("Helvetica")
    doc.setFontSize("20")
    doc.text(`Vous privilégiez l'ambiance forestière à ${PaysForet.value}%, le soleil de la cote à ${PaysMer.value}%, le dynamise de la ville à ${PaysVille.value}% et l'air pur de l'altitude à ${PaysMontagne.value}%`, 1, 2)
    
    doc.setFont("Arial")
    doc.setFontSize("45")
    doc.text(`Vos modes de transport favoris en vacances`, 4, 5)
    
    doc.setFont("Helvetica")
    doc.setFontSize("20")
    doc.text(`Vous aimez la découverte avec les transports en commun à ${TransportCommun.value}%, le déplacement léger à vélo à ${TransportVelo.value}%, la vitesse humaine de la marche à ${TransportMarche.value}%`, 1, 6)
    doc.text(`et le confort de la voiture ${TransportVoiture.value}%`,1 , 7)
    
    doc.setFont("Arial")
    doc.setFontSize("45")
    doc.text(`Pour la restauration, c'est :`, 6, 9)
    
    doc.setFont("Helvetica")
    doc.setFontSize("20")
    doc.text(`Fastfood à ${AlimentationFastFood.value}%, Gastronomique à ${AlimentationGastro.value}%, sur le pouce, sur le marché et local à ${AlimentationMarche.value}% et la découverte des plats traditionnels à ${Alimentationtradition.value}%`,1 , 10)
    
    doc.setFont("Arial")
    doc.setFontSize("45")
    doc.text(`Coté découverte : l'activité culturelle des congés :`, 3, 13)
    
    doc.setFont("Helvetica")
    doc.setFontSize("20")
    doc.text(`Pour les musées et galleries, ${CultureMusee.value}% , les vieilles pierres et l'histoire à ${CultureBatiment.value}%, le street art et l'architecture moderne à ${CultureBatiment.value}% et les ruelles intimistes à ${CultureInsolite.value}%`,1, 14)
    
    doc.setFont("Arial")
    doc.setFontSize("45")
    doc.text(`Et pour les activités physiques, on y va :`, 4, 16)
    
    doc.setFont("Helvetica")
    doc.setFontSize("20")
    doc.text(`Les sensations fortes et l'adrénaline à ${ActiviteSensation.value}%, l'activités physiques, les ballades et les randonnées à ${ActiviteSport.value}%, l'observation, la faune`,1 ,17)
    doc.text(`et la flore à ${ActiviteFaune.value}% et le repos et le farniente à ${ActiviteFarniente.value}%`,1 , 18)
    
    
    doc.setFontSize("24")
    doc.text(`--------------------------------------------------------------------------------`, 5, 20)
    doc.text(`N'hésitez pas à revenir sur notre formulaire pour effectuer des mises à jour`, 5, 22)
    doc.text('Sans modification, nous traitons votre demande et vous envoyons une proposition', 5, 23)

    
};


const PrintPDF = () => {
    createPDF()
    doc.output("dataurlnewwindow");
}
