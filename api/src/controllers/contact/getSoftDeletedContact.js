const { contact } = require('../../db');
const { Op } = require('sequelize');

const getSoftDeletedContact = async () => {
  return await contact.findAll({ 
    paranoid: false,
    where: { 
      deletedAt: { 
        [Op.not]: null 
      }
    } 
  });
}

module.exports = getSoftDeletedContact;