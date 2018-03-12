import React from 'react'
import { increment, decrement } from './actions';
import { connect } from 'react-redux'

const btnStyle={
  margin:'10px'
}
export const stateKey = 'counter'
const Counter = ({onIncrement,onDecrement,counter}) => {
  return (
    <div>
      <button style={btnStyle} onClick={onIncrement}>＋</button>
      <button style={btnStyle} onClick={onDecrement}>－</button>
      <span>counter:{counter}</span>
    </div>
  )
}
const mapDispatchToProps = {
  onIncrement:increment,
  onDecrement:decrement
}
const mapStateToProps = (state, ownProps) => ({
  counter:state[stateKey] || 0
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)