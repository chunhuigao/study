import { put, call, take, select } from 'redux-saga/effects' 
export function* homeChangeFlow(){
     while(true){
        let request = yield take('CHANGE_TEXT');
        //console.log(9,request)
        console.time("test1");
        let res = yield call((value)=>{
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(request.text)
                }, 2000);
                
            })
            
        },'南京航空');
        console.timeEnd("test1");
        yield put({
            type:'UPDATE_TEXT',
            text:res
        });

    //     //console.log(request)
     }
}
