const { Router } = require('express');
const router = Router();

const publications = require('./publications.router');
const contact = require('./contact.router')

router.use('/publications', publications);
router.use('/contact', contact)

module.exports = router;