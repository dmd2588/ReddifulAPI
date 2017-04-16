"use strict";
import React from 'react'
import Aster from './Aster.jsx'

export default class Visualization extends React.Component {
  constructor (props) {
    super(props)
    this.state = {'generalChartData': [],
                  'chartSeries': []}
  }

  value (d) {
    return 1
  }

  name = function(d) {
    return d.age
  }

  percent = function(d) {
    return d.percent
  }
  
  render () {
    return (
      <Aster
        innerRadius={50}
        data= {this.state.generalChartData}
        chartSeries= {this.state.chartSeries}
        value = {this.value}
        name = {this.name}
        percent = {this.percent}
      />
    )
  }
}
