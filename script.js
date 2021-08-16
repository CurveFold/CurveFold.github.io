fetch("https://api.github.com/users/MystPi/repos").then(data => data.json()).then(data => {
  document.getElementById("progress-repos").style.width = data.length / 20 * 100 + "%";
  document.getElementById("repo-number").innerHTML = data.length + " / 20";
  let list = document.getElementById("repos");
  for (let i = 0; i < data.length; i++) {
    list.innerHTML += `<li><a href="${data[i].html_url}">${data[i].name}</a></li>`;
  }
  fetch("https://api.github.com/users/MystPi").then(about => about.json()).then(about => {
    document.getElementById("about").innerHTML = about.bio;
  });
});