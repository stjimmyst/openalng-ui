import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-element-container">
        <div className="nav-element">
        <Link to="/dmca">
            dmca policy
          </Link>
        </div>
        <div className="nav-element">
        <Link to="/terms">
            Terms and conditions
          </Link>
        </div>
        <div className="nav-element">
        <Link to="/privacy">
            Privacy policy
          </Link>
        </div>
          
      </div>
      <div className="footer-element-container">
        <h6>OpenLang was developed to check essays from the IELTS Writing Task 2 and Letters/Charts from Task 1. The service helps students practice writing for IELTS and improve their writing skills. By using this site, you agree to read and accept our terms of use, refund policy and privacy policy.
        IELTS is a registered trademark of University of Cambridge ESOL, the British Council, and IDP Education Australia. OpenLang is not affiliated, approved or endorsed by the University of Cambridge ESOL, the British Council, and IDP Education Australia. All other trademarks on this website are the property of their respective owners.</h6>
      </div>
      <div className="footer-element-container">
        <h5>OpenLang© 2023. All rights reserved.</h5>
      </div>
    </div>
  )
}

export default Footer
