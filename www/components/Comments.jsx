import React from 'react' //eslint-disable-line
import RfGrid from './RfGrid.jsx'
import { getComments } from '../api.js'
import Paper from 'material-ui/Paper'

const style = {
  margin: 50,
  display: 'block'
}

export default class Users extends React.Component {
  constructor (props) {
    super(props)
    this.state = {ops: {}}
  }
  retainOptions (ops) {
    this.setState({ops: ops})
    return this.state.ops
  }

  loadDataFromServer (options, callback) {
    getComments(options).then(function (res) {
      var comments = res.data[0]
      var myp = {
        title: 'Comments',
        pages: res.data[1],
        select_values: ['default', 'score', 'gilded', 'author', 'create_utc', 'body'],
        cards: comments.map(c => {
          return {
            title: c.author,
            subtitle: c.created_utc,
            link: '/comments/detail/' + c.comment_id,
            preview: '/dist/images/ic_speaker_notes_black_48dp_2x.png',
            icon: '/dist/images/ic_account_circle_black_48dp_2x.png',
            customClass: 'iconMedia'
          }
        })
      }
      callback(myp)
    })
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>
            <RfGrid retainOptions={(o) => this.retainOptions(o)} filterOptions={[]} loadDataFromServer={(ops, callback) => this.loadDataFromServer(ops, callback)} />
          </div>
        </Paper>
      </div>
    )
  }
}
