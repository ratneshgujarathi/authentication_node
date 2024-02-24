let getSwaggerComponents = (collection, options = [], required = false) => {
    return required ? collection.filter(item => options.includes(item.name) && item.required == true) 
    : collection.filter(item => options.includes(item.name));
}

let postSwaggerComponents = (collection, name) => {
    return collection[name];
}

module.exports = { getSwaggerComponents, postSwaggerComponents }