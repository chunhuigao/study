import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//引入helloAction
import helloAction from './helloAction.js'
import './hello.css'
 class Hello extends Component {
  constructor(props){
    super(props)
    this.state = {
      title:'学习redux'
    }
  }
  changeTitle(){
    let title = '学习redux' + Math.ceil(Math.random()*100)
    // this.setState({
    //   title:title
    // })
    let {actions} = this.props
    actions.changeName(title)

   
  }
  render() {
    //此处打印，应该可以看到actions
    console.log(this.props)
    let {prop} = this.props
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h3>我是来自redux数据{prop.name}</h3>
        <button className="btn" onClick={()=>{this.changeTitle()}}>点击我改变标题</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.helloReducer
  }
}

//使用mapDispatchToProps绑定helloAction
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions:bindActionCreators(helloAction,dispatch)
  }
}
//将mapDispatchToProps作为参数给connect
export default connect(mapStateToProps,mapDispatchToProps)(Hello)
