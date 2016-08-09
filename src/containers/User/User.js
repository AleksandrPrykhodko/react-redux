import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as userActions from 'redux/modules/users';

@connect(
    state => ({
      ...state
    }),
  {...userActions})

export default class User extends Component {

  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.object
  };

  componentDidMount() {
    // This doesn't refer to the `span`s! It refers to the children between
    // last line's `<App></App>`, which are undefined.
    console.log(this.props.children);
  }

  render() {
    return (
      <div className="container">
        <h1>User page</h1>
        <Link className="btn btn-success" to="/users/add">
          <span className="glyphicon glyphicon-plus"></span>
        </Link>
        <Helmet title="User page" />
        {this.props.children}
      </div>
    );
  }
}
