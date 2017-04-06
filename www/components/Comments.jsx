import React from 'react' //eslint-disable-line
import RfGrid from './RfGrid.jsx'
import { getComments, getUsers } from '../api.js'
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
     retainOptions(ops){
       this.setState(ops)
       return this.state.ops
   }
    
  loadDataFromServer (options, callback) {
    getComments(options).then(function (res) {
      var comments = res.data
      getUsers({}).then(function (res) {
        var users = res.data
        var myp = {
          title: 'Comments',
          select_values: ['<default>', 'score', 'gilded', 'author', 'create_utc', 'body'],
          cards: comments.map(c => {
              // var commentUserMatch = (typeof users.find(u => u.redditor_id === c.author_id) === 'undefined');
              // console.log(users.find(u => u.redditor_id === "10brol"))
            var commentUserMatch = users.find(u => u.redditor_id === c.author_id)
            console.log(commentUserMatch)
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
    })
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>
            <RfGrid retainOptions={(o) => this.retainOptions(o)}  filterOptions={[]} loadDataFromServer={(ops, callback) => this.loadDataFromServer(ops, callback)} />
          </div>
        </Paper>
      </div>
    )
  }
}
