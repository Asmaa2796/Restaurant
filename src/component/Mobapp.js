import React from 'react'
import '../styles/Mobapp.css'
export default function Mobapp() {
    return (
        <>
            <div className="mobapp" style={{ backgroundImage: "url(/images/pattern.png)" }}>
                <div className="container">
                    <h4 className="title"><img src={"./images/social-media.png"}/> Follow us</h4>
                    <div className="image">
                        <img src={"./images/follow.png"}/> 
                        <button>Get Our App</button>
                    </div>
                </div>
            </div>
        </>
    )
}
