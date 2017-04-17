'use strict'
import React from 'react'
import Aster from './Aster.jsx'

export default class Visualization extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'generalChartData': [
        {age: '<5', population: 1, percent: 0.5},
        {age: '5-13', population: 1, percent: 0.25},
        {age: '14-17', population: 1, percent: 0.5},
        {age: '18-24', population: 1, percent: 1},
        {age: '25-44', population: 1, percent: 0.75},
        {age: '45-64', population: 1, percent: 0.1},
        {age: '≥65', population: 1, percent: 0.2}
      ],
      'chartSeries': [
        {
          'field': '<5',
          'name': 'less than 5'
        },
        {
          'field': '5-13',
          'name': '5 to 13'
        },
        {
          'field': '14-17',
          'name': '14 to 17'
        },
        {
          'field': '18-24',
          'name': '18 to 24'
        },
        {
          'field': '25-44',
          'name': '25 to 44'
        },
        {
          'field': '45-64',
          'name': '45 to 64'
        }
      ]}
  }

  value (d) {
    return 1
  }

  name (d) {
    return d.age
  }

  percent (d) {
    return d.percent
  }

  render () {
    return (
      <Aster
        innerRadius={50}
        data={this.state.generalChartData}
        chartSeries={this.state.chartSeries}
        value={this.value}
        name={this.name}
        percent={this.percent}
      />
    )
  }
}
