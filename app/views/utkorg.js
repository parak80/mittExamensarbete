import React, { Component } from 'react';
import { Link } from 'react-router'

export default class ContactList extends React.Component {
	render(){
		return(
			<table className="listTable">
				<thead>
					<tr>
					<th></th>
						<th className="thName">List name</th>
						<th className="thNumber">List number</th>
					</tr>
				</thead>
				<tbody>
				<tr>

			        <th scope="row">1</th>
			        <td>Mark</td>
			        <td>070657483</td>
			        
			      </tr>
			      <tr>
			        <th scope="row">2</th>
			        <td>Jacob</td>
			        <td>072576897</td>
			      </tr>
				</tbody>
			</table>
		);
	}
}

// export default ContactList