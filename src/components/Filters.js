import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {

  const handleChange = (event) => {
    onChangeType(event.target.value)
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field" onChange={handleChange}>
        <label>type
          <select name="type" id="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
        </label>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={onFindPetsClick}>
          Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
