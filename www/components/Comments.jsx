import React from 'react';
import RfGrid from './RfGrid.jsx'

class Comments extends React.Component {
  constructor() {
    super()
    this.cells = [
      {title: 'comment 1', subtitle: 'by: blue whale', text: 'Dolphins ruin the sanctity of sea life!'},
      {title: 'comment 2', subtitle: 'by: red dolphin', text: 'whales are an abomination.'}
    ]
  }

  render() {
    return (
      <RfGrid cells={this.cells}/>
    )
  }
}

export default Comments;
