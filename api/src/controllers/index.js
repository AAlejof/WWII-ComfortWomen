// Admin
const deleteAdmin = require("./admin/deleteAdmin");
const getAllAdmins = require("./admin/getAllAdmins");
const postAdmin = require("./admin/postAdmin");
const putAdmin = require("./admin/putAdmin");
const restoreAdmin = require("./admin/restoreAdmin");
const getSoftDeletedAdmin = require("./admin/getSoftDeletedAdmin");

// Contact
const deleteContact = require("./contact/deleteContact");
const getAllContact = require("./contact/getAllContact");
const getSoftDeletedContact = require("./contact/getSoftDeletedContact");
const postContact = require("./contact/postContact");
const putContact = require("./contact/putContact");
const restoreContact = require("./contact/restoreContact")

// Publications
const createPublication = require("./publications/createPublication");
const deletePublication = require("./publications/deletePublication");
const editPublication = require("./publications/editPublication");
const getAllPublications = require("./publications/getAllPublications");
const getPublicationsByID = require("./publications/getPublicationsByID");
const getPublicationsByName = require("./publications/getPublicationsByName");
const restorePublication = require("./publications/restorePublication");
const getSoftDeletedPublication = require("./publications/getSoftDeletedPublication");
const filters = require("./publications/filters");

module.exports = {
	// Admin
	deleteAdmin,
	getAllAdmins,
	postAdmin,
	putAdmin,
	restoreAdmin,
	getSoftDeletedAdmin,
	// Contact
	deleteContact,
	getAllContact,
	getSoftDeletedContact,
	postContact,
	putContact,
	restoreContact,
    // Publications
	createPublication,
	deletePublication,
	editPublication,
	getAllPublications,
	getPublicationsByID,
	getPublicationsByName,
	restorePublication,
	getSoftDeletedPublication,
	filters
};