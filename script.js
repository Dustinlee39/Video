
// Get video, canvas, and button elements
const video = document.getElementById('sourceVideo');
const canvas = document.getElementById('videoCanvas');
const ctx = canvas.getContext('2d');
const button = document.getElementById('startButton');

// Set up the canvas once the user interacts with the button
function startVideoPlayback() {
    // Hide the button and show the canvas
    button.style.display = 'none';
    canvas.style.display = 'block';

    // Set canvas dimensions to match the video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Play the video and start drawing on the canvas
    video.play();
    drawVideo();
}

// Function to draw the video on the canvas
function drawVideo() {
    if (!video.paused && !video.ended) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(drawVideo); // Recursive call for continuous rendering
    }
}

// Add event listener to the button for user interaction
button.addEventListener('click', startVideoPlayback);
