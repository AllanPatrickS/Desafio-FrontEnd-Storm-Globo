module.exports.create = function (obj) {
    return obj.save().then(item => {
        return {
            message: "Encontro criado com sucesso",
            item
        };
    }).catch(err => {
        return {
            err,
            message: "Algo deu errado por favor tente novamente"
        };
    });
};

module.exports.get = function (model) {
    return model.findOne().sort('date').exec().then(item => {
        if (item != null) {
            let date = new Date(item.date);
            const month = ["Janeiro", "Fevereiro", "Maro", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            date = `${date.getDate()} de ${month[date.getMonth()]} de ${date.getFullYear()} as ${date.getHours()}:${date.getMinutes()}`;
            return {
                message: "Sucesso",
                item: {
                    _id: item._id,
                    date,
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt,
                    __v: item.__v
                }
            }
        } else {
            return {
                message: "Sucesso",
                item: null
            }

        };
    }).catch(err => {
        return {
            err,
            message: "Algo deu errado por favor tente novamente"
        };
    });
};

module.exports.update = function (model, obj, id) {
    return model.updateOne({ '_id': id }, obj).exec().then(item => {
        if (item.nModified > 0) {
            return {
                message: "Encontro atualizado com sucesso",
                item
            };
        } else {
            return {
                message: "Encontro não encontrado",
                item
            };
        }
    }).catch(err => {
        return {
            err,
            message: "Algo deu errado por favor tente novamente"
        };
    });
};

module.exports.delete = function (model, id) {
    return model.findById({ '_id': id }).deleteOne().exec().then(item => {
        if (item.deletedCount > 0) {
            return {
                message: "Encontro removido com sucesso",
                item
            };
        } else {
            return {
                message: "Encontro não encontrado",
                item
            };
        }
    }).catch(err => {
        return {
            err,
            message: "Algo deu errado por favor tente novamente"
        };
    });
};