const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

let posts = [
    {
        id: "1a",
        username: "Subham Das",
        content: "With supporting text below as a natural lead-in to additional content."
    },
    {
        id: "2b",
        username: "Adrija Pal",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, commodi!"
    }
];


app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

const port = 8080;

app.listen(port, () => {
    console.log(`listen the port ${port}`);
});