import React, { useState, useEffect, useRef } from 'react'

const MobNav = (props) => {
	const [status, setStatus] = useState("mob-nav");

    function changeStatus() {
        if (status == "mob-nav") {
			setStatus("mob-nav activ-mob-nav")
		} else {
			setStatus("mob-nav")
		}
    }

    return (
        <>
        <div className={status} onClick={() => changeStatus()} >
			
			<div className="mob-nav__close">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd"
						d="M24.6746 6.89679C25.1085 6.46287 25.1085 5.75935 24.6746 5.32544C24.2406 4.89152 23.5371 4.89152 23.1032 5.32544L15 13.4287L6.89679 5.32544C6.46287 4.89152 5.75935 4.89152 5.32544 5.32544C4.89152 5.75935 4.89152 6.46287 5.32544 6.89679L13.4287 15L5.32544 23.1032C4.89152 23.5371 4.89152 24.2406 5.32544 24.6746C5.75935 25.1085 6.46287 25.1085 6.89679 24.6746L15 16.5713L23.1032 24.6746C23.5371 25.1085 24.2406 25.1085 24.6746 24.6746C25.1085 24.2406 25.1085 23.5371 24.6746 23.1032L16.5713 15L24.6746 6.89679Z"
						fill="black" />
				</svg>
			</div>
			<nav className="mob-nav__nav">
				<ul className="mob-nav__nav-list">
					<li className="header__nav-element">
						<a href="index.html" className="header__nav-link">About</a>
					</li>
					<li className="header__nav-element">
						<a href="writtimg.html" className="header__nav-link">Writing</a>
					</li>
					<li className="header__nav-element">
						<a href="speaking.html" className="header__nav-link">Speaking</a>
					</li>
					{/* <li className="header__nav-element">
						<a href="#price" className="header__nav-link">Price</a>
					</li> */}
				</ul>
			</nav>
		</div>
        </>
    )
}

export default MobNav