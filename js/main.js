let title = document.querySelector(".title");
let boxes = document.querySelectorAll(".box");
let turn = "x";
let elements = [];

function game(id) {
  let box = document.getElementById(id);
  if (box.innerHTML == "" && turn == "x") {
    box.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o";
  } else if (box.innerHTML == "" && turn == "o") {
    box.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x";
  }
  winner();
}

function winner() {
  for (let i = 1; i < 10; i++) {
    elements[i] = document.getElementById("box" + i).innerHTML;
  }
  if (
    elements[1] == elements[2] &&
    elements[2] == elements[3] &&
    elements[1] != ""
  ) {
    end(1, 2, 3);
  } else if (
    elements[4] == elements[5] &&
    elements[5] == elements[6] &&
    elements[4] != ""
  ) {
    end(4, 5, 6);
  } else if (
    elements[7] == elements[8] &&
    elements[8] == elements[9] &&
    elements[7] != ""
  ) {
    end(7, 8, 9);
  } else if (
    elements[1] == elements[4] &&
    elements[4] == elements[7] &&
    elements[1] != ""
  ) {
    end(1, 4, 7);
  } else if (
    elements[2] == elements[5] &&
    elements[5] == elements[8] &&
    elements[2] != ""
  ) {
    end(2, 5, 8);
  } else if (
    elements[3] == elements[6] &&
    elements[6] == elements[9] &&
    elements[3] != ""
  ) {
    end(3, 6, 9);
  } else if (
    elements[1] == elements[5] &&
    elements[5] == elements[9] &&
    elements[1] != ""
  ) {
    end(1, 5, 9);
  } else if (
    elements[3] == elements[5] &&
    elements[5] == elements[7] &&
    elements[7] != ""
  ) {
    end(3, 5, 7);
  } else if (
    elements[1] != "" &&
    elements[2] != "" &&
    elements[3] != "" &&
    elements[4] != "" &&
    elements[5] != "" &&
    elements[6] != "" &&
    elements[7] != "" &&
    elements[8] != ""
  ) {
    title.innerHTML = `game is reload`;
    setInterval(() => {
      title.innerHTML += ".";
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 4000);
  }
}
function end(num1, num2, num3) {
  title.innerHTML = `${elements[num1]} winner`;
  document.getElementById("box" + num1).style.background = "black";
  document.getElementById("box" + num2).style.background = "black";
  document.getElementById("box" + num3).style.background = "black";
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 4000);
}
