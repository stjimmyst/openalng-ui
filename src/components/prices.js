import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

const Prices = (props) => {
    useEffect(() => {
        console.log(props.username)
    });

    if (props.username == "undefined") {

        return (

            <div id="PricesHeader" className="home-prices-container">
                <div
                    id="PriceContainer"
                    className="OlContainerContent"
                >
                    <div className="home-container07">
                        <h1 className="container-header-text">Prices</h1>
                    </div>
                    <div className="home-container08">
                        <h1 className="container-description-text">Choose the best option</h1>
                    </div>
                    <div className="home-container09">
                        <div className="PriceCard">
                            <span className="home-text04">Free</span>
                            <span className="home-text05">$0</span>
                            <span className="home-text06">2 Writing</span>
                            <span className="home-text07">1 Speaking</span>
                            <span className="home-text08">1 IELTS factor analysis</span>
                            <button className="price-button button">Learn More</button>
                        </div>
                        {/* <div className="PriceCard">
              <span className="home-text09">&quot;Intermediate&quot;</span>
              <span className="home-text10">$9/m</span>
              <span className="home-text11">Unlimit Writing</span>
              <span className="home-text12">1 Speaking</span>
              <span className="home-text13">Full ILETS factor analysis</span>
              <button className="home-button2 button">Learn More</button>
            </div>
            <div className="home-container12 PriceCard">
              <span className="home-text14">&quot;Fluency&quot;</span>
              <span className="home-text15">$29/m</span>
              <span className="home-text16">Unlimit Writing</span>
              <span className="home-text17">Unlimit Speaking</span>
              <span className="home-text18">Full IELST factor analysis</span>
              <span className="home-text19">
                Improvements and error checking
              </span>
              <button className="home-button3 button">Learn More</button>
            </div> */}
                    </div>
                </div>
            </div>
        )
    } else {
        return (<div></div>)
    }
}

Prices.defaultProps = {
    username: 'undefined',
}

Prices.propTypes = {
    username: PropTypes.string
}


export default Prices