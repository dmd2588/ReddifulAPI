import React from 'react' //eslint-disable-line
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getComments, getUsers } from '../api.js'

export default class Users extends React.Component {
  loadDataFromServer (options) {
        // Make request here using options
    var myp = {
      title: 'Comments',
      select_values: Object.keys(getComments()[0]),
      cards: getComments().map(c => {
        return {
          title: getUsers().find(u => u.id === c.author).name,
          subtitle: 'Commented: ' + moment(new Date(c.created * 1000)).format('LL'),
          link: '/comments/detail/' + c.id
        }
      })
    }

    return myp
  }
  render () {
    return <RfGrid loadDataFromServer={ops => this.loadDataFromServer(ops)} />
  }
}
