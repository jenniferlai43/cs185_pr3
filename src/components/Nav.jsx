/* eslint no-undef: 0 */ // --> OFF
import React from 'react';

class Nav extends React.Component {
  	render() {
  		console.log(this.props.active);
    	return (
      		<div>
      			<ul>
					{this.props.tabs.map((tab, i) => {
	          			return <li key={i} className={(this.props.active === tab.id ? 'active-tab' : '')} onClick = {this.props.changeTab.bind(this,tab.id)}>{tab.title}</li>;
	        		})}
				</ul>
      		</div>
  		);
  	}

}

export default Nav;