document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    const server = data.server;

    if (!server) return;

    //localStorage.setItem("server", server);

    await loadPlayer(server); //appel de la fonction après que le serveur sois lancé

});
// const server = localStorage.getItem("server");

// if (!server) {
//     alert("Serveur manquant");
//     window.location.href = "dashboard.html";
// }

//loadPlayer(server);

async function loadPlayer(server) {
    try {
        const baseUrl = server.startsWith("http")
            ? server
            : `http://${server}`;
//Requète HTTP (GET) vers PokeAPI pr récup des infos 

        const response = await fetch(`${baseUrl}/api/listPlayers`);

//On verif que la requète a réussi
        if (!response.ok) {
            //Throw lance une erreur qui sera capturée par le catch
            throw new Error("Erreur HTTP : " + response.status);
        }
//On extrait le JSON de la reponse
        const data = await response.json();
        console.log("Nom :", data.name);

        localStorage.setItem("Nom", data.name);
        localStorage.setItem("playerStats", JSON.stringify(data.stats));

    } catch (error) {
        console.error("Erreur lors du chargement :", error);
    }
}



// function loadPlayerStats(name) {
//     const playerStats = localStorage.getItem("playerStats");
// }
// function loadRanking() {
//     const ranking = localStorage.getItem("ranking");
// }