import React, {Component} from 'react';
import {UserList} from 'components';
import {connect} from 'react-redux';
import * as userActions from 'redux/modules/users';

@connect(
    state => ({
      ...state
    }),
  {...userActions})

export default class UserListContainer extends Component {
  static propTypes = {

  };
  render() {
    return (
      <div>
        <h3>UserListContainer</h3>
        <UserList />
      </div>
    );
  }
}
