import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="MenuText">
        {props.About}
      </Link>
      <Link to="/writing" className="navigation-links-navlink1">
        {props.Writing}
      </Link>
      <Link to="/speaking" className="navigation-links-navlink2 MenuText">
        {props.Speaking}
      </Link>
      <Link to="/" className="navigation-links-navlink3">
        {props.Price}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  Writing: 'Writing',
  rootClassName: '',
  About: 'About',
  Price: 'Price',
  Speaking: 'Speaking',
}

NavigationLinks.propTypes = {
  Writing: PropTypes.string,
  rootClassName: PropTypes.string,
  About: PropTypes.string,
  Price: PropTypes.string,
  Speaking: PropTypes.string,
}

export default NavigationLinks
