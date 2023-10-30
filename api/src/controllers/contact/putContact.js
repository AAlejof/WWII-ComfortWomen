const { contact } = require("../../db")


const putContact = async (req, res) => {
    try {

        const { id } = req.params;
        
        const { 
            url,
            name,
            review,
            fav,
            rate
        } = req.body;
    
    
        await contact.update({
                url,
                name,
                review,
                fav,
                rate
            }, {
            where:{
                id: id
            }
        })

        res.status(200).send("Testimonial succesfully modificated")
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = putContact