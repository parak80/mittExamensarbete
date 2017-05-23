import React from 'react';

//returning for each individual items
export default class TodosListItem extends React.Component {
	//for editing buttons we setState so we use constructor..
	constructor(props) {
		super(props);

		this.state= {
			isEditing: false
		};
	}
	// we change the color of each items by clicking if they are approved they will be green otherwise red
	//we pass them 
	renderNameSection() {

		const { name, isApproved } = this.props;

		const nameStyle = {
			//if its true is going to be green otherwise is red
			color: isApproved ? 'green' : 'red',
			crusor:'pointer'
		};
		//if we are in editing state we are going to return certain things. otherwise we just return renderNameSection
		if(this.state.isEditing) {
			return(
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input className="btnToInput"type="text" defaultValue= {name} ref="editInput" />
					</form>
				</td>
			);
		}

		return(
			<td style= {nameStyle}
			//toggleName methode comes from where we have the arrays (home.js) because we 
			//need to modify our array list. we want to be able to pass in name into this
			//metod and we get name from renderNameSection where we write const{name, ...}
				onClick={this.props.toggleName.bind(this, name)}
			>
				{name}
			</td>
		);
	}
	//changing buttons name
	renderActionSection() {
		//if its in isediting state we change the buttons name
		if (this.state.isEditing) {
			return (
				<td className="printoutBorder">
					<button  className="myActionbtn color" onClick={this.onSaveClick.bind(this)}>Save</button>
					<button className="myActionbtn" onClick={this.onCancelClick.bind(this)}>Cancle</button>
				</td>
			);
		}
		//if its not editing
		return (
			<td className="printoutBorder">
				<button className="myActionbtn" onClick={this.onEditClick.bind(this)}>Edit</button>
				<button className="myActionbtn" onClick={this.props.deleteName.bind(this, this.props.name
					)}>Delete</button>
			</td>
		);
	}
	render() {
		return(
			<tr>
				{this.renderNameSection()}
				{this.renderActionSection()}
			</tr>
		);
	 }
	 onEditClick() {
	 	this.setState({ isEditing: true });
	}

	onCancelClick() {
		this.setState({ isEditing: false });
	}
	//saveName(oldName, newName)
	onSaveClick(event) {
		event.preventDefault();
		//we need to pass the old name to match it to the array
		const oldName= this.props.name;
		const newName= this.refs.editInput.value;
		this.props.saveName(oldName, newName);
		//Take away the input box after we save the new data
		this.setState({ isEditing: false });
	}
}