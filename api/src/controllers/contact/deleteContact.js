const { contact } = require("../../db")


const deleteContact = async (req, res) => {
    try {

        const { id } = req.params

        await contact.destroy({
            where: {
                id: id,
            }
        })

        res.status(200).send("Delete Succesfull")  
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = deleteContact