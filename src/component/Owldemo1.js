import React, { Component } from 'react'
// Owl Carousel
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import '../styles/owl.css';

export default class Owldemo1 extends Component {
    state= {
        responsive:{
            0: {
                items: 2,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }
    render() {
        return (
            <>
                <OwlCarousel items={4}  
                    className="owl-theme"  
                    loop  
                    nav
                    dots={false} 
                    margin={15} autoplay ={true} responsive={this.state.responsive} >  
                    <div className="parent"> <div className="price">20$</div> <img className="img" src= {'./images/f5.png'}/><p>Meat</p></div>  
                    <div className="parent"> <div className="price">50$</div> <img className="img" src= {'./images/f6.png'}/><p>Salad</p></div>  
                    <div className="parent"> <div className="price">10$</div> <img className="img" src= {'./images/f7.png'}/><p>Shrimp</p></div>  
                    <div className="parent"> <div className="price">40$</div> <img className="img" src= {'./images/f1.png'}/><p>Sauteed</p></div>  
                    <div className="parent"> <div className="price">60$</div> <img className="img" src= {'./images/f2.png'}/><p>Beef</p></div>  
                    <div className="parent"> <div className="price">25$</div> <img className="img" src= {'./images/f3.png'}/><p>Fillet</p></div>  
                    <div className="parent"> <div className="price">15$</div> <img className="img" src= {'./images/f4.png'}/><p>Egg</p></div>  
                </OwlCarousel>  
            </>
        )
    }
}
