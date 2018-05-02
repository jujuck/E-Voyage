//Définition des variables
/*let PaysForet = document.getElementById("foret").value;
let PaysMontagne = document.getElementById("montagne").value
let PaysMer = document.getElementById("mer").value
let PaysVille = document.getElementById("ville").value

let TransportCommun = document.getElementById("Commun").value
let TransportVoiture = document.getElementById("Voiture").value
let TransportVelo = document.getElementById("Velo").value
let TransportMarche = document.getElementById("Marcheur").value

let AlimentationGastro = document.getElementById("Gastro").value
let AlimentationFastFood = document.getElementById("FastFood").value
let AlimentationMarche = document.getElementById("Marche").value
let Alimentationtradition = document.getElementById("Tradition").value

let CultureMusee = document.getElementById("Musee").value
let CultureStreet = document.getElementById("Street").value
let CultureInsolite = document.getElementById("Insolite").value
let CultureVieilleVille = document.getElementById("VieilleVille").value

let ActiviteSensation = document.getElementById("Sensation").value
let ActiviteFarniente = document.getElementById("Farniente").value
let ActiviteFaune = document.getElementById("Faune").value
let ActiviteSport = document.getElementById("Sport").value*/

var PaysForet = "OK";
//Mise en place de la fonction du pdf



function pdfPrint() {
    var doc = new jsPDF({
    orientation: 'landscape',
    unit: 'in',
    format: [4, 2]
    })    
    doc.text('Hello Wolrd!', 1, 1)
    doc.output("dataurlnewwindow");
};


/*document.getElementById("onclick").addEventListener('click', pdfPrint())*/