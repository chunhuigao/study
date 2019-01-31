const initState = {
    title:'我是otherReducer数据'
}

export default (state=initState,action) => {
    switch (action.type) {
        case "CHANGE_TITLE":
            return {...state,title:action.text}
        default:
            return state
    }
}
