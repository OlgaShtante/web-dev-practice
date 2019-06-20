// Function to clear previously selected background colour:
function resetColour() {
  document.body.style.backgroundColor = "";
  document.body.className = "";
  document.body.style.removeProperty("--myColor");
}

// JS for the 1st task:
function changeBgColorImplementation1() {
  let c1 = document.querySelector(".implementation-1");
  let bgc1 = c1.value;
  resetColour();

  document.body.style.backgroundColor = bgc1;
}

// JS for the 2nd task:
function changeBgColorImplementation2() {
  let c2 = document.querySelector(".implementation-2");
  let bgc2 = c2.value;
  resetColour();

  document.body.style.backgroundColor = bgc2;
}

// JS for the 3rd task:
function f3() {
  let c3 = document.querySelector(".implementation-3");
  let bgc3 = c3.value;
  resetColour();

  document.body.className = bgc3;
  if (bgc3 != "Select a colour") {
    document.body.className = bgc3;
  } else {
    alert("Try again :)");
  }
}

// JS for the 4th task:
function f4() {
  let c4 = document.querySelector(".color4");
  let bgc4 = c4.value;
  resetColour();

  document.body.style.setProperty("--main-color", bgc4);
}

// JS for the 5th task:
function f5(selectElement) {
  let bgc5 = selectElement.value;
  resetColour();

  document.body.style.setProperty("--main-color", bgc5);
}
