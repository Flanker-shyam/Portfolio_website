const express = require("express");
const path = require("path");
const cors = require("cors");
const middlewares = require("./middleware");
const app = express();
const routes = require('./routes');
const getData = require('./github');

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(middlewares.setHeaders);
app.use('/github_api', routes);

app.get("/api", async(req, res) => {
    var data = await getData.fetchData('https://api.github.com/users/Flanker-shyam/repos');
    res.render('index', {data:data});
});

app.use("*", (req, res) => {
    res.status(404).json({
        success: "false",
        message: "Page not found",
        error: {
            statusCode: 404,
            message: "You reached a route that is not defined on this server",
        },
    });
});

app.listen(port, (err) => {
    if (err) {
        console.log("Error occurred during connection", err);
    }
    else {
        console.log("Connection established successfully at:", port);
    }
})