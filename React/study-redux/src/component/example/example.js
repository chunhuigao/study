import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import exampleAction from './exampleAction.js'
class Example extends Component {
  asyncFn(){
    let {exampleAction} = this.props
    exampleAction.asyncThing()
    console.log(this.props)
  }
  render() {
    let {exampleProp} = this.props;
    console.log(exampleProp)
    return (
      <div>
        <h3>异步操作</h3>
        <h4>{exampleProp.text}</h4>
        <button className='btn' onClick={()=>{this.asyncFn()}}>我要进行异步操作</button>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state)
  return {
    exampleProp: state.exampleReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    exampleAction:bindActionCreators(exampleAction,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Example)
