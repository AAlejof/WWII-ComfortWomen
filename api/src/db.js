const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config();

const {
	Admin,
	Publication,
	Contact
} = require("./models/index");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

// const { DB_DEPLOY } = process.env;

const db = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
	{
		logging: false, // set to console.log to see the raw SQL queries
		native: false, // lets Sequelize know we can use pg-native for ~30% more speed
	}
);

// const db = new Sequelize(DB_DEPLOY, { logging: false, native: false });

Admin(db);
Publication(db);
Contact(db)

const {
    admin,
	publication,
	contact
} = db.models;


admin.hasMany(publication);
publication.belongsTo(admin);

module.exports = {
	...db.models,
	conn: db,
};
