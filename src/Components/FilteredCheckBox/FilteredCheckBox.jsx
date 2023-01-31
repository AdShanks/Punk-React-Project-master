import React from 'react'

const FilteredCheckBox = (props) => {
  const {handleAbv, handleRange} = props
  return (
  <div className="App">
    <nav className="Nav">
      <label>ABV (greter than 6%)</label> 
      <input   type="checkbox" name="ABV over 6%"  onChange={handleAbv} />

      <label>Acidity</label>
      <input type="checkbox" name="acidity" />   

      <label>Classic Range</label>  
      <input type="checkbox" name="classic range" onChange={handleRange}/>  
   </nav>
 </div>
  )
}

export default FilteredCheckBox