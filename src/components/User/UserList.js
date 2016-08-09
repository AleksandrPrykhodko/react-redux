import React, {Component, PropTypes} from 'react';
import UserListItem from './UserListItem';
import {connect} from 'react-redux';
/* import {Link} from 'react-router';*/
import * as userActions from 'redux/modules/users';
import {isLoaded, load as loadUsers} from 'redux/modules/users';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(loadUsers());
    }
  }
}])
@connect(
    state => ({
      list: state.users.list,
      editing: state.users.editing,
      error: state.users.error,
      loading: state.users.loading
    }),
  {...userActions})

export default class UserList extends Component {
  static propTypes = {
    list: PropTypes.array,
    load: PropTypes.func,
  };
  componentWillMount() {
    this.props.load();
  }
  render() {
    const {list} = this.props;
    return (
      <div>
        <h4>userList</h4>
        <ul className="list-group">
        {
          list.map((item) => <UserListItem userData={item} />)
        }
        </ul>
      </div>
    );
  }
}
