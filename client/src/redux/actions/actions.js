import {
	GET_ALL_POSTS,
	GET_POST_BY_ID,
	SEARCH_POSTS,
	UPDATE_SEARCH,
	UPDATE_FILTERS,
	FILTER_POSTS,
	CLEAR_POST_DETAILS,
	POST_BLOG,
	DELETE_BLOG,
	GET_ALL_ADMIN,
	POST_ADMIN,
	REMOVE_ADMIN,
	GET_ALL_CONTACT,
	POST_CONTACT,
	DELETE_CONTACT
} from "./action-types.js";
import axios from "axios";

//------------PUBLICATIONS----------

export function getAllPosts() {
	return async function (dispatch) {
		try {
			const response = await axios.get("/publications/all");
			const blogPosts = response.data.filter((el) => !el.isInstagram);
			const igPosts = response.data.filter((el) => el.isInstagram);

			return dispatch({
				type: GET_ALL_POSTS,
				payload: { igPosts, blogPosts },
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export const getPostById = (id) => {
	return async function (dispatch) {
		try {
			const response = await axios.get(`/publications/${id}`);
			return dispatch({
				type: GET_POST_BY_ID,
				payload: response.data[0],
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export function clearPostDetails() {
	return {
		type: CLEAR_POST_DETAILS,
	};
}

export function searchPosts({ tag, date }, title) {
	return async function (dispatch) {
		try {
			let response = [];

			//*only search
			if (!date && !tag && search) {
				response = await axios.get(`/publications?title=${title}`);
				return dispatch({
					type: SEARCH_POSTS,
					payload: response.data.filter((el) => !el.isInstagram),
				});
			}

			//*tag
			if (!date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}`);
			}

			//*date
			if (date && !tag && !search) {
				response = await axios(`/publications/filters?date=${date}`);
			}

			//*tag and search
			if (!date && tag && search) {
				response = await axios(`/publications/filters?tag=${tag}&title=${title}`);
			}

			//*date and search
			if (date && !tag && search) {
				response = await axios(`/publications/filters?date=${date}&title=${title}`);
			}

			//*date and tag
			if (date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}&date=${date}`);
			}

			//*date, tag and search
			if (date && tag && search) {
				response = await axios(
					`/publications/filters?tag=${tag}&date=${date}&title=${title}`
				);
			}

			//*no value
			if (!date && !tag && !search) {
				response = await axios.get(`/publications/all`);
				return dispatch({
					type: FILTER_POSTS,
					payload: response.data.filter((el) => !el.isInstagram),
				});
			}

			return dispatch({
				type: SEARCH_POSTS,
				payload: response.data.filteredPublication.filter((el) => !el.isInstagram),
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function updateSearch(title) {
	return {
		type: UPDATE_SEARCH,
		payload: title,
	};
}

export const postBlog = (data) => {
	return async function (dispatch) {
		try {
			const response = await axios.post("/publications", data);

			return dispatch({
				type: POST_BLOG,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteBlog = (id) => {
	return async function (dispatch) {
		try {
			const response = await axios.delete(`/publications/${id}`);
			return dispatch({
				type: DELETE_BLOG,
				payload: id,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export function filterPosts({ tag, date }, search) {
	return async function (dispatch) {
		try {
			let response = [];

			//*tag
			if (!date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}`);
			}

			//*date
			if (date && !tag && !search) {
				response = await axios(`/publications/filters?date=${date}`);
			}

			//*tag
			if (!date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}`);
			}

			//*date and tag
			if (date && tag && !search) {
				response = await axios(`/publications/filters?tag=${tag}&date=${date}`);
			}

			//*tag and search
			if (!date && tag && search) {
				response = await axios(`/publications/filters?tag=${tag}&title=${search}`);
			}
			//*date and search
			if (date && !tag && search) {
				response = await axios(
					`/publications/filters?date=${date}&title=${search}`
				);
			}
			//*date, tag and search
			if (date && tag && search) {
				response = await axios(
					`/publications/filters?tag=${tag}&date=${date}&title=${search}`
				);
			}

			if (!date && !tag && !search) {
				response = await axios.get(`/publications/all`);
				return dispatch({
					type: FILTER_POSTS,
					payload: response.data.filter((el) => !el.isInstagram),
				});
			} else {
				return dispatch({
					type: FILTER_POSTS,
					payload: response?.data?.filteredPublication.filter(
						(el) => !el.isInstagram
					),
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
}

export const updateFilters = ({ tag, date }) => {
	return {
		type: UPDATE_FILTERS,
		payload: { tag, date },
	};
};



//-------------ADMIN---------------

export const getAllAdmin = () => {
	return async function (dispatch) {
		try {
			const response = await axios.get("/admin");
			return dispatch({
				type: GET_ALL_ADMIN,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const postAdmin = (data) => {
	return async function (dispatch) {
		try {
			await axios.post("/admin", data);
			return dispatch({
				type: POST_ADMIN,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const removeAdmin = (id) => {
	return async function (dispatch) {
		try {
			const response = await axios.delete(`/admin/${id}`);
			return dispatch({
				type: REMOVE_ADMIN,
				payload: id,
			});
		} catch (error) {
			console.log(error);
		}
	};
};


// ------------CONTACT---------

export const postContact = (review) => async () => {
	try {
		const data = await axios.post("/contact", contact);

		return dispatch({
			type: POST_CONTACT,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const putContact = (id, data) => async () => {
	try {
		const response = await axios.put(`/contact/${id}`, data);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const getAllContact = () => {
	return async function (dispatch) {
		try {
			const response = await axios.get("/contact");
			return dispatch({
				type: GET_ALL_CONTACT,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteContact = (id) => {
	return async function (dispatch) {
		try {
			const response = await axios.delete(`/testimonials/${id}`);
			return dispatch({
				type: DELETE_CONTACT,
				payload: id,
			});
		} catch (error) {
			console.log(error);
		}
	};
};