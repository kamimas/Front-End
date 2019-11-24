document.addEventListener("keydown", logKey);
document.addEventListener("keyup", logkey);

var toggleForW = 0;

function logKey(e) {
  console.log(e.key.toUpperCase());

  if (e.key.toUpperCase() == "W" && toggleForW == 0) {
    document.getElementById("keyW").className = "newClass";
    toggleForW = 1;
  }
  elif (e.key.toUpperCase() == "W" && toggleForW == 1)
}
