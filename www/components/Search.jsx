import React from 'react' // eslint-disable-line
import { getSearch } from '../api.js'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import ReactPaginate from 'react-paginate'
import { Row } from 'react-bootstrap'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import searchStyle from './searchStyles.css'
import Highlighter from 'react-highlight-words'

const style = {
  margin: 50,
  display: 'block'
}

const highlightStyle = {
  backgroundColor: '#FFFF99'
}
export default class Search extends React.Component {
  constructor (props) {
    super(props)
    // trim whitespaces from keywords
    var query = decodeURIComponent(this.props.match.params.query)
    console.log(query)
    this.state = {results: [], pageCount: 5, page: 0, keywords: query, andResults: [], orResults: []}
  }

  componentWillMount () {
    this.updateSearchPage()
    console.log('API call Data Finished')
  }

  updateSearchPage (page) {
    var toPage
    if (page === undefined) {
      toPage = this.state.page
    } else {
      toPage = page
    }

    var self = this
    var keywords = this.state.keywords
    getSearch(keywords, toPage).then(function (res) {
      var kwArray = keywords.split(' ')
      var containsAll = str => kwArray.reduce((all, kw) => all && str.indexOf(kw) !== -1, true)
      self.setState({
        results: res.data[0],
        andResults: res.data[0].filter(r => containsAll(JSON.stringify(r))),
        orResults: res.data[0].filter(r => !containsAll(JSON.stringify(r))),
        pageCount: res.data[1]
      })
    })
    console.log('Updating Grid')
  }

  handlePageClick (data) {
    console.log(data.selected)
    this.setState({page: data.selected})
    this.updateSearchPage(data.selected)
  }

  handleItemClick (data, evt) {
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
                  var resultsStr = generatePreview(r, this.state.keywords.split(' '))
                  return (
                    <div key={Math.random().toString(16).substr(2)}>
                      <ListItem className={searchStyle.textStyle} primaryText={<Highlighter
                        highlightStyle={highlightStyle}
                        searchWords={this.state.keywords.split(' ')}
                        textToHighlight={resultsStr} />}
                        onClick={(e) => this.handleItemClick(r, e)} />
                      <Divider />

                    </div>

                  )
                })}

              </List>
              <Divider />

              <List>
                <Subheader>Or Results</Subheader>

                {this.state.orResults.map(r => {
                  var resultsStr = generatePreview(r, this.state.keywords.split(' '))
                  return (
                    <div key={Math.random().toString(16).substr(2)}>
                      <ListItem className={searchStyle.textStyle} primaryText={<Highlighter
                        highlightStyle={highlightStyle}
                        searchWords={this.state.keywords.split(' ')}
                        textToHighlight={resultsStr} />} onClick={(e) => this.handleItemClick(r, e)} />
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

function generatePreview (item, keywords) {
  return Object.keys(item)
  .map(k => item[k])
  .filter(v => typeof v === 'string')
  .filter(v => keywords.find(kw => v.indexOf(kw) !== -1) != null)
  .map(v => v.replace(/\[(.+)\]\(.+\)/g, '$1')) // Replace markdown url syntax with title
  .map(v => {
    // Trim search results
    var included = keywords.filter(kw => v.indexOf(kw) !== -1)
    var start = included.reduce((min, kw) => Math.min(v.indexOf(kw), min), v.length)
    var end = included.reduce((max, kw) => Math.max(v.indexOf(kw) + kw.length, max), 0)
    return v.substring(start - 100, end + 100)
  })
  .join('... ')
}
