import React from 'react';
import './userInfor.css'
class userInfor extends React.Component{
    AjaxData(){
        console.log('ajax数据')
    }
    render(){
        return (
            <div>
                <h2>用户信息</h2>
                <h2 className='infor'>这部分主要是适配移动端</h2>
                <div className='tigs'>
                    依照设计稿750px适配移动端宽度
                </div>
                <div className='leftRight'>
                    <div className='left'>
                        这是左边300px;
                    </div>
                    <div className='right'>
                        这是右边450px;
                    </div>
                </div>
                <button onClick={()=>{this.AjaxData()}}>这是一个点击事件</button>
            </div>
        )
    }
}
export default userInfor