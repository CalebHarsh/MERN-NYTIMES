import React from "react"
import './Card.css'

const Card = props => (
  <div className="card mb-3">
    <h5 className="card-header bg-dark">{props.head}
    </h5>
    <div className="card-body bg-secondary">
      {props.children}
    </div>
  </div>
)

export default Card