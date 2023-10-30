const { Router } = require('express');
const router = Router();

const publications = require('./publications.router');
const admin = require('./admin.router');
const contact = require('./contact.router')
//const mails = require('./mails.router');

router.use('/publications', publications);
router.use('/admin', admin);
router.use('contact', contact)
//router.use('/mail', mails);


module.exports = router;