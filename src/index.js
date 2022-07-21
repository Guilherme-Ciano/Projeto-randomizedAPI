const Express = require("express");
const CORS = require("cors");
const app = Express();

app.use(CORS());

app.use("/random-numbers", require("./routes/randomNumbers"));
app.use("/random-projects", require("./routes/randomProjects"));

app.get("/", (req, res) => {
  res.send("Wrong path my boi, try /random-numbers or /random-projects");
});

app.listen(8080, () => {
  console.log(`Listening on port 8080\nhttp://localhost:8080`);
});
