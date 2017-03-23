import React from 'react';

class UserDetail extends React.Component {
  render() {
    return (
        <div>
          <h2>User Detail</h2>
          <p>{this.props.match.params.user_id}</p>
        </div>
    )
  }
}

export default UserDetail;
