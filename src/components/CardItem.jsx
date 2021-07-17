import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/CardItem.scss'

function CardItem(props) {
    return (
        <>
            <li className="cards-item">
                <Link className="cards-item-link" to={props.path}>
                    <figure
                        className="cards-item-picwrap"
                        data-category={props.label}
                    >
                        <img
                            src={props.src}
                            alt="Travel"
                            className="cards-item-image"
                        />
                    </figure>
                    <div className="cards-item-info">
                        <h5 className="cards-item-text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
