const initState = {
    text:'这是学习saga的数据'
}

export default (state=initState,action) => {
    //console.log(action)
    switch (action.type) {
        case 'UPDATE_TEXT':
            return {...state,text:action.text}
        default:
            return state
    }
}
