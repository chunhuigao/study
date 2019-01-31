const homeAction = {
    changeText:(text)=>({
        type:'CHANGE_TEXT',
        text:text,
        mate:'修改homeReducer中Text的值'
    }),
    updateText:(text)=>({
        type:'UPDATE_TEXT',
        text:text,
        mate:'更新homeReducer中Text的值'
    })
}

export default homeAction
