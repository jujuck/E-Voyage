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
   
    
    doc.setFont("Arial")
    doc.setFontSize("20")
    
    doc.text(`Vos lieu privilégié de vacances`, 10, 1)
    doc.text(`Vous privilégiez l'ambiance forestière à ${PaysForet}%, le soleil de la cote à ${PaysMer}%, le dynamise de la ville à ${PaysVille}% et le calme et l'air pur de l'altitude à ${PaysMontagne}%`, 1, 2)
    doc.text(`Vos mode de transport favori en vacances`, 10, 4)
    doc.text(`Vous aimez la découverte avec les transports en commun à ${TransportCommun}%, le déplacement léger à vélo à ${TransportVelo}%, la vitesse humaine de la marche à ${TransportMarche}% et la liberté de déplacement de la voiture à ${TransportVoiture}%`, 1, 5)
    doc.text(`Pour la restauration, c'est :`, 10, 7)
    doc.text(`Fastfood à ${AlimentationFastFood}%, Gastronomique à ${AlimentationGastro}, sur le pouce, sur le marché et local à ${AlimentationMarche}% et la découverte des plats traditionnels à ${Alimentationtradition}%`, 1, 8)
    doc.text(`Coté découverte : c'est l'activité culturelle des congés :`, 10, 10)
    doc.text(`Pour les musées et galleries, ${CultureMusee}% du temps, les vieilles pierres et l'histoire à ${CultureBatiment}%, le street art et l'architecture moderne à ${CultureInsolite} et les petites ruelles intimistes à ${CultureInsolite}%`, 1, 11)
    doc.text(`Et pour les activités physiques, on y va :`, 10, 13)
    doc.text(`Les sensations fortes et l'adrénalines à ${ActiviteSensation}%, l'activités physiques, les ballades et les randonnées à ${ActiviteSport}%, l'observation, la faune et la flore à ${ActiviteFaune} et le repose et le farniente à ${ActiviteFarniente}%`, 1, 14)
    doc.text(`----------------------------------------------------------------------------`, 10, 16)
    doc.text(`N'hésitez pas à revenir sur notre formulaire pour effectuer des mises à jour`, 5, 18)
    doc.text('Sans modification, nous traitons votre demande et vous envoyons une proposition', 5, 19)

    
};


const PrintPDF = () => {
    createPDF()
    doc.output("dataurlnewwindow");
}
