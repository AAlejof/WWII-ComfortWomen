const { DataTypes } = require("sequelize");

const publication = (sequelize) => {
    sequelize.define('publication', {   
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        tag: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: ["noticias"]
        },
        author_name: {
            type: DataTypes.TEXT,
            defaultValue: "Fundación Manyoung"
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

module.exports = publication

