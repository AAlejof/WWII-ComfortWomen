const { contact } = require("../../db")


const putContact = async (req, res) => {
    try {

        const { id } = req.params;
        
        const { 
            author_name,
            tag,
            content,
            mail,
        } = req.body;
    
    
        await contact.update({
            author_name,
            tag,
            content,
            mail,
            }, {
            where:{
                id: id
            }
        })

        res.status(200).send("Message succesfully modificated")
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = putContact