import React from 'react' //eslint-disable-line
import { Grid, Row, Col } from 'react-bootstrap'
import RfCard from './RfCard.jsx'
import SortFilter from './SortFilter.jsx'
import ReactPaginate from 'react-paginate'

export default class RfGrid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data: {title: '', select_values: [], cards: []}, pageCount: 5, page: 1}
    this.loadDataFromServer = this.props.loadDataFromServer
    this.retainOptions = this.props.retainOptions
  }

  componentDidMount () {
    this.updateGrid()
    console.log('API call Data Finished')
  }

  updateGrid (options) {
    var self = this
    this.props.retainOptions(options)
    console.log("RfGrid")
    console.log(options)
    console.log("Captured")
    this.loadDataFromServer(options, function (newData) {
      self.setState({data: newData, pageCount: self.state.pageCount, page: self.state.page})
    })
    console.log('Updating Grid')
  }

  handlePageClick (data) {
    var self = this
    console.log('Click')
    console.log(data.selected)
    var ops = self.props.retainOptions()
    var temp = (ops == null) ? {} : ops
    console.log(temp)
    console.log('Click2')
    temp["page"] = data.selected
    console.log(temp)
    self.updateGrid(temp)
  }
  render () {
    return (
      <div>
        <h2>{this.state.data.title}</h2>
        <Row>
          <Col sm={12} md={3}>
            <SortFilter filterOptions={this.props.filterOptions} select_values={this.state.data.select_values} updateGrid={ops => this.updateGrid(ops)} />
          </Col>
          <Col sm={12} md={9}>
            <Grid fluid>
              <Row className='show-grid'>
                {this.state.data.cards.map(c => (
                  <Col sm={6} md={4} key={Math.random().toString(16).substr(2)}>
                    <RfCard
                      title={c.title}
                      subtitle={c.subtitle}
                      link={c.link}
                      preview={c.preview}
                      icon={c.icon}
                      customClass={c.customClass} />
                  </Col>
                ))}
              </Row>
            </Grid>
          </Col>
        </Row>

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

      </div>
    )
  }
}
// <RfCell title="THIS IS TITLE" subtitle="sub sub sub sub" text="foobarfoobarfoobarfoobarfoobar" />
