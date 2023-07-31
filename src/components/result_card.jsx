import React, { useState, useEffect, useRef } from 'react'
import { FillInTheGapsSplitter } from './functions';
import PropTypes from 'prop-types'

const ResultCard = (props) => {

  useEffect(
    () => {


      var cards = document.querySelectorAll('.card');

      [...cards].forEach((card) => {
        card.addEventListener('click', function () {
          card.classList.toggle('is-flipped');
        });
      });
    }
  ,[])

  function generateCards(errors) {
    return errors.map(elem => {
      return (
        <div class="scene scene--card">
          <div class="card">
            <div class="card__face card__face--front">
              <div className="card-number">
              {elem.id}
              </div>

            </div>
            <div class="card__face card__face--back">
              <div className="card-answer-header">
                Answer
              </div>
              <div className="card-answer-value">
              {elem.correct_answer}
              </div>
              <div className="card-explanation">
              {elem.explanation}
              </div>
            </div>
          </div>
        </div>
      )
    })
  }


  return (
    <div className="cards-container">
								{generateCards(props.errors)}
								</div>
  )

}
ResultCard.defaultProps = {
  errors: [{question_number:1},{question_number:1},{question_number:1}]
}

ResultCard.propTypes = {
	errors: PropTypes.array,
  question_number: PropTypes.number
}

export default ResultCard