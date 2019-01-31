const exampleAction = {
    asyncThing:()=>{
        return (dispatch, getState) =>{
            // fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
            //     .then(res => {
            //         dispatch(exampleAction.asyncSuccess('我是成功回调'))  
            //     }).catch(e => {
            //         dispatch(exampleAction.asyncError('我是成功回调'))  
            // });
            setTimeout(() => {
                let sign = Math.random() >= 0.5 ? true : false;
                console.log(sign)
                sign ? dispatch(exampleAction.asyncSuccess('我是成功数据'))  : dispatch(exampleAction.asyncError('我是失败数据'))  
            }, 2000);
        }
    },
    asyncSuccess:(text)=>({
        type:'SUCCESS',
        text:text,
        mate:'异步成功操作'
    }),
    asyncError:(text)=>({
        type:'ERROR',
        text:text,
        mate:'异步成功操作'
    })
}
export default exampleAction
