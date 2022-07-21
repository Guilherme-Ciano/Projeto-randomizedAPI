const randomNumbersRouter = require("express").Router();

randomNumbersRouter.get("/", (req, res) => {
  res.send(`${Math.floor(Math.random() * 100) + 1}`);
});

module.exports = randomNumbersRouter;
