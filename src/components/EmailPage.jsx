import React from 'react';
import Validation from './Validation';

class EmailPage extends React.Component {
	constructor(props) {
	    super(props);
	    this.baseState = {
	    	email: '',
	    	vMsg: '',
	    	vMsgColor: ''	
	    }

	    this.state = this.baseState;

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	resetForm = () => {
		this.setState(this.baseState)
	}

	handleChange = (e) => {
	    const value = e.target.value;
  		this.setState({
		    ...this.state,
		    [e.target.name]: value
		});
	}

	validateMessage = () => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	const valid = re.test(this.state.email.toLowerCase());
    	if (valid && (this.state.email.endsWith(".com") || this.state.email.endsWith(".edu"))) {
    		this.setState({
    			vMsg: 'Email successfully recorded.',
    			vMsgColor: 'lightgreen'
    		});
    	} else {
    		this.setState({
    			vMsg: 'Invalid email address.',
    			vMsgColor: 'crimson'
    		});	
    	}
	}

	handleSubmit = (e) => {
	    console.log('Submitted form');
	    e.preventDefault();
	    this.resetForm();
	    this.validateMessage();
	}

	render() {
	    return (
	      	<div>
	      		<form className='email-form' onSubmit={this.handleSubmit}>
					<label>
						Email<br/>
						<input type='text' name='email' value={this.state.email} onChange={this.handleChange}/>
					</label>
					<br/><br/>
					<input className='button sub-button' type='submit' value='Submit' />
				</form>
				<br/>
				{this.state.vMsg != '' && <Validation msg={this.state.vMsg} color={this.state.vMsgColor}/>}
	      </div>
	    );
	}
}

export default EmailPage;