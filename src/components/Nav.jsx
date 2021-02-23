/* eslint no-undef: 0 */ // --> OFF
import React from 'react';
import Tab from './Tab';

class Nav extends React.Component {
  	render() {
    	return (
      		<div>
      			<ul>
					{this.props.tabs.map((tab, i) => 
						(<Tab 	key={i}
								index={i}
	        					active={this.props.active === tab.id}
	        					changeTab={this.props.changeTab}
	        					title={tab.title} />)
					)}
				</ul>
      		</div>
  		);
  	}

}

export default Nav;