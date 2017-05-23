import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListName from './todos-list-name';

export default class TodosList extends React.Component {
	renderItems() {
		 const props= _.omit(this.props, 'tocreate');

		//to iterate through props, in order to show each array individually
		return _.map(this.props.tocreate, (todo, index) => <TodosListName key= {index
		} {...todo} {...props} />);
		//{...props}: instead of passing it like by writing toggleName= {this.props.toggleName} />
		//instead of passing every props , but we already have our tocreate so we write the above omit function
		//to remove tocreate from the props + the saveName is also passing through this
	}
	
render() {
	return(
		<table>
			<TodosListHeader />
			<tbody>
				{this.renderItems()}
			</tbody>
		</table>
	);
  }
}

