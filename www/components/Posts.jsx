import React from 'react' // eslint-disable-line
import RfGrid from './RfGrid.jsx'
import { getPosts, getUsers } from '../api.js'
import Paper from 'material-ui/Paper'

const style = {
  margin: 50,
  display: 'block'
}

export default class Posts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {ops: {}}
  }
  retainOptions (ops) {
    this.setState(ops)
    return this.state.ops
  }
  loadDataFromServer (options, callback) {
    getPosts(options).then(function (res) {
      var posts = res.data[0]
      getUsers({}).then(function (res) {
        // var users = res.data
        var myp = {
          title: 'Posts',
          select_values: ['<default>', 'score', 'gilded', 'title', 'num_comments', 'author'],
          cards: posts.map(p => {
            var thumbnailAvailable = p.thumbnail !== 'self' &&
                                      p.thumbnail !== 'nsfw' &&
                                      p.thumbnail !== 'default' &&
                                      p.thumbnail
            return {
              title: p.title,
              subtitle: 'Author: ' + p.author,
              link: '/posts/detail/' + p.submission_id,
              preview: thumbnailAvailable ? p.thumbnail : '/dist/images/ic_photo_camera_black_48dp_2x.png',
              icon: '/dist/images/ic_account_circle_black_48dp_2x.png',
              customClass: thumbnailAvailable ? '' : 'iconMedia'
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
            <RfGrid retainOptions={(o) => this.retainOptions(o)} filterOptions={[{name: 'is_self', value: false}]} loadDataFromServer={(ops, callback) => this.loadDataFromServer(ops, callback)} />
          </div>
        </Paper>
      </div>
    )
  }
};
