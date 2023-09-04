const { publication } = require('../../db');

const getSoftDeletedPublication = async () => {
  return await publication.findAll({ 
    paranoid: false,
    where: { 
      deletedAt: { 
        [Op.not]: null 
      }
    } 
  });
}

module.exports = getSoftDeletedPublication;