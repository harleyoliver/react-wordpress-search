import React from 'react';
import Loader from './Loader';
import Search from './Search';
import Results from './Results';
import '../styles.css'

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			loading: true,
		}
	}

	componentWillMount() {
		const params = this.props.match.params || {};
		const searchTerm = params.searchTerm || undefined;
		this.loadPosts(searchTerm);
	}

	componentWillReceiveProps(nextProps) {
		this.loadPosts(nextProps.match.params.searchTerm);
	}

	loadPosts = (searchTerm = 'Harley') => {

		fetch(`https://goop.com.au/wp-json/wp/v2/posts?per_page=50&search=${searchTerm}`)
			.then(data => data.json())
			.then(posts => {
				console.log(posts);
				this.setState({
					posts: posts,
					loading: false
				});
			})
	}

	render() {
		if(this.state.loading) {
			return <Loader message="Fetching Posts" />
		}
		return (
			<div className="header">
				<Search />
				<Results posts={this.state.posts} />
			</div>
		)
	}
}

export default Main;
