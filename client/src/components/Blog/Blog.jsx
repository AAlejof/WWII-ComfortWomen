import { useDispatch, useSelector } from 'react-redux';
import {
	filterPosts,
	getAllPosts,
	searchPosts,
	updateFilters,
	updateSearch,
} from '../../redux/actions/actions';
import { useEffect, useState } from 'react';


//todo blog container
export default function Blog() {
	const dispatch = useDispatch();
	let { initial_posts, matched_posts, ig_posts, search_blog, filters_blog } =
		useSelector((s) => s);
	const [search, setSearch] = useState('');
	const [filters, setFilters] = useState({ tag: '', date: '' });
	const [isLoaded, setIsLoaded] = useState(true);

	//* search
	const handleChangeSearch = (e) => {
		setSearch(e.target.value);
		dispatch(updateSearch(e.target.value));
		dispatch(searchPosts(filters, e.target.value));
	};
	
	useEffect(()=>{
		if(Object.values(filters_blog).find(el=>el!=="") || search_blog){
			dispatch(searchPosts(filters_blog, search_blog));
		} else{
			dispatch(getAllPosts());
		}
	}, [dispatch])

	//*change filters!!!
	const handleChangeFilters = (e) => {
		setIsLoaded(false)
		setFilters({
			...filters,
			[e.target.name]: e.target.value,
		});
		dispatch(
			updateFilters({
				...filters,
				[e.target.name]: e.target.value,
			})
		);
		dispatch(filterPosts({
			...filters,
			[e.target.name]: e.target.value,
		}, search_blog));

		setTimeout(() => {
			setIsLoaded(true);
		}, [1500]);
	};

	//*clear filter!!!
	const handleClearFilters = (e) => {
		e.preventDefault();
		setIsLoaded(false)
		setFilters({ tag: '', date: '' });
		setSearch('');
		dispatch(updateSearch(''));
		dispatch(updateFilters({ tag: '', date: '' }));
		dispatch(getAllPosts());
		setTimeout(() => {
			setIsLoaded(true);
		}, [1500]);
	};

	filters_blog = useSelector((s) => s.filters_blog);

	search_blog  = useSelector((s) => s.search_blog);

	return (
		<>
        </>
	);
}