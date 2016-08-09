import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
/* import {Link} from 'react-router';*/
import * as userActions from 'redux/modules/users';
import {isLoaded, load as loadUsers} from 'redux/modules/users';
import {UserForm} from 'components';
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
      userData: state.users.userData,
      editing: state.users.editing,
      error: state.users.error,
      loading: state.users.loading
    }),
  {...userActions})

export default class User extends Component {

  static propTypes = {
    name: PropTypes.string,
    userData: PropTypes.object
  };

  render() {
    const {userData} = this.props;
    return (
      <div className="container">
        <h1>User Form</h1>
        <Helmet title="User page" />
        <UserForm userData={userData}/>
      </div>
    );
  }
}
