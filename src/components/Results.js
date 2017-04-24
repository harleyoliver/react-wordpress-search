import React from 'react';
import Post from './Post';

class Results extends React.Component {

	static propTypes = {
		posts: React.PropTypes.array.isRequired
	}

	render() {
		return (
			<div className="container">
				{this.props.posts.map( post => <Post key={post.id} details={post} />)}
			</div>
		)
	}
}

export default Results;
