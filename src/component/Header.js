import React from 'react'
import '../styles/Header.css'

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-left text">
                                <h2>Choosing Quality Food</h2>
                                <p>We serve best catering in the city <br/> Experience our best food</p>
                                <button>Order Now</button>
                                <img src={"./images/dish.png"}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-left image">
                                <img src={"./images/food-bg2.png"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
