import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import "./Tables.css"
function Tables({ background, prices, titles, features, display }) {
  return (
    <div className="table" style={{ background: !background && "none", zIndex: !background && "0", boxShadow: !background && "none", color: background && "white" }}>
      {/* header contains title and price details*/}
      <Header background={background} titles={titles} prices={prices} />

      {/* Main component (i.e) body of the table contains the features specified */}
      <Main features={features} display={display} />

      {/* Footer component contains a button */}
      <Footer background={background} display={display} titles={titles} />
    </div>
  )
}

export default Tables
