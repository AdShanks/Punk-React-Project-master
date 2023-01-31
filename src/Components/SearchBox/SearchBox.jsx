import React from 'react'
// name may = name not label
const SearchBox = (props) => {
  const { searchTerm, handleInput} = props
  return (
  
    <div className="App">
       <nav className="Nav">
        <label>Beer Search</label>
       <input value={searchTerm} onInput={handleInput} type="text"/>
       </nav>
    </div>
  )
}

export default SearchBox