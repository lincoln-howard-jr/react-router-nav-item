var React = require('react');
var ReactDOM = require('react-dom');
var NavItem = require('react-nav-item');

var App = React.createClass({
	render () {
		return (
			<div>
				<NavItem />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
