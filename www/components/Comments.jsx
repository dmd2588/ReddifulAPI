import React from 'react' //eslint-disable-line
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getComments, getUsers } from '../api.js'

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
  };

export default class Users extends React.Component {
   constructor(props) {
    super(props);
    this.state = {data: myp};
  }
  render(){
        return<RfGrid data={this.state.data} />
    }
}
