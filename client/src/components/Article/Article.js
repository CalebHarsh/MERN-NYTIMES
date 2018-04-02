import React from "react"
import Button from "../Button"


const Article = props => (
  <div className="card">
    <div className="card-body">
      <h3 className="d-flex justify-content-between">
        <a className="text-dark" href={props.href}>{props.title}</a>
        <Button data={props.data} onClick={props.BtnClick} type={props.BtnType} name={props.BtnName}/>
      </h3>
    </div>
  </div>
)

export default Article