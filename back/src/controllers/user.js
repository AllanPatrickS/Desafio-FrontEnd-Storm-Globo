module.exports.create = function (obj) {
    return obj.save().then(item => {
        return {
            message: "Usuario criado com sucesso",
            item
        };
    }).catch(err => {
        return {
            err,
            message: "Algo deu errado por favor tente novamente"
        };
    });
};

module.exports.getAll = function (model) {
    return model.find().limit(10).exec().then(item => {
        return {
            message: "Sucesso",
            item
        };
    }).catch(err => {
        return {
            err,
            message: "Algo deu errado por favor tente novamente"
        };
    });
};

module.exports.get = function (model, query) {
    return model.find({$text: {$search: query}}).limit(10).exec().then(item => {
        return {
            message: "Sucesso",
            item
        };
    }).catch(err => {
        return {
            err,
            message: "Algo deu errado por favor tente novamente"
        };
    });
};

module.exports.update = function (model, obj, id) {
    return model.updateOne({ "_id": id }, obj).exec().then(item => {
        if (item.nModified > 0) {
            return {
                message: "Usuario atualizado com sucesso",
                item
            };
        } else {
            return {
                message: "Usuario não encontrado",
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
    return model.findByIdAndDelete(id).exec().then(item => {
        if (item.deletedCount > 0) {
            return {
                message: "Usuario removido com sucesso",
                item
            };
        } else {
            return {
                message: "Usuario não encontrado",
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