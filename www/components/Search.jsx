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
    this.state = {results: [], pageCount: 5, page: 1}
  }

  componentDidMount () {
    var self = this
    var keywords = 'deathakissaway'
    getSearch(keywords).then(function (res) {
      console.log(res.data)
      for (var result in res.data) {
        console.log(JSON.stringify(res.data[result]))
      }
      self.setState({
        results: res.data
        // results: res.data[0],
        // pages: res.data[1]
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

  }

  handleItemClick (data, evt) {
    console.log(data)
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>
            <Row>

              <List>
                <Subheader>Search Results</Subheader>

                {this.state.results.map(r => {
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
