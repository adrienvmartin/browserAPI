const apiURL = "https://swapi.co/api/films/";
console.log("pre-fetch");
fetch(apiURL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log("in data");
    data.results.forEach(element => {
        let contentDiv = document.getElementById("content");
        let nextDiv = document.createElement("div");
        nextDiv.innerHTML = "Title: " + element.title + "<br> episode_id: " + element.episode_id + "<br> release_date: " + element.release_date;
        contentDiv.appendChild(nextDiv);
    })
});