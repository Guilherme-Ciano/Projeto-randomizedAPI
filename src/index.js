const Express = require("express");
const CORS = require("cors");
const app = Express();

const port = process.env.PORT || 3000;

app.use(CORS());

app.use("/random-numbers", require("./routes/randomNumbers"));
app.use("/random-projects", require("./routes/randomProjects"));

app.listen(port, () => {
  console.log(`Listening on port ${port}\nhttp://localhost:${port}`);
});
