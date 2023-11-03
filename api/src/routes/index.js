const { Router } = require('express');
const router = Router();

const publications = require('./publications.router');
const admin = require('./admin.router');
const contact = require('./contact.router')

router.use('/publications', publications);
router.use('/admin', admin);
router.use('/contact', contact)

module.exports = router;