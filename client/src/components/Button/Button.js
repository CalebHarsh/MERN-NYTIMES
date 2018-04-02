import React from "react"

const Button = props => (
  <button onClick={props.onClick} data-article={props.data} className={`btn btn-${props.type === "remove" ? "danger" : "primary"}` }>
    {props.name}
  </button>
)

export default Button