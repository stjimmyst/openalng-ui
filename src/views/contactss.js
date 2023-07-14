import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Contacts = (props) => {
    const ref = useRef(null);
    const priceRef = useRef(null);

    function handleClick() {
        ref.current.focus();
    }

    return (
        <>
            {/* <MobNav></MobNav> */}
            <Header ref={ref}></Header>
            <main class="main">
            <section class="how-it-work2">
				<div class="container">
					<div class="title-row">
						<h2 class="main-title title-row__title">Contacts
						</h2>
					</div>
					<p class="main-description how-it-work__description">
						Please feel free to ask any questions via provided links
					</p>
					<div class="how-it-work__row">
						<a class="how-it-work__element" href="https://t.me/+XjvSw7uYu3Y3OGIy" target="_blank">
							<img src="img/_src/telegram.png" alt="" class="how-it-work__icon"/>
							<h3 class="how-it-work__title">@OpenLang
							</h3>
						</a>
						<div class="how-it-work__element">
							<img src="img/_src/email.png" alt="" class="how-it-work__icon"/>
							<h3 class="how-it-work__title" >dmitry@openlang.one
							</h3>
						</div>
					</div>
				</div>
			</section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Contacts