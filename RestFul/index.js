const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("this is home")
})


const port = 8080;

app.listen(port, () => {
    console.log(`listen the port ${port}`);
});