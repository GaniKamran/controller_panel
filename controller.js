const progressBarContainer = document.querySelector('.progress-bar-container');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const progressLabel = document.querySelector('#progress-label');
const progressBarValue = document.querySelector('#progress-bar-value');

progressBar.addEventListener('click', function(e) {
  const x = e.pageX - this.offsetLeft;
  const percent = x / this.offsetWidth * 100;
  progress.style.width = `${percent}%`;
  progressBarValue.value = percent;
  progressLabel.textContent = Math.round(percent);
});




const terminalInput = document.getElementById("terminal-input");
const terminalBody = document.getElementById("terminal-body");

// Execute the command entered in the terminal
function executeCommand() {
  const command = terminalInput.value;
  terminalInput.value = "";

  // Display the command in the terminal body
  const commandLine = document.createElement("p");
  commandLine.textContent = `> ${command}`;
  terminalBody.appendChild(commandLine);

  // Execute the command and display the output in the terminal body
  // Here is an example command that just outputs a message
  const output = document.createElement("p");
  output.textContent = "Hello, world!";
  terminalBody.appendChild(output);
}

// Listen for Enter key press to execute the command
terminalInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    executeCommand();
  }
});
const video = document.getElementById('video-stream');
const altitudeLabel = document.getElementById('altitude');
const speedLabel = document.getElementById('speed');
const directionLabel = document.getElementById('direction');
const playPauseButton = document.getElementById('play-pause-button');
const stopButton = document.getElementById('stop-button');

// Add event listeners to buttons
playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = 'Pause';
  } else {
    video.pause();
    playPauseButton.textContent = 'Play';
  }
});

stopButton.addEventListener('click', () => {
  video.currentTime = 0;
  video.pause();
  playPauseButton.textContent = 'Play';
});

// Update label values on video time update
video.addEventListener('timeupdate', () => {
  altitudeLabel.textContent = `Altitude: ${video.currentTime} m`;
  speedLabel.textContent = `Speed: ${Math.floor(video.currentTime * 3.6)} km/h`;
  directionLabel.textContent = `Direction: ${Math.random() < 0.5 ? 'N' : 'S'}`;
});