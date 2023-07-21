const {Add, Get} = require('../Services/index.services.js')

const AddEntry = async (req, res) => {
    try {
        const response = await Add()
        return res.send(response)
    } catch (error) {
        return res.status(400).json({
            success: true,
            message:"Something wrong on our side",
            error:error?.message
        })
    }
}
const GetData = async(req, res) => {

    try {
        const response = await Get()
        return res.send(response)
    } catch (error) {
        return res.send(error.message)
    }
}
module.exports = {
    AddEntry,GetData
}