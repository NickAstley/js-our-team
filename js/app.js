/*
Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
Definiamo un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Milestone 1:
stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
Milestone 2:
stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento html che conterrà i suoi dati.
BONUS:
stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
Consigli del giorno:
Ragioniamo come sempre a step.
Scriviamo prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico, ed anche il console.table()
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Cosa conterrà il campo che rappresenta la foto in ciascun oggetto? Come possiamo fare per trasformarla in effettiva immagine visibile nell’html?
*/

// Creo l'array di oggetti. Ogni oggetto rappresenta un membro del team
const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img_src: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img_src: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img_src: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img_src: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img_src: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img_src: "barbara-ramos-graphic-designer.jpg"
    }
];

// Stampo in console l'elenco
console.table(teamMembers);

// Prendo il container dove stampare i dati
const divTeamMembers = document.querySelector(".team-container");

// Ciclo nell'array
for (let i = 0; i < teamMembers.length; i++) {
    // Per ogni oggetto stampo dell'html inserendone le proprietà
    divTeamMembers.innerHTML += `<div class="team-card">
                                    <div class="card-image">
                                        <img src="img/${teamMembers[i].img_src}" alt="Wayne Barnett"/>
                                    </div>
                                    <div class="card-text">
                                        <h3>${teamMembers[i].name}</h3>
                                        <p>${teamMembers[i].role}</p>
                                    </div>
                                </div>`
}