<script>
    const projets = [
        {
            titre: "Projet 1",
            description: "Description du projet 1",
            image: "projet1.jpg",
            lien: "#"
        },
        {
            titre: "Projet 2",
            description: "Description du projet 2",
            image: "projet2.jpg",
            lien: "#"
        },
        {
            titre: "Projet 3",
            description: "Description du projet 3",
            image: "projet3.jpg",
            lien: "#"
        },
        {
            titre: "Projet 4",
            description: "Description du projet 4",
            image: "projet4.jpg",
            lien: "#"
        },
        {
            titre: "Projet 5",
            description: "Description du projet 5",
            image: "projet5.jpg",
            lien: "#"
        },
        {
            titre: "Projet 6",
            description: "Description du projet 6",
            image: "projet6.jpg",
            lien: "#"
        }
    ];

    const projectContainer = document.getElementById('projectContainer');

    projets.forEach(projet => {
        const projetHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${projet.image}" class="card-img-top" alt="${projet.titre}">
                    <div class="card-body">
                        <h5 class="card-title">${projet.titre}</h5>
                        <p class="card-text">${projet.description}</p>
                        <a href="${projet.lien}" class="btn btn-primary">Voir</a>
                    </div>
                </div>
            </div>
        `;
        projectContainer.innerHTML += projetHTML;
    });
</script>
