const Index = require('../Models/index')
const Add = async () => {
    const object = await Index.create({full_name:"Someone"})
    return object
}
const Get = async () => {
    const list = await Index.findAll()
    return list
}
module.exports = {
    Add,Get
}