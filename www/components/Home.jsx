import React from 'react'
import { Carousel } from 'react-bootstrap'
import { blueGrey900 } from 'material-ui/styles/colors'
import { getImages } from '../api.js'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {'submissions': [{'preview': '', 'source': ''}]}
  }

  componentDidMount () {
    this.getImages()
  }

  getImages () {
    getImages().then(function (res) {
      var submissions = []
      for (var i in res.data) {
        var images = res.data[i].preview.images['0'].resolutions
        submissions.push({'preview': images[images.length - 1]['url'], 'source': res.data[i].url})
      }
      this.setState({submissions: submissions})
    }.bind(this))
  }

  makeCarouselItem (v, index) {
    if (v['source'].endsWith('gifv')) {
      v['source'] = v['source'].slice(0, -1)
    }
    return (
      <Carousel.Item key={index}>
        <img width={window.innerWidth} src={v['source']} />
      </Carousel.Item>
    )
  }

  render () {
    return (
      <div id='Carousel' style={{position: 'fixed', backgroundColor: blueGrey900}}>
        <Carousel>
          {this.state.submissions.map(this.makeCarouselItem)}
        </Carousel>
      </div>
    )
  }
}
