const Index = require('../Models/index')
const Add = async () => {
    const object = await Index.create({full_name:"Some questions"})
    return object
}
const Get = async () => {
    const list = await Index.findAll()
    return list
}
module.exports = {
    Add,Get
}