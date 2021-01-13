import React from 'react'
import "./Header.css"
function Header({ titles, prices, background }) {
  return (
    <div className="header">
      {titles !== undefined && <h4>{titles}</h4>}
      {titles !== undefined && <span>1 user</span>}
      {prices !== undefined && <p>{prices}/</p>}
    </div>
  )
}

export default Header
