// import React from 'react'
import '../styles/Footer.css'

import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer style={{backgroundImage: "url(./images/footer-background.svg)"}}>
                    <div class="container">
                    <div class="row">
                        
                        <div class="col-md-4 col-5">
                            <div class="navigation">
                            <h5>Sitemap</h5>
                            <a href="">Home</a>
                            <a href="">Features</a>
                            <a href="">Categories</a>
                            <a href="">Menu</a>
                            <a href="">Follow us</a>
                            </div>
                        </div>
                        <div class="col-md-4 col-7">
                            <div class="social-links">
                            <h5>Contact us</h5>
                            <div class="">
                                <ul class="list-unstyled">
                                <li><i class="fas fa-map-marker-alt"></i> <span>Location</span></li>
                                <li><i class="fab fa-facebook-f"></i> <span>Restaurant</span></li>
                                <li><i class="fas fa-envelope"></i> <span>example@gmail.com</span></li>
                                <li><i class="fas fa-mobile-alt"></i> <span>01000010000</span></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center">
                            <a><img src={"./images/food.png"} alt=""/></a>
                        </div>
                        <div class="col-md-12 text-center">
                            <hr/>
                            <span>All rights reserved © 2021 <b>Asmaa saad</b> </span>
                        </div>
                        </div>
                    </div>
                </footer>   
            </>
        )
    }
}

