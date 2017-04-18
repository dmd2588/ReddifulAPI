'use strict'
import React from 'react'
import Aster from './Aster.jsx'
import axios from 'axios'
import qs from 'qs'
import Paper from 'material-ui/Paper'

const style = {
  margin: 50,
  display: 'block'
}

export default class Visualization extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'generalChartData': [
        {name: 'loading', percent: 1}
      ],
      'chartSeries': [
        {field: 'loading', name: 'loading'}
      ]}
    var self = this
    this.getData().then(function (res) {
      var chartData = []
      var chartSeries = []
      var max = 0
      for (var i in res.data) {
        chartData.push({name: res.data[i].name,
          numSeries: res.data[i].numSeries,
          numComics: res.data[i].numComics})
        if (res.data[i].numComics > max) {
          max = res.data[i].numComics
        }
        chartSeries.push({field: res.data[i].name,
          name: res.data[i].name})
      }
      for (i in chartData) {
        chartData[i].percent = chartData[i].numComics / max
      }
      self.setState({
        'generalChartData': chartData,
        'chartSeries': chartSeries
      })
    })
  }

  getData () {
    var endpoint = 'https://marveldb-162206.appspot.com/api/characters'
    var params = {
      'pagination': JSON.stringify({'page': 0, 'pageSize': 15}),
      'sortOptions': JSON.stringify({'order': 'desc', 'field': 'numSeries'}),
      'filterOptions': JSON.stringify([])
    }
    return axios.get(endpoint + '?' + qs.stringify(params))
  }

  value (d) {
    return 1
  }

  name (d) {
    return d.name
  }

  percent (d) {
    return d.percent
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <Aster
            innerRadius={50}
            data={this.state.generalChartData}
            chartSeries={this.state.chartSeries}
            value={this.value}
            name={this.name}
            percent={this.percent}
          />
        </Paper>
      </div>
    )
  }
}
