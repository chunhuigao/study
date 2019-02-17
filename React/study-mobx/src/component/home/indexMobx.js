
import { observable } from 'mobx'

class IndexStore {
    @observable name;
    constructor(){
        this.name = '我是来之mobx的数据'
    }
}

const Store = new IndexStore()
export default Store


