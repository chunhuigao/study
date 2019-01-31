
import { fork } from 'redux-saga/effects'
import { homeChangeFlow } from './component/home/homeSaga.js'

export default function* rootSaga(){
    yield fork(homeChangeFlow)
}
