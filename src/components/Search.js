import React from 'react';

class Search extends React.Component {

	static contextTypes = {
		router: React.PropTypes.object
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const searchTerm = this.q.value;
		this.context.router.history.push(`/search/${searchTerm}`);
	}

	render() {
		return (
			<div className="container search">
				<form onSubmit={this.handleSubmit} >
					<input type="text" ref={(q) => this.q = q} placeholder="SEO, WordPress, Geelong..." />
					<input type="submit" value="Search"/>
				</form>
			</div>
		)
	}
}

export default Search;
