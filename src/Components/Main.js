import React from 'react'
import "./Main.css"
import YES from "../assests/yes_icon.png"
import NO from "../assests/no_icon.png"
function Main({ features, display }) {
  return (
    <div className="main">
      {features.map((feature, i) => display !== undefined && (<div className="main__feature"><img src={display[i] ? YES : NO} alt="" /><p>{feature}</p></div>))}
      {display === undefined && features.map((feature, i) => <div style={{ justifyContent: "center" }} className="main__feature"><p>{feature}</p></div>)}
    </div>
  )
}

export default Main
