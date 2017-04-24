import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
	render() {
		const { slug, id, title, excerpt } = this.props.details;

		return (
			<div className="post">
				<Link to={`/post/${id}/${slug}`}>
					<h2 dangerouslySetInnerHTML={ { __html: title.rendered } }></h2>
				</Link>
				<p dangerouslySetInnerHTML={ { __html: excerpt.rendered } }></p>
				<Link to={`/post/${id}/${slug}`}>
					<strong className="btn">Read More ></strong>
				</Link>
			</div>
		)
	}
}

export default Post;
