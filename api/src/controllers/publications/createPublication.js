const { publication } = require("../../db")

const createPublication = async (req, res) => {
    try {
        const {
            title,
            content,
            image,
            tag,
            author_name
        } = req.body

        console.log(req.body);

        const newPublication = await publication.create({
            title,
            content,
            image,
            tag,
            author_name
        })

        res.status(200).send(newPublication)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = createPublication