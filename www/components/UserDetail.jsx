import React from 'react';

var userData = [{"name": "batman_jr", "created": 1405828618.0, "link_karma": 335, "comment_karma": 190, "id": "hh8mr", "email": "None"}, {"name": "poizan42", "created": 1331171212.0, "link_karma": 768, "comment_karma": 25419, "id": "74344", "email": "poizan@poizan.dk"}, {"name": "Ooer", "created": 1287044616.0, "link_karma": 18834, "comment_karma": 56852, "id": "4fer6", "email": "ooer@live.com"}];

class UserDetail extends React.Component {
  render() {
    var user_id = this.props.match.params.user_id;
    var row = undefined;
    for (var ind in userData) {
        if (userData[ind].id == user_id) {
            row = userData[ind];
            break;
        }
    }
    var created = new Date(0);
    created.setUTCSeconds(row.created);
    if (row) {
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
