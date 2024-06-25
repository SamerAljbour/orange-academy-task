let videoContainer = document.getElementById("container");
let search = document.getElementById("searchButton");
search.addEventListener("click", () => {
    videoContainer.textContent = ""
    let input = document.getElementById("searchStyle").value
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input}&key=AIzaSyCf-zK2wWIBHVlSvXZRfpYHYjzcW7Mqn0U`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.items.length; i++) {
                createVideo(data.items[i])
            }
        }).catch(err => {
            console.log("Error: " + err);
        });
});

function createVideo(videoData) {
    let newVideo = document.createElement("div");
    newVideo.className = "card";
    newVideo.innerHTML = `
        <a href="https://www.youtube.com/watch?v=${videoData.id.videoId}" target="_blank">
            <img src="${videoData.snippet.thumbnails.default.url}" alt="" class="youtubeImage" width="100px" height="100px" />
        </a>
        <p class="imageDesc">${videoData.snippet.title}</p>
        `;
    videoContainer.appendChild(newVideo);
}