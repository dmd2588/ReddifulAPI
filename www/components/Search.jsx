import React from 'react' // eslint-disable-line
import { getSearch } from '../api.js'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import ReactPaginate from 'react-paginate'
import { Row } from 'react-bootstrap'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

const style = {
  margin: 50,
  display: 'block'
}

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    // trim whitespaces from keywords
    this.state = {results: [], pageCount: 5, page: 0, keywords: 'deathakissaway slime', andResults: [], orResults: []}
  }

  componentWillMount () {
    var self = this
    var keywords = this.state.keywords
    getSearch(keywords).then(function (res) {
      // for (var result in res.data) {
        // console.log(JSON.stringify(res.data[result]))
      // }
      self.setState({
        results: res.data[0],
        andResults: res.data[0].filter(function (r) {
          var pattAnd = new RegExp('^' + keywords.split(' ').map(function (r2) {
            return '(?=.*\\b' + r2 + '\\b)'
          }).join('') + ('.*$'), 'i')
          console.log(pattAnd)
          console.log(pattAnd.test(JSON.stringify(r)))
          return pattAnd.test(JSON.stringify(r))
        }),
        orResults: res.data[0].filter(function (r) {
          var pattOr = new RegExp('(' + keywords.replace(/ /g, '|') + ')', 'i')
          var pattAnd = new RegExp('^' + keywords.split(' ').map(function (r2) {
            return '(?=.*\\b' + r2 + '\\b)'
          }).join('') + ('.*$'), 'i')
          // console.log(pattOr)
          // console.log(pattOr.test(JSON.stringify(r)))
          return pattOr.test(JSON.stringify(r)) && !pattAnd.test(JSON.stringify(r))
        }),
        pageCount: res.data[1]
      })
    })
    console.log('API call Data Finished')
  }

  /*
  updateSearchPage (options) {
    var self = this
    var ops = (options == null) ? {} : options
    this.props.retainOptions(ops)
    console.log('RfGrid')
    console.log(options)
    console.log('Captured')
    this.loadDataFromServer(options, function (newData) {
      self.setState({data: newData, pageCount: newData.pages, page: self.state.page})
    })
    console.log('Updating Grid')
  }

handlePageClick (data) {
    var self = this
    var ops = self.props.retainOptions({})
    var temp = (ops == null) ? {} : ops
    temp['page'] = data.selected
    console.log(temp)
   // self.updateGrid(temp)
  }
   */
  handlePageClick (data) {
    console.log(data.selected)
  }

  handleItemClick (data, evt) {
    console.log(data)
    if (data.hasOwnProperty('submission_id')) {
      this.props.history.push('/posts/detail/' + data['submission_id'])
    } else if (data.hasOwnProperty('subreddit_id')) {
      this.props.history.push('/subreddits/detail/' + data['subreddit_id'])
    } else if (data.hasOwnProperty('comment_id')) {
      this.props.history.push('/comments/detail/' + data['comment_id'])
    } else if (data.hasOwnProperty('redditor_id')) {
      this.props.history.push('/users/detail/' + data['redditor_id'])
    } else {
      console.log('Something Went Horribly Wrong')
    }
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>
            <Row>
              <List>
                <Subheader>Search Results # {((this.state.page) * this.state.results.length) + 1} - {(this.state.results.length) * (this.state.page + 1)}</Subheader>
              </List>
              <List>
                <Subheader>And Results</Subheader>

                {this.state.andResults.map(r => {
                  var resultsStr = JSON.stringify(r)
                  return (
                    <div key={Math.random().toString(16).substr(2)}>
                      <ListItem primaryText={resultsStr} onClick={(e) => this.handleItemClick(r, e)} />
                      <Divider />

                    </div>

                  )
                })}

              </List>
              <Divider />

              <List>
                <Subheader>Or Results</Subheader>
                {this.state.orResults.map(r => {
                  var resultsStr = JSON.stringify(r)
                  return (
                    <div key={Math.random().toString(16).substr(2)}>
                      <ListItem primaryText={resultsStr} onClick={(e) => this.handleItemClick(r, e)} />
                      <Divider />

                    </div>

                  )
                })}
              </List>
            </Row>
            <Row>
              <ReactPaginate previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={<a href=''>...</a>}
                breakClassName={'break-me'}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick.bind(this)}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'} />
            </Row>

          </div>
        </Paper>
      </div>
    )
  }
};
