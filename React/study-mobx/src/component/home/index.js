import React, { Component } from 'react'


import { observable, computed, useStrict, action } from 'mobx';
import { observer,inject } from 'mobx-react';
inject('indexMobx')

@observer
class Home extends Component {
  render() {
    let { HomeMobx } = this.props
    console.log(this.props)
    return (
      <div>
        学习mobx
        <div>{HomeMobx.name}</div>
      </div>
    )
  }
}
export default Home