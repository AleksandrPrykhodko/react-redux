import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
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
      ...state,
      list: state.users.list,
      editing: state.users.editing,
      error: state.users.error,
      loading: state.users.loading
    }),
  {...userActions})

export default class User extends Component {

  static propTypes = {
    userData: PropTypes.array,
    editStart: PropTypes.function
  };

  componentWillMount() {
    console.log(this.props);
    // this.props.actions.initialize(this.props);
    this.props.editStart();
  }

  render() {
    const {userData} = this.props;
    return (
      <div className="container">
        <h1>Add User</h1>
        <span>TEst add user</span>
        <Helmet title="User page" />
        <span>{userData.id || 'null'}</span>
        <span>{userData.name || 'null'}</span>
        <span>{userData.email || 'null'}</span>
      </div>
    );
  }
}
