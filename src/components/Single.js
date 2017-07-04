import React from 'react';
import Loader from './Loader';

class Single extends React.Component {

	constructor() {
		super();
		this.state = {
			post: {},
			loading: true
		}
	}

	componentWillMount() {
		this.loadPost(this.props.match.params.postId);
	}

	loadPost = (postId) => {
		fetch(`https://goop.com.au/wp-json/wp/v2/posts/${postId}`)
			.then(data => data.json())
			.then(singlePost => {
				console.log(singlePost);
				this.setState({
					post: singlePost,
					loading: false
				});
			})
	}

	render() {
		if(this.state.loading) {
			return <Loader message="Fetching Post" />
		}

		const { post } = this.state;

		return (
			<div className="single-post container">
				<div className="desc">
					<h2 dangerouslySetInnerHTML={ { __html: post.title.rendered } }></h2>
				</div>
				<div dangerouslySetInnerHTML={ { __html: post.content.rendered } }></div>
			</div>
		)
	}
}

export default Single;
