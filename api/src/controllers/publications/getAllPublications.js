const { publication } = require("../../db")

const getAllPublications = async (req, res) => {
    try {
        const allPublications = await publication.findAll({})
        res.status(200).send(allPublications)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getAllPublications