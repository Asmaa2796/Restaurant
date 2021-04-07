import React from 'react'
import Owldemo1 from '../component/Owldemo1.js' 
import '../styles/Menu.css'
export default function Menu() {
    return (
        <>
            <div className="menu pd">
                <div className="container">
                    <h4 className="title"><img src={"./images/coriander.png"}/> Our Menu </h4>
                    <img className="abs1" src={"./images/dish (3).png"}/>
                    <img className="abs2" src={"./images/dish (2).png"}/>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-unstyled sub">
                                <li className="clicked">Regular</li>
                                <li>Breakfast</li>
                                <li>Lunch</li>
                                <li>Dinner</li>
                                <li>Vegetarian</li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <Owldemo1/>
                        </div>
                        <div className="col-md-3">
                        </div>
                        {/* <div className="col-md-12">
                        <img className="pattern" src={"./images/pattern.png"}/>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
