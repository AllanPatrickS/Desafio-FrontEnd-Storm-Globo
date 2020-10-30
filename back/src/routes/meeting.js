const controller = require('../controllers/meeting'),
    model = require('../models/meeting');

module.exports = function (app) {
    app.post('/meeting', async function (req, res) {
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

    app.get('/meeting', async function (req, res) {
        const result = await controller.get(model);

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

    app.patch('/meeting/:id', async function (req, res) {
        const id = req.params.id;

        const result = await controller.update(model, req.body, id);

        if (result.message === "Algo deu errado por favor tente novamente") {
            res.status(400)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        } else if (result.message === "Encontro não encontrado") {
            res.status(403)
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

    app.delete('/meeting/:id', async function (req, res) {
        const id = req.params.id;

        const result = await controller.delete(model, id);


        if (result.message === "Algo deu errado por favor tente novamente") {
            res.status(400)
                .set("Content-Type", "application/json")
                .send(result)
                .end();
        } else if(result.message === "Encontro não encontrado"){
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
}