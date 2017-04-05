import React from 'react' //eslint-disable-line
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getSubreddits } from '../api.js'

export default class Subreddits extends React.Component {
  loadDataFromServer (options) {
        // Make request here using options
    var myp = {
      title: 'Subreddits',
      select_values: ['title', 'accounts_active', 'subscribers', 'created_utc', 'dispay_name'],
      cards: getSubreddits().map(s => {
        console.log('S', s.display_name, s)
        return {
          title: s.display_name,
          subtitle: 'Created: ' + moment(new Date(s.created * 1000)).format('LL'),
          link: '/subreddits/detail/' + s.id
        }
      })
    }

    return myp
  }
  render () {
    return <RfGrid filterOptions={[]} loadDataFromServer={ops => this.loadDataFromServer(ops)} />
  }
}
