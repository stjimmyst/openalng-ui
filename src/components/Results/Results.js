import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { getCardColor, getBlurColor } from '../functions';

const Results = (props) => {


    const [overall, setOverall] = useState(calculateOverall)
    function calculateOverall() {
        console.log(props)
        let l = Object.keys(props.results.estimations).length
        let tmp = 0

        for (const key in props.results.estimations) {
            console.log(props.results.estimations[key].band)
            tmp = tmp + props.results.estimations[key].band
        }
        return (Math.round((tmp / l) * 2) / 2)
    }

    function generateBlockResult() {
        return Object.keys(props.results.estimations).map((key, v) => {
            let card = "sec-info__element " + getCardColor(props.results.estimations[key].band) + " " + getBlurColor(props.results.estimations[key].stub)

            return (
                <div class={card}>
                    <div class="sec-info__left">
                        <h3 class="sec-info__title-element">{props.results.estimations[key].name}
                        </h3>
                        <p class="sec-info__nam-element">{props.results.estimations[key].band}</p>
                    </div>
                    <div class="sec-info__rignt">
                        <p class="sec-info__text-element">{props.results.estimations[key].comment}</p>
                    </div>
                    <div class="sec-info__element-error">Please LogIn to see results</div>
                </div>
            )
        })
    }
    function generateBlockRecomendation() {
        return Object.keys(props.results.recommendations).map((key, v) => {
            let card = "sec-info__element "  + getBlurColor(props.results.recommendations[key].stub)

            return (
                <div class={card}>
                    <div class="sec-info__left">
                        <h3 class="sec-info__title-element">{props.results.recommendations[key].name}</h3>
                    </div>
                    <div class="sec-info__rignt">
                        <p class="sec-info__text-element">{props.results.recommendations[key].comment}</p>
                    </div>
                    <div class="sec-info__element-error">Please LogIn to see results</div>
                </div>
            )
        })
    }

    return (
        <>
        <section class="sec-info sec-info_active">
            <div class="container-info">
                <div class="title-row">
                    <h1 class="main-title title-row__title">
                        Results
                    </h1>
                </div>
                <div class="sec-info__elements-wrapper">
                    {generateBlockResult()}

                    <div class="sec-info__counter">
                        Overall: <span>{overall}</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="sec-info recommend-sec sec-info_active">
                <div class="container-info">
                    <div class="title-row">
                        <h1 class="main-title title-row__title">
                            Recommendations
                        </h1>
                    </div>
                    <div class="sec-info__elements-wrapper">
                        {generateBlockRecomendation()}
                    </div>    
                </div>
            </section>
        </>

    )
}
Results.defaultProps = {
    // results: {
    //     level: 1,
    //     recommendations: {
    //         errors: {
    //             name: "Errors",
    //             stub: false,
    //             comment: "some text here"
    //         },
    //         improvements: {
    //             name: "Improvements",
    //             stub: true,
    //             comment: "some improvements text"
    //         }

    //     },
    //     estimations: {
    //         ta: {
    //             name: "Task Achevement",
    //             band: 7,
    //             comment: "some text here",
    //             stub: true
    //         },
    //         cc: {
    //             name: "Coherence and Cohasion",
    //             band: 4,
    //             comment: "some text and there",
    //             stub: false
    //         },
    //         cb: {
    //             name: "Coherence and Cohasion1",
    //             band: 5,
    //             comment: "some text and there again",
    //             stub: false
    //         },
    //         cra: {
    //             name: "cra",
    //             band: 7,
    //             comment: "some text and there again",
    //             stub: false
    //         },
    //     }
    // }
}

Results.propTypes = {
    results: PropTypes.object,
}

export default Results