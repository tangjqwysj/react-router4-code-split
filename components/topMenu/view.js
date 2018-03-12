import React from 'react'
import {Link} from 'react-router-dom'

const liStyle={
  display:'inline-block',
  margin:'10px'
}
const TopMenu = () => {
  return (
    <ul>
      <li style={liStyle}><Link to='/home'>Home</Link></li>
      <li style={liStyle}><Link to='/about'>About</Link></li>
      <li style={liStyle}><Link to='/counter'>Counter</Link></li>
    </ul>
  )
}

export default TopMenu