const progressBarContainer = document.querySelector('.progress-bar-container');
const progressBar = document.querySelector('#progress-bar1');
const progress = document.querySelector('#progress-1');
const progressLabel = document.querySelector('#progress-label-1');
const progressBarValue = document.querySelector('#progress-bar-value-1');
progressBar.addEventListener('click', function(e) {
  const x = e.pageX - this.offsetLeft;
  const percent = x / this.offsetWidth * 100;
  progress.style.width = `${percent}%`;
  progressBarValue.value = percent;
  progressLabel.textContent = Math.round(percent);
});

const progressBarContainer2 = document.querySelector('.progress-bar-container');
const progressBar2 = document.querySelector('#progress-bar2');
const progress2 = document.querySelector('#progress-2');
const progressLabel2 = document.querySelector('#progress-label-2');
const progressBarValue2 = document.querySelector('#progress-bar-value-2');
progressBar2.addEventListener('click', function(e) {
  const x = e.pageX - this.offsetLeft;
  const percent = x / this.offsetWidth * 100;
  progress2.style.width = `${percent}%`;
  progressBarValue2.value = percent;
  progressLabel2.textContent = Math.round(percent);
});
const progressBarContainer3 = document.querySelector('.progress-bar-container');
const progressBar3 = document.querySelector('#progress-bar3');
const progress3 = document.querySelector('#progress-3');
const progressLabel3 = document.querySelector('#progress-label-3');
const progressBarValue3 = document.querySelector('#progress-bar-value-3');
progressBar3.addEventListener('click', function(e) {
  const x = e.pageX - this.offsetLeft;
  const percent = x / this.offsetWidth * 100;
  progress3.style.width = `${percent}%`;
  progressBarValue3.value = percent;
  progressLabel3.textContent = Math.round(percent);
});

const progressBarContainer4 = document.querySelector('.progress-bar-container');
const progressBar4 = document.querySelector('#progress-bar4');
const progress4 = document.querySelector('#progress-4');
const progressLabel4 = document.querySelector('#progress-label-4');
const progressBarValue4 = document.querySelector('#progress-bar-value-4');
progressBar4.addEventListener('click', function(e) {
  const x = e.pageX - this.offsetLeft;
  const percent = x / this.offsetWidth * 100;
  progress4.style.width = `${percent}%`;
  progressBarValue4.value = percent;
  progressLabel4.textContent = Math.round(percent);
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
  terminalBody.scrollTop = terminalBody.scrollHeight;
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





// Get the canvas element and its context
const canvas = document.querySelector('.chart');
const ctx = canvas.getContext('2d');

// Set the canvas width and height to match its CSS size
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Define the X and Y axis tick counts
const xAxisTicks = 10;
const yAxisTicks = 5;

// Define the maximum Y value for the chart
const maxYValue = 100;

// Define the time interval between data points (in seconds)
const timeInterval = 1;

// Define an array to store the memory usage data
const memoryUsageData = [];

// Function to generate random memory usage data
function generateMemoryUsageData() {
  const memoryUsage = Math.floor(Math.random() * 100);
  memoryUsageData.push(memoryUsage);
}

// Generate initial memory usage data
for (let i = 0; i < xAxisTicks; i++) {
  generateMemoryUsageData();
}

// Function to draw the X axis ticks and labels
function drawXAxis() {
  const tickSpacing = canvas.width / xAxisTicks;
  const labelSpacing = tickSpacing * 2;
  ctx.beginPath();
  for (let i = 0; i <= xAxisTicks; i++) {
    const x = tickSpacing * i;
    const label = `${i * timeInterval}s`;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 5);
    ctx.fillText(label, x - (labelSpacing / 2), 20);
  }
  ctx.stroke();
}

// Function to draw the Y axis ticks and labels
function drawYAxis() {
  const tickSpacing = canvas.height / yAxisTicks;
  const labelSpacing = tickSpacing * 2;
  ctx.beginPath();
  for (let i = 0; i <= yAxisTicks; i++) {
    const y = canvas.height - (tickSpacing * i);
    const label = `${(i / yAxisTicks * maxYValue).toFixed(0)}MB`;
    ctx.moveTo(0, y);
    ctx.lineTo(-5, y);
    ctx.fillText(label, -labelSpacing, y + 5);
    }
    ctx.stroke();
    }
    
    // Function to draw the performance chart
    function drawChart() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Generate new memory usage data
    generateMemoryUsageData();
    
    // Draw the X and Y axis
    drawXAxis();
    drawYAxis();
    
    // Draw the performance data
    const dataSpacing = canvas.width / (xAxisTicks - 1);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - (memoryUsageData[0] / maxYValue * canvas.height));
    for (let i = 1; i < xAxisTicks; i++) {
    const x = dataSpacing * i;
    const y = canvas.height - (memoryUsageData[i] / maxYValue * canvas.height);
    ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Remove old data points from the memory usage data array
    if (memoryUsageData.length > xAxisTicks) {
    memoryUsageData.shift();
    }
    }
    
    // Set the chart update interval
    setInterval(drawChart, timeInterval * 1000);