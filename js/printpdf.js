//Définition des variables
let PaysForet = document.getElementById("foret").value;
let PaysMontagne = document.getElementById("montagne").value
let PaysMer = document.getElementById("mer").value
let PaysVille = document.getElementById("ville").value

let TransportCommun = document.getElementById("commun").value
let TransportVoiture = document.getElementById("voiture").value
let TransportVelo = document.getElementById("velo").value
let TransportMarche = document.getElementById("marcheur").value

let AlimentationGastro = document.getElementById("gastro").value
let AlimentationFastFood = document.getElementById("fastfood").value
let AlimentationMarche = document.getElementById("marche").value
let Alimentationtradition = document.getElementById("tradition").value

let CultureMusee = document.getElementById("musee").value
let CultureStreet = document.getElementById("street").value
let CultureInsolite = document.getElementById("insolite").value
let CultureBatiment = document.getElementById("batiment").value

let ActiviteSensation = document.getElementById("sensation").value
let ActiviteFarniente = document.getElementById("farniente").value
let ActiviteFaune = document.getElementById("faune").value
let ActiviteSport = document.getElementById("sport").value


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
    doc.text(`Vos lieu privilégié de vacances`, 5, 1)
    
    
    doc.setFont("Helvetica")
    doc.setFontSize("20")
    doc.text(`Vous privilégiez l'ambiance forestière à ${PaysForet}%, le soleil de la cote à ${PaysMer}%, le dynamise de la ville à ${PaysVille}% et l'air pur de l'altitude à ${PaysMontagne}%`, 1, 2)
    
    doc.setFont("Arial")
    doc.setFontSize("45")
    doc.text(`Vos mode de transport favori en vacances`, 4, 5)
    
    doc.setFont("Helvetica")
    doc.setFontSize("20")
    doc.text(`Vous aimez la découverte avec les transports en commun à ${TransportCommun}%, le déplacement léger à vélo à ${TransportVelo}%, la vitesse humaine de la marche à ${TransportMarche}%`, 1, 6)
    
    doc.setFont("Arial")
    doc.setFontSize("45")
    doc.text(`Pour la restauration, c'est :`, 6, 9)
    
    doc.setFont("Helvetica")
    doc.setFontSize("20")
    doc.text(`Fastfood à ${AlimentationFastFood}%, Gastronomique à ${AlimentationGastro}, sur le pouce, sur le marché et local à ${AlimentationMarche}% et la découverte des plats traditionnels à ${Alimentationtradition}%`,1 , 10)
    
    doc.setFont("Arial")
    doc.setFontSize("45")
    doc.text(`Coté découverte : l'activité culturelle des congés :`, 3, 13)
    
    doc.setFont("Helvetica")
    doc.setFontSize("20")
    doc.text(`Pour les musées et galleries, ${CultureMusee}% , les vieilles pierres et l'histoire à ${CultureBatiment}%, le street art et l'architecture moderne à ${CultureInsolite}% et les ruelles intimistes à ${CultureInsolite}%`,1, 14)
    
    doc.setFont("Arial")
    doc.setFontSize("45")
    doc.text(`Et pour les activités physiques, on y va :`, 4, 16)
    
    doc.setFont("Helvetica")
    doc.setFontSize("20")
    doc.text(`Les sensations fortes et l'adrénaline à ${ActiviteSensation}%, l'activités physiques, les ballades et les randonnées à ${ActiviteSport}%, l'observation, la faune`,1 ,17)
    doc.text(`et la flore à ${ActiviteFaune} et le repos et le farniente à ${ActiviteFarniente}%`,1 , 18)
    
    
    doc.setFontSize("24")
    doc.text(`--------------------------------------------------------------------------------`, 5, 20)
    doc.text(`N'hésitez pas à revenir sur notre formulaire pour effectuer des mises à jour`, 5, 22)
    doc.text('Sans modification, nous traitons votre demande et vous envoyons une proposition', 5, 23)

    
};


const PrintPDF = () => {
    createPDF()
    doc.output("dataurlnewwindow");
}
