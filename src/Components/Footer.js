import React from 'react'
import "./Footer.css"
function Footer({ background, display, titles }) {
  return (
    <div className="footer">
      {display !== undefined && <button style={{ background: background && "white", color: background && "black" }} onClick={() => alert(`you have selected ${titles}`)}>BUY NOW</button>}
    </div>
  )
}

export default Footer
