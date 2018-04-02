import React from "react"

const Search = props => (
  <form>
    <div className="form-group">
      <label>Topic</label>
      <input onChange={props.onInput} type="text" value={props.topic} className="form-control" name="topic" placeholder="Enter Topic to Search" />
    </div>
    <div className="form-group">
      <label>Start Year</label>
      <input onChange={props.onInput} type="date" value={props.startYear} className="form-control" name="startYear" placeholder="Enter Start Year" />
    </div>
    <div className="form-group">
      <label>End Year</label>
      <input onChange={props.onInput} type="date" value={props.endYear} className="form-control" name="endYear" placeholder="Enter End Year" />
    </div>
    <button type="button" onClick={props.onClick} className="btn btn-primary">Submit</button>
  </form>
)

export default Search