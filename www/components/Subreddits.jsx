import React from 'react' //eslint-disable-line
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getSubreddits } from '../api.js'

var myp = {
  title: 'Subreddits',
  select_values: Object.keys(getSubreddits()[0]),
  cards: getSubreddits().map(s => {
    console.log('S', s.display_name, s)
    return {
      title: s.display_name,
      subtitle: 'Created: ' + moment(new Date(s.created * 1000)).format('LL'),
      link: '/subreddits/detail/' + s.id
    }
  })
}

export default class Subreddits extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data: myp}
  }
  render () {
    return <RfGrid data={this.state.data} />
  }
}
