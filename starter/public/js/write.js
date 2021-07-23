const musicRef = firebase.database().ref();

const submitMusic = (userArtist,userTitle,userImage,userEmotion,userGenre,userSpotify) => {
    musicRef.push({
        artist:userArtist,
        title: userTitle,
        image:userImage,
        emotion:userEmotion,
        genre: userGenre,
        spotify: userSpotify
    });
}
 const btn = document.querySelector("#btn");
 btn.addEventListener("click", (e) => {
    const artistInput = document.querySelector("#artist-input").value;
    const titleInput = document.querySelector("#song-input").value;
    const imageInput = document.querySelector("#img-input").value;
    const emotionInput = document.querySelector("#emotion-input").value;
    const genreInput = document.querySelector("#genre-input").value;
    const spotifyInput = document.querySelector("#link-input").value;
    submitMusic(artistInput,titleInput,imageInput,emotionInput,genreInput,spotifyInput);
 });