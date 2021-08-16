fetch("https://api.github.com/users/MystPi/repos").then(data => data.json()).then(data => {
  document.getElementById("progress-repos").style.width = data.length / 20 * 100 + "%";
  document.getElementById("number").innerHTML = data.length + " / 20";
});