const randomProductsRouter = require("express").Router();
const randomProducts = require("../utils/products.json");

randomProductsRouter.get("/", (req, res) => {
    res.send(randomProducts);
});

randomProductsRouter.get("/masculino", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[1]);
});

randomProductsRouter.get("/feminino", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[0]);
});

randomProductsRouter.get("/masculino-infantil", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[3]);
});

randomProductsRouter.get("/feminino-infantil", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[2]);
});

// rotas específicas para a sessão feminina
randomProductsRouter.get("/feminino/vestidos", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[0].categorias[0].categorias[0]);
});

randomProductsRouter.get("/feminino/camisetas", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[0].categorias[0].categorias[1]);
});

randomProductsRouter.get("/feminino/calcas", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[0].categorias[0].categorias[2]);
});

randomProductsRouter.get("/feminino/saias", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[0].categorias[0].categorias[3]);
});

randomProductsRouter.get("/feminino/joias", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[0].categorias[1]);
});

randomProductsRouter.get("/feminino/bolsas", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[0].categorias[3]);
});

randomProductsRouter.get("/feminino/sapatos", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[0].categorias[4]);
});

// rotas específicas para a sessão feminina infantil
randomProductsRouter.get("/feminino-infantil/camisetas", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[2].categorias[0].categorias[0]);
});

randomProductsRouter.get("/feminino-infantil/acessorios", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[2].categorias[0].categorias[1]);
});

randomProductsRouter.get("/feminino-infantil/sapatos", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[2].categorias[0].categorias[2]);
});

// rotas específicas para a sessão masculina
randomProductsRouter.get("/masculino/camisetas", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[1].categorias[0].categorias[0]);
});

randomProductsRouter.get("/masculino/calcas", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[1].categorias[0].categorias[1]);
});

randomProductsRouter.get("/masculino/shorts", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[1].categorias[0].categorias[2]);
});

randomProductsRouter.get("/masculino/acessorios", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[1].categorias[2]);
});

randomProductsRouter.get("/masculino/sapatos", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[1].categorias[3]);
});

// rotas específicas para a sessão masculina infantil
randomProductsRouter.get("/masculino-infantil/camisetas", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[3].categorias[0].categorias[0]);
});

randomProductsRouter.get("/masculino-infantil/acessorios", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[3].categorias[0].categorias[1]);
});

randomProductsRouter.get("/masculino-infantil/sapatos", (req, res) => {
    res.send(randomProducts.catalogo.roupas.categorias[3].categorias[0].categorias[2]);
});


module.exports = randomProductsRouter;
