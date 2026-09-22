const searchInput = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-container button");

const pages = [
    {
        name: "Innovations",
        file: "innovations.html",
        keywords: [
            "innovation",
            "innovations",
            "membrane",
            "membranes",
            "biotechnologie",
            "technologie",
            "filtration"
        ]
    },

    {
        name: "Expériences",
        file: "experiences.html",
        keywords: [
            "experience",
            "expériences",
            "analyse",
            "microbiologie",
            "filtration",
            "réutilisation"
        ]
    },

    {
        name: "Water Lab",
        file: "waterlab.html",
        keywords: [
            "water lab",
            "laboratoire",
            "analyse",
            "ph",
            "dbo5",
            "dco",
            "azote",
            "phosphore",
            "microbiologie"
        ]
    },

    {
        name: "Actualités scientifiques",
        file: "actualites.html",
        keywords: [
            "actualité",
            "actualités",
            "recherche",
            "découvertes",
            "publications",
            "scientifiques"
        ]
    },

    {
        name: "Projets & Recherche",
        file: "projets.html",
        keywords: [
            "projet",
            "projets",
            "recherche",
            "pfe",
            "étudiant",
            "innovation",
            "collaboration"
        ]
    },

    {
        name: "Environnement marin",
        file: "environnement-marin.html",
        keywords: [
            "marin",
            "marine",
            "pollution",
            "plastique",
            "microplastiques",
            "eutrophisation",
            "biodiversité"
        ]
    },

    {
        name: "Ressources",
        file: "bibliotheque.html",
        keywords: [
            "ressources",
            "science",
            "eau",
            "informations",
            "connaissances"
        ]
    }
];


searchButton.addEventListener("click", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        alert("Veuillez entrer une information à rechercher.");
        return;
    }


    // Chercher d'abord dans la page actuelle

    const sections = document.querySelectorAll("section");

    for (const section of sections) {

        const content = section.innerText.toLowerCase();

        if (content.includes(searchText)) {

            section.scrollIntoView({
                behavior: "smooth"
            });

            section.style.boxShadow =
                "0 0 25px rgba(11, 114, 133, 0.5)";

            setTimeout(function () {
                section.style.boxShadow = "";
            }, 2500);

            return;
        }
    }


    // Chercher dans les autres pages

    for (const page of pages) {

        for (const keyword of page.keywords) {

            if (keyword.toLowerCase().includes(searchText)) {

                window.location.href = page.file;

                return;
            }
        }
    }


    alert("Aucune information trouvée dans Water Science.");

});