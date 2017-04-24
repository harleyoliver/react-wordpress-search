import React from 'react';

class Loader extends React.Component {
	render() {
		return (
			<div className="loader">
				<h2>{this.props.message}</h2>
			</div>
		)
	}
}

export default Loader;
