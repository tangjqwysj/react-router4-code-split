import React from 'react'
import { stateKey, view as Counte, reducer } from '../components/counter'
import store from '../store'
import {combineReducers} from 'redux'

const initialValue = 100

const Counter = () => {
	const state = store.getState()
	store.reset(
		combineReducers({
			...store._reducers,
			counter: reducer
		}),
		{
			...state,
			[stateKey]: state[stateKey] || initialValue
		}
	)
	return (
		<div>
			<Counte />
		</div>
	)
}
export default Counter
