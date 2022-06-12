// DOM Objects
const video = document.getElementById("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");

// Play and Pause Video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    };
};

// Update the play/pause Icon
function updatePlayIcon(){
    if (video.paused) {
        play.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
    } else {
        play.innerHTML = "<i class='fa fa-play fa-2x'></i>"
    }
};

// Update progress and timestamp
function updateProgress() {
    // Gives us the slide progress bar
    progress.value = (video.currentTime / video.duration) * 100;

    // Get the min
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = "0" + String(mins);
    };

     // Get the secs
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = "0" + String(secs);
    };

    timestamp.innerHTML = `${mins}:${secs}`;
};

// Set Video time to progress
function setVideoProgress() {
    // Add + to make sure its a number
    video.currentTime = (+progress.value * video.duration) / 100;
};

// Stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
};

// Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

// Range Inputs have changeEvents
progress.addEventListener("change", setVideoProgress)