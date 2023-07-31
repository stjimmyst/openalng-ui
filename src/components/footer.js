import React, { useState, useEffect, useRef } from 'react'

const Footer = (props) => {
    return (
        <footer className="footer">
			<div className="container-footer">
				<nav className="footer__nav">
					<ul className="footer__nav-list">
						<li className="footer__nav-element">
							<a href="/dmca" className="footer__nav-link">DMCA</a>
						</li>
						<li className="footer__nav-element">
							<a href="/terms" className="footer__nav-link">Terms and conditions</a>
						</li>
						<li className="footer__nav-element">
							<a href="/privacy" className="footer__nav-link">Privacy policy</a>
						</li>
					</ul>
				</nav>
				<p className="footer__description">OpenLang was developed to check essays from the IELTS Writing Task 2 and
					Letters/Charts from Task 1, CELPIP Writing Task 1/Task 2. The service helps students practice writing for IELTS/CELPIP and improve their
					writing skills. By using this site, you agree to read and accept our terms of use, refund policy and
					privacy policy. IELTS is a registered trademark of University of Cambridge ESOL, the
					British Council, and IDP Education Australia. CELPIP is a registered trademark of the University of British Columbia, who are not involved in the production of, and do not endorse this information or publications. OpenLang is not affiliated, approved or endorsed by
					the University of Cambridge ESOL, the British Council, University of British Columbia and IDP Education Australia.  All other
					trademarks on this website are the property of their respective owners.</p>
				<p className="footer__copy">OpenLang© 2023. All rights reserved.</p>
			</div>
		</footer>
    )
}

export default Footer