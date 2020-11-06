const controller = require('../controllers/user'),
    model = require('../models/user');

module.exports = function (app) {
    app.post('/user', async function (req, res) {
        const obj = new model(req.body);
        const result = await controller.create(obj);

        if (result.message === "Algo deu errado por favor tente novamente") {
            res.status(400)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        } else {
            res.status(200)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        }
    });

    app.get('/user/lastupdate', async function (_, res) {
        const result = await controller.getLastUpdate(model);

        if (result.message === "Algo deu errado por favor tente novamente") {
            res.status(400)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        }else {
            res.status(200)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        }
    });

    app.get(['/user/:page', '/user/:page/:query'], async function (req, res) {
        const query = req.params.query;
        const page = req.params.page;

        const result = await controller.get(model, page, query);

        if (result.message === "Algo deu errado por favor tente novamente") {
            res.status(400)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        }else {
            res.status(200)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        }
    });

    app.patch('/user/:id', async function (req, res) {
        const id = req.params.id;

        const result = await controller.update(model, req.body, id);

        if (result.message === "Algo deu errado por favor tente novamente") {
            res.status(400)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        } else if(result.message === "Usuario não encontrado"){
            res.status(404)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        } else {
            res.status(200)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        }
    });

    app.delete('/user/:id', async function (req, res) {
        const id = req.params.id;

        const result = await controller.delete(model, id);


        if (result.message === "Algo deu errado por favor tente novamente") {
            res.status(400)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        } else if(result.message === "Usuario não encontrado"){
            res.status(404)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        } else {
            res.status(200)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        }
    });
};