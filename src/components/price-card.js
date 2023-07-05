import React from 'react'

import PropTypes from 'prop-types'

import ContainerHeader from './container-header'
import ContainerScore from './container-score'
import ContainerTextResult from './container-text-result'
import './card-result.css'
import { logIn } from './functions'
import { GetUserName } from './functions'

const PriceCard = React.forwardRef((props, ref) => {

    function handleClick() {
        if (ref.current!= null) {
        ref.current.click();
        } else {

        }
      }
      function getButton(props) {
        console.log(ref)
        console.log(ref.current)
        if (GetUserName()=="undefined") {
            console.log("only login without href")
            return (
            <a class="button" target="_blank" onClick={handleClick} >{props.buttonText}</a>
            )
        } else {
            console.log("href without login")
            return (
                <a href={props.buttonLink} class="button" target="_self">{props.buttonText}</a>   
            )
        }
      }

    function featuresRender(features) {
        console.log(features)
        return Object.keys(features).map((key, v) => {
            console.log(key)
            console.log(v)
            let style = "price-card-plan-feature-value-text"
            if (features[key].style == 'grey') {
                style = style + " price-card-plan-feature-value-text-gray"
            } else if (features[key].style == 'green') {
                style = style + " price-card-plan-feature-value-text-green"
            }
            return (
                <div className='price-card-plan-feature-container'>
                    <div className='price-card-plan-feature-name-container'>
                        <h1 className='price-card-plan-feature-name-text'>{features[key].name}</h1>
                    </div>
                    <div className='price-card-plan-feature-value-container'>
                        <h1 className={style}>{features[key].value}</h1>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="PriceCard">
            <div className='price-card-plan-header-container'>
                <h1 className='price-card-plan-header-text'>{props.planName}</h1>
            </div>
            <div className='price-card-plan-price-container'>
                <h1 className='price-card-plan-price-text'>{props.price}</h1>
                <h1 className='price-card-plan-price-text-description'>monthly</h1>
            </div>
            <div className='price-card-plan-features-container'>
                {featuresRender(props.features)}
            </div>
            <div className='price-card-plan-button-container'>
                {getButton(props)}
            </div>
            {/* <button className="price-button button" type="button" onClick={handleClick}>LOGIN</button> */}
            {/* <span className="home-text09">{props.planName}</span> */}
            {/* <span className="home-text10">{props.price}</span>
        <span className="home-text11">Unlimit Writing</span>
        <span className="home-text12">1 Speaking</span>
        <span className="home-text13">Full ILETS factor analysis</span> */}

        </div>
    )
})

PriceCard.defaultProps = {
    planName: 'default',
    price: '15',
    features: {
        writing: {
            name: "Writing",
            value: "some features"
        },
        speaking: {
            name: "Speaking",
            value: "some speaking features"
        }
    }
}

PriceCard.propTypes = {
    planName: PropTypes.string,
    price: PropTypes.string,
    features: PropTypes.object,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    target: PropTypes.string
}

export default PriceCard