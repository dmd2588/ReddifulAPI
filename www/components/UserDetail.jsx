import React from 'react';
import { getUsers, getUserRelated } from '../api.js'

class UserDetail extends React.Component {
  render() {
    var userData = getUsers()
    var user_id = this.props.match.params.user_id;
    var row = undefined;
    console.log(getUserRelated(user_id));
    for (var ind in userData) {
        if (userData[ind].id == user_id) {
            row = userData[ind];
            break;
        }
    }
    if (row) {
        var created = new Date(0);
        created.setUTCSeconds(row.created);
        return (
            <div>
              <h2>User Detail</h2>
              <p>Name: {row.name}</p>
              <p>Link Karma: {row.link_karma}</p>
              <p>Comment Karma: {row.comment_karma}</p>
              <p>Email: {row.email}</p>
              <p>Created: {created.toString()}</p>
            </div>
        )
    } else {
        return (
            <div>
              <h2>User Detail</h2>
              <p>No user with user_id {user_id} found.</p>
            </div>
        )
    }
  }
}

export default UserDetail;
