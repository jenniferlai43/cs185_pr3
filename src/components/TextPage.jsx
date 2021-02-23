/* eslint no-undef: 0 */ // --> OFF
import React from 'react';

class TextPage extends React.Component {
	constructor(props) {
	    super(props);
	    this.baseState = {
	    	username: '',
	    	password: '',
	    	animal: 'penguin',	    	
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

	handleOptionChange = (changeEvent) => {
	  this.setState({
	    animal: changeEvent.target.value
	  });
	}

	handleSubmit = (event) => {
	    console.log('Submitted form');
	    event.preventDefault();
	    this.resetForm()
	}

	render() {
	    return (
	      <div>
	      	<form onSubmit={this.handleSubmit}>
				<label>
					Username<br/>
					<input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
				</label>
				<br/>
				<label>
					Password<br/>
					<input type='text' name='password' value={this.state.password} onChange={this.handleChange}/>
				</label>
				<br/>

				<p>Your favorite animal:</p>
				<label>
		        	<input type='radio' value='penguin' checked={this.state.animal === 'penguin'} onChange={this.handleOptionChange}/>
					Penguin
		        </label>
		        <label>
		        	<input type='radio' value='pig' checked={this.state.animal === 'pig'} onChange={this.handleOptionChange}/>
					Pig
		        </label>
		        <label>
		        	<input type='radio' value='chicken' checked={this.state.animal === 'chicken'} onChange={this.handleOptionChange}/>
					Chicken
		        </label>
		        <br/><br/>
				<input className='button' type='submit' value='Submit' />
			</form>
	      </div>
	    );
	}
}

export default TextPage;