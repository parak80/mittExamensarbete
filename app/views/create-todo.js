import React from 'react';

export default class TodosList extends React.Component {
	constructor(props) {
		super(props);
	//state gonna start off as null
		this.state = {
			error: null
		};
	}
	//based on state so: above should be done
	renderError() {
		//if there is no error
		if(!this.state.error) {return null;} //nothing will happen
			//alert('please enter the name:' + this.state.error);
			//if there is an error..
		 return <div style={{ color:'red', marginLeft: '20'}}>{this.state.error}</div>;
	}

	render() {
		return(
			//create form to create names (items) and send it to the arrays below it
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" className= "styleMyInputCreate" placeholder="Write the name here ..." ref="createInput" />
				<button className="myCreatebtn">Create</button>
				{this.renderError()}
			</form>
		);
	}
	  handleCreate(event) {
	  	event.preventDefault();

	  	const createInput = this.refs.createInput;
	  	const name = createInput.value;
	  	//we are going to take the name and analyse it to see if there is anything wrong with it
	  	const validateInput = this.validateInput(name);

	  	if(validateInput) {
	  		//if it returned a message then this will be true
	  		this.setState({ error: validateInput });
	  		//if there is no error return what is inside input
	  		 return;
	  	}
	  	//if there is no error we setState to null , if there is an error we want to cancel it
	  	this.setState({ error: null });
	  	//we change it from (this.refs.createInput.value) to (name)
	  	this.props.createName(name);
	  	//to empty the input after each time creating one name
	  	this.refs.createInput.value= '';
	  }

	  validateInput(name) {
	  		if (!name) {
	  			return 'please enter a name!';
	  			//to be able to use tocreate here we should first add it to our render home.js
	  			//in our <CreateToDo/> component
	  			//=> we wanna find if todo in a array name matches to the name we already have 
	  		} else if (_.find(this.props.tocreate, todo => todo.name === name)) {
	  			return 'Name already exists.';
	  		} else {
	  			//there is no error
	  			return null;
	  		}
	  }
	}