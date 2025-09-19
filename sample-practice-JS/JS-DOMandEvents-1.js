// Make a wanted poster for plankton for stealing the krabby recipe. 
// the poster should consist of ""Plankton" Text, "Plankton" image and "WANTED" text do it with Javascript DOM.
window.onload = function() {
    var posterDiv = document.querySelector("#posterPlankton");
    posterDiv.style.width = "300px";
    posterDiv.style.textAlign = "center";
    posterDiv.style.background = "black";
    posterDiv.style.padding = "2px 0";

    var titlePoster = document.querySelector("h1");
    titlePoster.textContent = "WANTED";
    titlePoster.style.color = "red";

    var imagePlankton = document.querySelector("img");
    imagePlankton.src = "https://th.bing.com/th/id/R.6f2296820dd1dfdce173dd681766534f?rik=lcfQiaui9MpxCg&riu=http%3a%2f%2fimages.wikia.com%2fspongebob%2fimages%2f6%2f66%2fPlankton-spongebob.jpg&ehk=LrUiVmGeLazbtJaSFhCQPLCp72g%2f%2fqEwBZVjgNz8NBw%3d&risl=&pid=ImgRaw&r=0";
    imagePlankton.style.width = "200px";

    var textContentPoster = document.querySelector("h2");
    textContentPoster.textContent = "PLANKTON";
    textContentPoster.style.color = "green";
}