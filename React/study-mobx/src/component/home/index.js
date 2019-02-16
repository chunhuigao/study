import React, { Component } from 'react'


import { observable, computed, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';


class data {

}

@observer
class Home extends Component {
  render() {
    return (
      <div>
        学习mobx
      </div>
    )
  }
}
export default Home