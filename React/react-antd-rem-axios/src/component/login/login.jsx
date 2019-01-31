import React from 'react';
import './login.css'
import { loginHttp  } from '../../common/Api.js'
import { Button } from 'antd';
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            str: "hello，world",
            exampleData:'',
        };
    }
    //将要渲染元素
    componentWillMount() {
        console.log("componentWillMount");
    }
    //渲染完成
    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
    }
    //调用setState会调用shouldComponentUpdate，主要判断用户时候需要重新渲染数据，优化渲染效率
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    jumpPag(){
        this.props.history.push('/users')
    }
    clickSetState(){
        this.setState({
            str:'出来吧，皮卡丘'
        })
    }

    getAjaxData(){
        loginHttp.loginAjax({
            pageSize:12,
            pageNum:1,
            type:'NEW_MARKETING',
        })
        .then((res)=> {
            console.log(res.data.data);
            this.setState({
                exampleData:res.data.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render(){
        console.log(this.state)
        let oDiv;
        if(this.state.exampleData){
            console.log(111)
            oDiv = <div>
                我的后台数据，我来了，{this.state.exampleData.yimeiUrl}
            </div>
        }
        
        return (
            <div>
               <h2 className='login-title'>这的登录页面</h2> 
               <h2 className='styleCss'>组件生命周期，在constructor函数创建的数据</h2> 
               <h2>{this.state.str}</h2>
                <Button onClick={()=>{this.jumpPag()}}>点击跳转</Button>
                <br/>
                <br/>
                <Button onClick={()=>{this.clickSetState()}}>点击设置state</Button>
                <br/>
                <br/>
                <Button onClick={()=>{this.getAjaxData()}}>点击获取数据</Button>
                <div>
                    {oDiv}
                </div>
            </div>
        )
    }
}
export default Login