const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

let listitems =[];
let worklist =[];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    let today = new Date();
    let currentD = today.getDay();
     let option = {
        weekday: "long",
        day: "numeric",
        month: "long"
     }
     let day = today.toLocaleDateString(currentD,option,("en-US"));
    res.render("list", {listTitle: day, listitem: listitems});
});
app.post("/", (req, res)=>{
    let item = req.body.todolist;
    if(req.body.list === "Work"){
        worklist.push(item);
        res.redirect("/work");
    }else {
        listitems.push(item);
        res.redirect("/");
    }
});

app.get("/work", (req, res)=>{
    res.render("list", {listTitle: "Work List", listitem: worklist});
});

const respon=app.listen(3000, function(){
    console.log("Server is running on port"+ respon.address());
});