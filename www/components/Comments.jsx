import React from 'react' //eslint-disable-line
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getComments, getUsers } from '../api.js'

export default class Users extends React.Component {
  loadDataFromServer (options, callback) {
    getComments(options).then(function (res) {
      var comments = res.data
      getUsers({}).then(function (res) {
        var users = res.data
        var myp = {
          title: 'Comments',
          select_values: Object.keys(comments[0]),
          cards: comments.map(c => {
            return {
              title: users.find(u => u.id === c.author).name,
              subtitle: 'Commented: ' + moment(new Date(c.created * 1000)).format('LL'),
              link: '/comments/detail/' + c.id
            }
          })
        }

        callback(myp)
      })
    })
  }

  render () {
    return <RfGrid loadDataFromServer={(ops, callback) => this.loadDataFromServer(ops, callback)} />
  }
}
