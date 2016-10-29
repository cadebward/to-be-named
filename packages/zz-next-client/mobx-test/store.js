import { extendObservable, action, observable, computed, asStructure} from 'mobx'

// class UiState {
//   @observable language = "en_US"
//   @observable pendingRequestCount = 0

//   // asStructure makes sure observer won't be signaled only if the
//   // dimensions object changed in a deepEqual manner
//   @observable windowDimensions = asStructure({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   constructor() {
//     // jquery.resize(() => {
//     //   this.windowDimensions = getWindowDimensions()
//     // })
//   }

//   @computed get appIsInSync() {
//     return this.pendingRequestCount === 0
//   }
// }

// singleton = new UiState()
// export default singleton

class Timer {
  constructor() {
    extendObservable(this, {
      start: Date.now(),
      current: Date.now(),
      get elapsedTime() {
        return (this.current - this.start) + "seconds"
      },
      tick: action(function () {
        this.current = Date.now()
      })
    })
  }
}

const singleton = new Timer()

export default singleton



// store.js

// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'

// export const reducer = (state = { lastUpdate: 0, light: false }, action) => {
//   switch (action.type) {
//     case 'TICK': return { lastUpdate: action.ts, light: !!action.light }
//     default: return state
//   }
// }

// export const startClock = () => dispatch => {
//   setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
// }

// export const initStore = (reducer, initialState, isServer) => {
//   if (isServer && typeof window === 'undefined') {
//     return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
//   } else {
//     if (!window.store) {
//       window.store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
//     }
//     return window.store
//   }
// }
