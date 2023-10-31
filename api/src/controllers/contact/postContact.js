const { contact } = require("../../db")


const postContact = async (req, res) => {
    try {
        const {
            author_name,
            tag,
            content,
            mail
        } = req.body
        const newContact = await contact.create({
            author_name,
            tag,
            content,
            mail
        })

        res.status(200).send(newContact)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = postContact;