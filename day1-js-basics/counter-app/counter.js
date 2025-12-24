let count = 0;

function inc() {
  count++;
  document.getElementById("count").innerText = count;
}

function dec() {
  count--;
  document.getElementById("count").innerText = count;
}

function reset() {
  count = 0;
  document.getElementById("count").innerText = count;
}
