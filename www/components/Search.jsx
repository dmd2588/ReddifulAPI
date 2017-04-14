import React from 'react' // eslint-disable-line
import { getSearch } from '../api.js'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

const style = {
  margin: 50,
  display: 'block'
}

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {results: [], pages: 5, currentPage: 1}
  }

  componentDidMount () {
    var self = this
    var keywords = ''
    getSearch(keywords).then(function (res) {
      self.setState({
        results: res.data[0],
        pages: res.data[1]
      })
    })
    console.log('API call Data Finished')
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>
            <h2>Content here</h2>
            <Divider />
          </div>
        </Paper>
      </div>
    )
  }
};
