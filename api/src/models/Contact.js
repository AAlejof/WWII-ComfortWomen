const { DataTypes } = require("sequelize");

const contact = (sequelize) => {
    sequelize.define('contact', {   

        author_name: {
            type: DataTypes.TEXT,
        },
        tag: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        mail: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
          },

    }, {
        paranoid: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
			}
    })
}

module.exports = contact;