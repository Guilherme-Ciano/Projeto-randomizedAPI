const randomProjectsRouter = require("express").Router();
const randomProjects = require("../utils/projects.json");

randomProjectsRouter.get("/", (req, res) => {
  const randomProject =
    randomProjects[Math.floor(Math.random() * randomProjects.length)];
  res.send(randomProject);
});

module.exports = randomProjectsRouter;
