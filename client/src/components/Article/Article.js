import React from "react"
import Button from "../Button"


const Article = props => (
  <div className="card">
    <div className="card-body">
      <h3 className="d-flex justify-content-between">
        <a className="text-dark" href={props.href}>{props.title}</a>
        <Button data={props.data} onClick={props.BtnClick} type={props.BtnType} name={props.BtnName}/>
      </h3>
      {window.location.pathname === "/saved" ? (<h6 className="text-center text-dark">
        {props.date.split('T').map((time, i) => i === 1 ? time.slice(0, 8) : time).join(" ")}
      </h6>) : null}
    </div>
  </div>
)

export default Article