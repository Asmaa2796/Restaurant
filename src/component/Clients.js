import React from 'react'
import '../styles/Clients.css'

export default function Clients() {
    return (
        <>
            <div className="clients">
                <img className="dotted" src={"./images/dotted.png"} />
                <div className="container">
                    <h4 className="title"><img src={"./images/rating.png"} /> Clients Feedback</h4>
                    <div class="row">
                        <div className="col-md-12">
                            <div id="carouselExampleIndicators" className="carousel slide pointer-event" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <sup><img src={"./images/left-quotes-sign.png"} alt=""/></sup>
                                    <p className="lead">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. </p>
                                    <h5>Alex</h5>
                                </div>
                                <div className="carousel-item">
                                    <sup><img src={"./images/left-quotes-sign.png"} alt=""/></sup>
                                    <p className="lead">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. </p>
                                    <h5>Albert</h5>
                                </div>
                                <div className="carousel-item">
                                    <sup><img src={"./images/left-quotes-sign.png"} alt=""/></sup>
                                    <p className="lead">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. </p>
                                    <h5>Mark</h5>
                                </div>
                                <div className="carousel-item">
                                    <sup><img src={"./images/left-quotes-sign.png"} alt=""/></sup>
                                    <p className="lead">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. </p>
                                    <h5>Wiliam</h5>
                                </div>
                            </div>
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"><img src={"./images/team-1.jpg"}/></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""><img src={"./images/team-2.jpg"}/></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""><img src={"./images/team-3.jpg"}/></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3" className=""><img src={"./images/team-4.jpg"}/></li>
                            </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
