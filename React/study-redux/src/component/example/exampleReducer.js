const initState={
    text:'我是用来测试异步操作的',
    sign:null
}
export default (state=initState,action) =>{
    console.log(action)
    switch (action.type) {
        case 'SUCCESS':
            return {...state,text:action.text,sign:'success'}
        case 'ERROR':
            return {...state,text:action.text,sign:'error'}
        default:
            return state
    }
}
