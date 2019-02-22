import React, { Component } from 'react';
import { friendsList, friendsInput } from './Compoents';
import { updateFriends, addFriends, deleteFreinds } from './Actions';
import { connect } from 'react-redux';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.updateFriends();
  }
  render() {
    return (
      <div className="App">
        <friendsInput addFriends={this.props.addFriends} />
        <friendsList friends={this.props.friends} deleteFreinds={this.props.deleteFreinds} />
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    friends: state.friends,
    updating: state.updating,
    error: state.error
  };
}

export default connect(
  stateToProps,
  {
    updateFriends,
    addFriends,
    deleteFreinds
  }
)(App);
