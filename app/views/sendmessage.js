import React, {Component} from 'react'


class Sendingmessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    // this.state = {
    //   value: ''

    //};

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleCreate(event) {
    event.preventDefault();
      console.log(this.refs.createMessage.value);
    //alert('Your message has been sent:' + this.state.value);  //{this.state.date.toLocaleTimeString()}
    //event.preventDefault();
   
  }

  render() {
    return (   
      <div className="sendmsgform">  
      <form onSubmit={this.handleCreate.bind(this)}>
          <textarea className= "messageBox" value={this.state.value} onChange={this.handleChange}
          ref="createMessage"/>
        <label className="dropdownLabel">
          Choose the receiver:
          <select className="myOptions" value={this.state.value}>
            <option value="parisa">Parisa</option>
            <option value="Samuel">Samuel</option>
            <option value="Mikael">Mikael</option>
            <option value="Martin">Martin</option>
          </select>
        </label>
        <input type="submit" className="sendmessagebtn" value="Send"/>
      </form>
      </div>
    );
  }
}

export default Sendingmessage
