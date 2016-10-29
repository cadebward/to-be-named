import { action, observable } from 'mobx'

class Store {

  @observable cash = 0;

  @observable gear = [];

  @action addOne() {
    this.cash++
  }

  @action buyItem(item) {
    if (this.cash < item.price) return
    this.cash -= item.price
    this.gear.push(item.key)
  }

}

const store = new Store()
store.addOne = store.addOne.bind(store)
store.buyItem = store.buyItem.bind(store)

export default store
