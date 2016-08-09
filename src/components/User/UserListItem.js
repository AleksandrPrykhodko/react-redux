import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class UserListItem extends Component {
  static propTypes = {
    userData: PropTypes.object,
  };
  render() {
    const path = this.props.userData.id + '/edit';
    return (
      <li className="list-group-item">{this.props.userData.name}
        <Link to={path} params={{ id: this.props.userData.id }}>
          <span className="glyphicon glyphicon-edit"></span>
        </Link>
      </li>
    );
  }
}
