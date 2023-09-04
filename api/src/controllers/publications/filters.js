const { publication } = require("../../db");
/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

const filters = async (req, res) => {
	try {
		const { tag, date, title } = req.query;
		if (!tag && !date) throw Error("tag or query is required");
		if (date && date !== "ancient" && date !== "recent")
			throw Error("date criteria error");

		let allPublications = await publication.findAll({});

		let filteredPublication = [];

		if (title) {
			let allPublicationSearch = await publication.findAll({});
			let publicationName = await allPublicationSearch.filter((el) => {
				return el.dataValues.title.toLowerCase().includes(title.toLowerCase());
			});
			allPublications = publicationName;
			console.log(publicationName);
		}

		if (tag) {
			filteredPublication.push(
				...allPublications.filter((publication) => publication.tag.includes(tag))
			);
		} else filteredPublication = allPublications;

		if (date) {
			if (date === "ancient") {
				filteredPublication.sort((a, b) => {
					return a.createdAt.getTime() - b.createdAt.getTime();
				});
			} else if (date === "recent") {
				filteredPublication.sort((a, b) => {
					return b.createdAt.getTime() - a.createdAt.getTime();
				});
			}
		}

		res.status(200).json({
			message: "filter by tag or date",
			querys: { tag, date },
			filteredPublication,
		});
	} catch (error) {
		res.status(400).json({
			error: error.message,
		});
	}
};

module.exports = filters;