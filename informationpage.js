var price = 10;
var isDragging = true;

function updatePrice(newValue) {
  price = newValue;
  document.querySelector(".price").textContent = "$" + price;
}

function moveButton(newValue) {
  var button = document.querySelector(".button");

  // Set button position based on value
  if (newValue >= 0 && newValue <= 25) {
    button.classList = "button value-1";
  } else if (newValue > 25 && newValue <= 50) {
    button.classList = "button value-2";
  } else if (newValue > 50 && newValue <= 75) {
    button.classList = "button value-3";
  } else {
    button.classList = "button value-4";
  }

  // Set button position based on value
  var tunnel = document.querySelector(".tunnel");
  var tunnelWidth = tunnel.offsetWidth;
  var buttonWidth = button.offsetWidth;
  var buttonLeft = newValue / 100 * (tunnelWidth - buttonWidth);
  button.style.left = buttonLeft + "px";
}

function handleMouseDown(event) {
  isDragging = true;
}

function handleMouseMove(event) {
  if (isDragging) {
    // Get mouse position relative to tunnel
    var tunnel = document.querySelector(".tunnel");
    var tunnelLeft = tunnel.getBoundingClientRect().left;
    var mouseX = event.clientX - tunnelLeft;

    // Calculate value based on mouse position
    var value = mouseX / tunnel.offsetWidth * 100;

    // Update price and button position
    updatePrice(Math.round(value));
    moveButton(value);
  }
}

function handleMouseUp(event) {
  isDragging = false;
}

var lastValue;
function animateMoveButton(newValue) {
  var valueDiff = Math.abs(newValue - lastValue);
  var moveStep = valueDiff / 10;

  function step() {
    if (lastValue < newValue) {
      lastValue = Math.min(newValue, lastValue + moveStep);
      moveButton(lastValue);
    } else if (lastValue > newValue) {
      lastValue = Math.max(newValue, lastValue - moveStep);
      moveButton(lastValue);
    }
    if (lastValue !== newValue) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Add event listeners
var button = document.querySelector(".button");
button.addEventListener("mousedown", handleMouseDown);
button.addEventListener("mousemove", handleMouseMove);
button.addEventListener("mouseup", handleMouseUp);

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);

// Initial update
updatePrice(price);
moveButton(0);
lastValue = 0;

// Update button position every animation frame
function update() {
  if (!isDragging) {
    animateMoveButton(price);
  }
  requestAnimationFrame(update);
}
update();

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