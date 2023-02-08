let gitButton = document.getElementById("gitData");


gitButton.onclick = function () {
    location.assign('http://localhost:3000/getData');
}

gitButton.onmouseover = function()
{
    gitButton.innerHTML = "My Work <span style='font-size:25px; display: inline;'>&#8608;</span>"
}

gitButton.onmouseleave = function()
{
    gitButton.innerHTML = "My Work <span style='font-size:25px; display: inline;'>&#8609;</span>"
}