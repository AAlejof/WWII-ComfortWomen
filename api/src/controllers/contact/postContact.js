const { contact } = require("../../db")


const postContact = async (req, res) => {
    try {
        const {
            url,
            name,
            review,
            rate
        } = req.body
        const newContact = await contact.create({
            url,
            name,
            review,
            rate
        })

        res.status(200).send(newContact)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = postContact;