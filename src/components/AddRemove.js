import React from 'react';
import { useState } from 'react';

function AddRemove() {

  // can use to define values in back end to have parent nodes: val: []
  // next page is columnar by category 
  // how to provide parent nodes only first
    const [values, setValues] = useState({ val: [] }); 

      function createInputs() {
        return values.val.map((el, i) =>
        
          <div key={i} className="row">
            <input type="text" value={el||''} onChange={handleChange.bind(i)}  className="inputList" />
            <input type='button' value='X' onClick={removeClick.bind(i)} />
          </div>
        );
      }

    function handleChange(event) {
      let vals = [...values.val];
      vals[this] = event.target.value;
      setValues({ val: vals });
    }

    const addClick = () => {
      setValues({ val: [...values.val, '']})
    }

    const removeClick = () => {
      let vals = [...values.val];
      vals.splice(this,1);
      setValues({ val: vals });
    }

    const handleSubmit = event => {
      alert('A name was submitted: ' + values.val.join(', '));
      event.preventDefault();
    }

    return (
      
      <form onSubmit={handleSubmit} className="parentForm">
        
        
        <div className="header">
          <h1>Company A</h1>
          <h2>New Hierarchy</h2>
        </div>




          {createInputs()}
          <div className="inputs">
            <input type='button' value='Add Header' onClick={addClick} className="inputAdd"/>
            <input type="submit" value="Submit" className="inputSub"/>
          </div>
      </form>
    );

}

export default AddRemove;