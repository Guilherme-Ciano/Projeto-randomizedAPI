const Express = require("express");
const CORS = require("cors");
const app = Express();

const port = process.env.PORT || 3000;

app.use(CORS());

app.use("/random-numbers", require("./routes/randomNumbers"));
app.use("/random-projects", require("./routes/randomProjects"));

app.get("/", (req, res) => {
  res.send("Wrong path my boi, try /random-numbers or /random-projects");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}\nhttp://localhost:${port}`);
});
