var express = require("express");
var app = express();
var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

app.get("/", function(req, res) {
  res.render("index.html");
});

app.get("/about", function(req, res) {
  res.render("aboutme.html");
});

app.get("/contact", function(req, res) {
  res.render("contactme.html");
});

app.get("/experience", function(req, res) {
  res.render("experince.html");
});

app.get("/project", function(req, res) {
  res.render("projects.html");
});

app.get("/service", function(req, res) {
  res.render("services.html");
});

app.listen(port);
