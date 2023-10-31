import {
	GET_ALL_POSTS,
	SEARCH_POSTS,
	UPDATE_SEARCH,
	UPDATE_FILTERS,
	FILTER_POSTS,
	GET_POST_BY_ID,
	CLEAR_POST_DETAILS,
	POST_BLOG,
	DELETE_BLOG,
	GET_ALL_ADMIN,
	POST_ADMIN,
	REMOVE_ADMIN,
	GET_ALL_CONTACT,
	POST_CONTACT,
	DELETE_CONTACT
} from "../actions/action-types.js";

const initialState = {
	initial_posts: [],
	matched_posts: [],
	ig_posts: [],
	post_details: {},
	search_blog: "",
	filters_blog: {
		tag: "",
		date: "",
	},
	allAdmin: [],
	edit_button: true,
	contact: [],
};

const rootReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_POSTS:
			return {
				...state,
				initial_posts: payload.blogPosts,
				matched_posts: payload.blogPosts,
				ig_posts: payload.igPosts,
			};
		case GET_POST_BY_ID:
			return {
				...state,
				post_details: payload,
			};
		case CLEAR_POST_DETAILS:
			return {
				...state,
				post_details: {},
			};
		case SEARCH_POSTS:
			return {
				...state,
				matched_posts: payload,
			};
		case UPDATE_SEARCH:
			return {
				...state,
				search_blog: payload,
			};
		case FILTER_POSTS:
			return {
				...state,
				matched_posts: payload,
			};
		case UPDATE_FILTERS:
			return {
				...state,
				filters_blog: {
					...state.filters_blog,
					tag: payload.tag,
					date: payload.date,
				},
			};

		case POST_BLOG:
			return {
				...state,
			};
		case DELETE_BLOG:
			return {
				...state,
				initial_posts: state?.initial_posts?.filter((el) => el.id !== payload),
				matched_posts: state?.matched_posts?.filter((el) => el.id !== payload),
				ig_posts: state.ig_posts?.filter((el) => el.id !== payload),
			};

		case GET_ALL_ADMIN:
			return {
				...state,
				allAdmin: payload,
			};
		case POST_ADMIN:
			return {
				...state,
			};
		case REMOVE_ADMIN:
			return {
				...state,
			};

		case POST_CONTACT:
			return {
				...state,
				contact: [...state.contact, payload],
			};

		case GET_ALL_CONTACT:
			return {
				...state,
				contact: payload,
			};
		case DELETE_CONTACT:
			return {
				...state,
				contact: state.contact.filter(
					(message) => message.id !== payload
				),
			};


		default:
			return {
				...state,
			};
	}
};
export default rootReducer;
