import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <input
        className='name-input'
        type='text'
        name={this.props.name}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Question;
