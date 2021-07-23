console.log("Script Running!");

const musicRef = firebase.database().ref();

const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    const userGenreGuess = document.querySelector("#genre").value;
    const userEmotionGuess = document.querySelector("#emotion").value;
    musicRef.on("value",(snapshot) => {
        const data = snapshot.val();
        for (let key in data) {
            if (data[key].genre == userGenreGuess && data[key].emotion == userEmotionGuess) {
                display(data[key]);
            }
        }
    });
});

const display = (musicObject) => {
    console.log(musicObject);
    document.querySelector("#card").classList.remove("hidden");
    const titleDiv = document.querySelector("#title");
    titleDiv.innerHTML = musicObject.title;
    const linkDiv = document.querySelector("#link");
    linkDiv.href = musicObject.spotify;
    const artistDiv = document.querySelector("#artist");
    artistDiv.innerHTML = musicObject.artist;
    const image = document.querySelector("#image");
    image.src = musicObject.image;

}
/**musicRef.on("value",(snapshot) => {
        const data = snapshot.val();
        for (let key in data) {
            if (data[key].genre == "rap" && data[key].emotion == "upbeat") {
                console.log(data[key]);
            }
        }
    });
**/