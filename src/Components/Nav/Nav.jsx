import "./Nav.scss"
import SearchBox from "../SearchBox/SearchBox"
import FilteredCheckBox from"../FilteredCheckBox/FilteredCheckBox"

const Nav = (props) => {
  const {searchTerm, handleInput, handleAbv, handleRange} = props
  return (
    <div className="App">
      <nav className="Nav">
      <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
      <FilteredCheckBox handleAbv={handleAbv} handleRange= {handleRange}/>
      </nav>
    </div>
  )
}

export default Nav