const helloAction = {
    changeName:(text)=>({
        type:"CHANGE_NAME",
        text:text,
        mate:'用于改变helloReducer中name值'
    })
}
export default helloAction
