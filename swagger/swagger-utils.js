const getSwaggerComponents = (collection, options=[]) => {
    return collection.filter(item => options.includes(item.name))
}

module.exports = {getSwaggerComponents}