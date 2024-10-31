import React from 'react'
import './card.css'

const card = (props) => {
    return (
        <div>
            <div class="card">
                <div className="text">
                    <h2 class="card-title">{props.title}</h2>
                    <p class="card-description">{props.desc}</p>
                </div>
                <div className="logo">
                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" width={"40px"} alt="dp" className='dp' style={{ borderRadius: "50%" }} />
                </div>
            </div>
        </div>
    )
}

export default card