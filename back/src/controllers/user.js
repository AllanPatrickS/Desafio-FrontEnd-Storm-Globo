function datefy(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

module.exports.create = function (obj) {
    return obj.save().then(result => {
        return {
            message: "Usuario criado com sucesso",
            result
        };
    }).catch(err => {
        return {
            err,
            message: "Algo deu errado por favor tente novamente"
        };
    });
};

module.exports.getLastUpdate = function (model) {
    return model.findOne({}, 'updatedAt').sort([['updatedAt', -1]]).exec().then(result => {
        if (result != null) {
            let date = new Date(result.updatedAt);
            date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} as ${date.getHours()}:${date.getMinutes()}`;
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

module.exports.get = function (model, page, filter) {
    const limit = 6;
    let query = {};
    if (filter && filter.length > 0) {
        query = {
            $text: { $search: filter }
        }
    }
    return model.find(query).sort('updatedAt').skip(page * limit).limit(limit).exec().then(result => {
        if (result != null) {
            return model.countDocuments(query).exec().then(count => {
                const itens = result.map(function (item) {
                    return {
                        _id: item._id,
                        username: item.username,
                        email: item.email,
                        rules: item.rules,
                        status: item.status,
                        createdAt: datefy(new Date(item.createdAt)),
                        updatedAt: datefy(new Date(item.updatedAt)),
                        __v: item.__v
                    };
                });
                return {
                    message: "Sucesso",
                    result: {
                        users: itens,
                        page,
                        pageSize: itens.length,
                        total: count,
                        limit
                    }
                }
            }).catch(err => {
                return {
                    err,
                    message: "Algo deu errado por favor tente novamente"
                };
            });
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
    return model.updateOne({ "_id": id }, obj).exec().then(result => {
        if (result.nModified > 0) {
            return {
                message: "Usuario atualizado com sucesso",
                result
            };
        } else {
            return {
                message: "Usuario não encontrado",
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
    id = id.split(',');
    return model.deleteMany({ _id: id }).exec().then(result => {
        if (result.deletedCount > 0) {
            return {
                message: "Usuario removido com sucesso",
                result
            };
        } else {
            return {
                message: "Usuario não encontrado",
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