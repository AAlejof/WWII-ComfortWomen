const { contact } = require("../../db")

const getAllContact = async (req, res) => {
    try {
        const allContact = await contact.findAll({})
        res.status(200).send(allContact)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getAllContact