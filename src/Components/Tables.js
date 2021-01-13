import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import "./Tables.css"
function Tables({ background, prices, titles, features, display }) {
  return (
    <div className="table" style={{ background: !background && "none", zIndex: !background && "0", boxShadow: !background && "none", color: background && "white" }}>
      <Header background={background} titles={titles} prices={prices} />
      <Main features={features} display={display} />
      <Footer background={background} display={display} titles={titles} />
    </div>
  )
}

export default Tables
