import React from 'react'
import '../styles/Features.css'

export default function Features() {
    return (
        <>
            <div className="features pd">
                <div className="container">
                    <h4 className="title"><img src={"./images/vegetable.png"}/> Features</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="image">
                                <img alt="test" src={"./images/chef.png"}/>
                                <img alt="test" className="svg" src={"./images/blob_17-7-48.svg"}/>
                            </div>
                        </div>
                        <div className="col-md-9 text-center">
                            <br/> <br/> <br/>
                            <h5>Our Awesome Features</h5>
                            <br/>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="feat">
                                        <img alt="test" src={"./images/pizza.png"}/>
                                        <b>Tasty Food</b>
                                        <p>lorem ipsum</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="feat">
                                        <img alt="test" src={"./images/fast-food.png"}/>
                                        <b>Fast Food</b>
                                        <p>lorem ipsum</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="feat">
                                        <img alt="test" src={"./images/salad.png"}/>
                                        <b>Delicious Food</b>
                                        <p>lorem ipsum</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="feat">
                                        <img alt="test" src={"./images/thanksgiving.png"}/>
                                        <b>Thanks Giving</b>
                                        <p>lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
