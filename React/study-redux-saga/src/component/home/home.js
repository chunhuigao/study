import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import homeActions from './homeAction.js'
 class Home extends Component {
  changeName(){
    let {homeAction} = this.props;
    let index = Math.ceil(Math.random() * 100)
    homeAction.changeText('改变数据'+index)
   // console.log(homeAction)
  }
  render() {
    let {homeProp} = this.props 
    return (
      <div>
        <h3>学习saga</h3>
        <h3>我是saga数据:{homeProp.text}</h3>
        <button className="btn" onClick={()=>{this.changeName()}}>点击切换数据</button>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    homeProp: state.homeReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    homeAction:bindActionCreators(homeActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)

