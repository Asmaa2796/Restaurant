import React from 'react'
import '../styles/Category.css'
export default function Category() {
    return (
        <>
            <div className="category pd" style={{ backgroundImage: "url(/images/Artboard.png)" }}>
                <div className="container">
                    <h4 className="title"><img src={"./images/drink.png"}/> Drink & Desert</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="cat">
                                <img alt="test" src={"./images/cup.png"}/>
                                <h5>Coffee</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="cat">
                                <img alt="test" src={"./images/ice-cream.png"}/>
                                <h5>Ice Cream</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="cat">
                                <img alt="test" src={"./images/doughnut.png"}/>
                                <h5>Doughnut</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="cat">
                                <img alt="test" src={"./images/juice.png"}/>
                                <h5>Juice</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
