// import _ from 'lodash';
import React, {Component} from 'react'
import CreateTodo from './create-todo';
import TodosList from './todos-list';


const tocreate=[{
  name: 'Sales group',
  isApproved:false,
},
{
  name:'Support',
  isApproved:true
},
{
  name:'Parisa Carlborg',
  isApproved:true
},
{
  name:'Developers',
  isApproved:true
}
];

const styleMyArray= {
  
    marginLeft:'20px'  
};

export default class NameForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        tocreate
    };
  }

  render() {
      return (
          <div style= {styleMyArray}>
            <h1>Create your name-list</h1>
            <CreateTodo tocreate={this.state.tocreate} createName= {this.createName.bind(this)} />
            <TodosList 
                tocreate={this.state.tocreate} 
                toggleName= {this.toggleName.bind(this)}
                saveName={this.saveName.bind(this)}
                deleteName={this.deleteName.bind(this)}
              />
          </div>
      );
  }

    toggleName(name) {
      //find from the array. here i am going to find the todo name that matches the name that im passing in
        //the one that we click on
        const foundTodo = _.find(this.state.tocreate, todo => todo.name ===name);
        //whatever it is change it to opposite
        foundTodo.isApproved = !foundTodo.isApproved;
        //we binded to be able to setState here. to refresh
        this.setState({ tocreate: this.state.tocreate});
    }
    //we are going to take whatever name is passed into this methode by using this.
    //then we push it into our tocreate state. the last tocreate is going to be our new array
    createName(name) {
      this.state.tocreate.push({
        name,
        isApproved: false
      });
      this.setState({tocreate: this.state.tocreate});
    }
    //setting up our edit functionality; save button
    saveName(oldName, newName) {
      //matching the old name
      const foundTodo = _.find(this.state.tocreate, todo=> todo.name === oldName);
      //replacing the old name to the new one
      foundTodo.name = newName;
      this.setState({ tocreate: this.state.tocreate});
    }

    deleteName(nameToDelete) {
        _.remove(this.state.tocreate, todo => todo.name === nameToDelete);
        this.setState({ tocreate: this.state.tocreate });
    }
}

