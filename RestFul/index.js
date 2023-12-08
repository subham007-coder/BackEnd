const express = require("express");
const { v4: uuidv4 } = require('uuid'); // require korlam uuid ke random id pawar jonno; 

const app = express();
const path = require("path");
const { log } = require("console");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

let posts = [
    {
        id: uuidv4(),
        username: "Subham Das",
        content: "With supporting text below as a natural lead-in to additional content."
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.get("/posts/edit", (req, res) => {
    res.render("update.ejs");
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);

    let newContent = req.body.content;
    post.content = newContent;
    console.log(post);
});


const port = 8080;

app.listen(port, () => {
    console.log(`listen the port ${port}`);
});