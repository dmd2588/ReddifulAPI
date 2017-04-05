import React from 'react' //eslint-disable-line
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getSubreddits } from '../api.js'

export default class Subreddits extends React.Component {
  loadDataFromServer (options, callback) {
    getSubreddits(options).then(function (res) {
      var subreddits = res.data
      var myp = {
        title: 'Subreddits',
        select_values: ['title', 'accounts_active', 'subscribers', 'created_utc', 'dispay_name'],
        cards: subreddits.map(s => {
          console.log('S', s.display_name, s)
          return {
            title: s.display_name,
            subtitle: 'Created: ' + moment(new Date(s.created * 1000)).format('LL'),
            link: '/subreddits/detail/' + s.id
          }
        })
      }
      callback(myp)
    })
  }
  render () {
    return <RfGrid filterOptions={[]} loadDataFromServer={(ops, callback) => this.loadDataFromServer(ops, callback)} />
  }
}
