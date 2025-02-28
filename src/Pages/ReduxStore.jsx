import React from 'react'
import { createStore } from 'redux'
const initial={
productid:'',
cart:0
}
const ReduxStore = (state=initial,action) => {
  switch(action.type){
    case 'Add':{
      return{state,productid:action.ids,cart:action.count}
    }

    default:
      return(state)
  }
}
const store=createStore(ReduxStore)
export default store
