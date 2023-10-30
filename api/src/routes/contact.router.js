const { Router } = require("express")

const {
    getAllContact,
    deleteContact,
    postContact,
    putContact,
    restoreContact,
    getSoftDeletedContact
} = require("../controllers/index")

const router = Router()

router.get("/", getAllContact)
router.post("/", postContact)
router.delete('/:id', deleteContact)
router.put('/:id', putContact)

router.put('/restore/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await restoreContact({ id });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.get('/softDeleted', async (req, res) => {
    try {
      const deletedTestimonials = await getSoftDeletedContact();
      res.status(200).json(deletedContact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router