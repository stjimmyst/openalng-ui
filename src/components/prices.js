import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import PriceCard from './price-card';
import { GetUserLevel } from './functions';


const Prices = React.forwardRef((props, ref) => {
    useEffect(() => {
        console.log(props.username)
    });

    if (GetUserLevel() < 2) {

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
                        {/* <div className="PriceCard">
                            <span className="home-text04">Free</span>
                            <span className="home-text05">$0</span>
                            <span className="home-text06">2 Writing</span>
                            <span className="home-text07">1 Speaking</span>
                            <span className="home-text08">1 IELTS factor analysis</span>
                            <button className="price-button button" type="button">TRY</button>
                        </div> */}
            <PriceCard planName="Beginner" price={"0$"} features={features_free} buttonText="TRY" ref={ref} buttonLink="/writing" target="_self"></PriceCard>
            <PriceCard planName="Intermediate" price={"14.99$"} features={features_intermediate} buttonText="BUY" ref={ref} buttonLink="https://buy.stripe.com/test_8wM8xAfVI728dVKdQS" target="_blank"></PriceCard>
            <PriceCard planName="Advanced" price={"24.99$"} features={features_advanced} buttonText="BUY" ref={ref} buttonLink="https://buy.stripe.com/test_5kAaFIcJwfyEcRG4gj" target="_blank"></PriceCard>
            
            {/* <div className="home-container12 PriceCard">
              <span className="home-text14">&quot;Fluency&quot;</span>
              <span className="home-text15">$29/m</span>
              <span className="home-text16">Unlimit Writing</span>
              <span className="home-text17">Unlimit Speaking</span>
              <span className="home-text18">Full IELST factor analysis</span>
              <span className="home-text19">
                Improvements and error checking
              </span>
              <a href="https://buy.stripe.com/test_cN24hkbFs5Y4eZO289" class="button" target="_blank">BUY</a>
                             */}

                    </div>
                </div>
            </div>
        )

    } else {
        return (<div></div>)
    }
})

Prices.defaultProps = {
    username: 'undefined',
}

Prices.propTypes = {
    username: PropTypes.string
}

const features_free = {
    writing: {
        name: "Writing estimation",
        value: "1 random criteria", 
        style: "grey"
    },
    speaking: {
        name: "Speaking estimation",
        value: "1 random criteria",
        style: "grey"
    },
    overall: {
        name: "Overall score",
        value: "N/A",
        style: "grey"
    },
    Error_checking: {
        name: "Errors checking",
        value: "N/A",
        style: "grey"
    },
    Improvements: {
        name: "Improvements",
        value: "N/A",
        style: "grey"
    }
}
const features_intermediate = {
    writing: {
        name: "Writing estimation",
        value: "YES",
        style: "green"
    },
    speaking: {
        name: "Speaking estimation",
        value: "YES",
        style: "green"
    },
    overall: {
        name: "Overall score",
        value: "YES",
        style: "green"
    },
    Error_checking: {
        name: "Errors checking",
        value: "N/A",
        style: "grey"
    },
    Improvements: {
        name: "Improvements",
        value: "N/A",
        style: "grey"
    }
}
const features_advanced = {
    writing: {
        name: "Writing estimation",
        value: "YES",
        style: "green"
    },
    speaking: {
        name: "Speaking estimation",
        value: "YES",
        style: "green"
    },
    overall: {
        name: "Overall score",
        value: "YES",
        style: "green"
    },
    Error_checking: {
        name: "Errors checking",
        value: "YES",
        style: "green"
    },
    Improvements: {
        name: "Improvements",
        value: "YES",
        style: "green"
    }
}


export default Prices