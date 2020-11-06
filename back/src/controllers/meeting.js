module.exports.create = function (obj) {
    return obj.save().then(result => {
        return {
            message: "Encontro criado com sucesso",
            result
        };
    }).catch(err => {
        return {
            err,
            message: "Algo deu errado por favor tente novamente"
        };
    });
};

module.exports.get = function (model) {
    return model.findOne({}, 'date').sort('date').exec().then(result => {
        if (result != null) {
            let date = new Date(result.date);
            const month = ["Janeiro", "Fevereiro", "Maro", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            date = `${date.getDate()} de ${month[date.getMonth()]} de ${date.getFullYear()} as ${date.getHours()}:${date.getMinutes()}`;
            return {
                message: "Sucesso",
                result: date
            }
        } else {
            return {
                message: "Sucesso",
                result: null
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
    return model.updateOne({ '_id': id }, obj).exec().then(result => {
        if (result.nModified > 0) {
            return {
                message: "Encontro atualizado com sucesso",
                result
            };
        } else {
            return {
                message: "Encontro não encontrado",
                result
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
    return model.findById({ '_id': id }).deleteOne().exec().then(result => {
        if (result.deletedCount > 0) {
            return {
                message: "Encontro removido com sucesso",
                result
            };
        } else {
            return {
                message: "Encontro não encontrado",
                result
            };
        }
    }).catch(err => {
        return {
            err,
            message: "Algo deu errado por favor tente novamente"
        };
    });
};