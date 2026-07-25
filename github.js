const username = "YOUR_GITHUB_USERNAME";

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
.then(response => response.json())
.then(repos => {

const container = document.getElementById("repoContainer");

repos.forEach(repo => {

container.innerHTML += `

<div class="glass repo-card">

<h2>${repo.name}</h2>

<p>${repo.description || "No description available."}</p>

<div class="repo-info">

⭐ ${repo.stargazers_count}

🍴 ${repo.forks_count}

</div>

<a href="${repo.html_url}" target="_blank" class="btn">

View Repository

</a>

</div>

`;

});

});const username = "Maddy67bh";