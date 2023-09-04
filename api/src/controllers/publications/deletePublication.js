const { publication } = require("../../db")


const deletePublication = async (req, res) => {
    try {
        const { id } = req.params;
        await publication.destroy({
            where: {
                id: id,
            }
        })
        res.status(200).send("Delete Succesfull")  
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = deletePublication