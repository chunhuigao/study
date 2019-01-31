
import {combineReducers} from 'redux'
import helloReducer from './component/hello/helloReducer.js'
import otherReducer from './component/other/otherReducer.js'
//import exampleReducer from './component/example/exampleReducer.js'
import exampleReducer from './component/example/exampleReducer.js'
console.log(otherReducer,exampleReducer)
const rootReducer = combineReducers({
    helloReducer,
    otherReducer,
    exampleReducer
})
export default rootReducer
