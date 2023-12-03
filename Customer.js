import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment } from './app/counter/CounterSlics'

const Customer = () => {
    const dispatch = useDispatch()
    const count = useSelector(state=>state.counter.count)
  return (
    <div>Customer {count}
    <button onClick={()=> {dispatch(increment())} }>Add</button>
    </div>
  )
}

export default Customer