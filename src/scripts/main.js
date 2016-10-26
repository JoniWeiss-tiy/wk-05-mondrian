function changeColors() {
  document.getElementsByClassName("color")[0].style.backgroundColor = selectColor();
  document.getElementsByClassName("color")[1].style.backgroundColor = selectColor();
  document.getElementsByClassName("color")[2].style.backgroundColor = selectColor();
  return true;
}

function selectColor() {
  var colors = ['#d7151e', '#09488a', '#e9d359', 'eeeeee'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  return random_color;
}

document.querySelector("#change-colors").onclick = changeColors;
