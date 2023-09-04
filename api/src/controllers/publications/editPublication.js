const { publication } = require("../../db")


const editPublication = async (req, res) => {
    try {

        const { id } = req.params;
        
        const { 
            authorId,
            title,
            content,
            image,
            tag,
            author_name
        } = req.body;
    
    
        await publication.update({
                authorId,
                title,
                content,
                image,
                tag,
                author_name
            }, {
            where:{
                id: id
            }
        })
    
        res.status(200).send("Publication succesfully modificated")
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = editPublication