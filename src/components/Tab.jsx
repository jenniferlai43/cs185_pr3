import React from 'react';

class Tab extends React.Component {
	render() {
	    return (
	    	<div>
		    	<li key={this.props.index} 
		    		className={(this.props.active ? 'active-tab' : '')}
		    		onClick = {this.props.changeTab.bind(this,this.props.index)}>
		    		{this.props.title}
		    	</li>
		    </div>
    	);
  	}
}

export default Tab;