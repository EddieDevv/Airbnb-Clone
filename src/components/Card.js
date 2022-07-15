import React from "react"

export default function Card(props) {
    let badgeText;
        if(props.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if(props.country === "Online"){
            badgeText = "ONLINE"
        }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.img}`} className="card--image" alt="katie zaferes"/>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt="star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}