import React from 'react' // eslint-disable-line
import RfGrid from './RfGrid.jsx'
import { getPosts, getUsers } from '../api.js'

export default class Posts extends React.Component {
  loadDataFromServer (options) {
        // Make request here using options
    var myp = {
      title: 'Posts',
      select_values: ['score', 'gilded', 'title', 'num_comments', 'author'],
      cards: getPosts().map(p => {
        return {
          title: p.title,
          subtitle: 'Author: ' + (getUsers().find(u => u.id === p.author) || {}).name,
          link: '/posts/detail/' + p.id
        }
      })
    }

    return myp
  }

  render () {
    return (
      <div>
        <RfGrid filterOptions={[{name: 'is_self', value: false}]} loadDataFromServer={ops => this.loadDataFromServer(ops)} />
      </div>
    )
  }
};
