
let gitButton = document.getElementById("gitData");

gitButton.onclick = function () {
    var img = document.getElementById("funny");
    img.src = "../images/laughingface.png";
    location.assign('http://localhost:3000/getData');
}

gitButton.onmouseover = function () {
    gitButton.innerHTML = "My Work <span style='font-size:25px; display: inline;'>&#8608;</span>"
}

gitButton.onmouseleave = function () {
    gitButton.innerHTML = "My Work <span style='font-size:25px; display: inline;'>&#8609;</span>"
}

console.log(data);

let cardData =
    `<div class="card-container" style="display:flex">
    <% for (var i=0; i<data.length; i++ ) { %>
        <div class="card">
            <img src="../images/Opa.png" />
            <div class="name">
                <%=data[i].name%>
            </div>
            <div class="bar">
                <div class="filledbar"></div>
            </div>
            <div class="details">
                <%=data[i].description%>
            </div>
            <div class="tools">
                <sapn>Tools use</sapn>
                <br class="tools-name">
                <% for(topics of data[i].topics){ %>
                    <p class="lang">
                        <%=topics%>
                    </p>
                    <%}%>
            </div>
            <div class="fs">
                <div class="fork">
                    <img src="../images/fork.png" />
                    <span>
                        <%=data[i].forks%>
                    </span>
                </div>
                <div class="fork">
                    <img src="../images/star.png" />
                    <span>
                        <%=data[i].stargazers_count%>
                    </span>
                </div>
            </div>
        </div>
        <% } %>
</div>`
