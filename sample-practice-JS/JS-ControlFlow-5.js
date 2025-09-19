// You are making a function for a video player, for every loop a second will be incremented, 
// when the duration has reached video's end duration your function will show a text "Video ended, thank you for watching!", use for loop.
function videoPlayer(durationVideos = 0) {
    for (var s = 0; s <= durationVideos; s++) {
        if (s === durationVideos) {
            console.log("Video ended, thank you for watching!"); 
        }
    }
}
videoPlayer(60);