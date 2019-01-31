import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import helloAction from '../hello/helloAction.js'
 class Other extends Component {
  changeName(){
    let {helloAction} = this.props;
    let text = 'other' + (Math.random() *100)
    helloAction.changeName(text)
  }
  render() {
    let {otherProp} = this.props
    console.log(this.props)
    return (
      <div>
        <h3>我是其他组件</h3>
        <button className="btn" onClick={()=>{this.changeName()}}>我是其他组件的按钮</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        otherProp: state.helloReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        helloAction:bindActionCreators(helloAction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Other)
