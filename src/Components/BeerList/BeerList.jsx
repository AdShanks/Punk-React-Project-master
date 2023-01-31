import data from "../../data/data"
import BeerCard from "../BeerCard/BeerCard"
import Nav from "../Nav/Nav"
import "./BeerList.scss";
import { useEffect, useState} from "react";

const BeerList = () => {
  
  //useState for search filter
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ beers, setBeers ] = useState ("");
  const [url, setUrl] = useState(`https://api.punkapi.com/v2/beers?per_page=33`)
  const [isChecked, setIsChecked] = useState(true)
  const [isRange, setIsRange] = useState(true)


  const getBeers = () => {
    fetch(url)
    .then((res) => {
      return res.json()
    })  
    .then((data) => {
      setBeers(data)
    })
  }
  useEffect(getBeers, [url])
  
  //ABV checkbox filter
const handleAbv = () => {
  setIsChecked(!isChecked)
  setIsRange(!isRange)
  
  if (isChecked) {
  setUrl(`https://api.punkapi.com/v2/beers?per_page=33&abv_gt=6`)}
  
  // else if (isChecked && isRange) {
  //   setUrl(`https://api.punkapi.com/v2/beers?per_page=33&abv_gt=6&brewed_before=01-2010`)
  // }
  
  else {setUrl(`https://api.punkapi.com/v2/beers?per_page=33`)}
    
    }

const handleRange = () => {
setIsRange(!isRange)
if (isRange) {
  setUrl(`https://api.punkapi.com/v2/beers?brewed_before=01-2010&per_page=33`)
}
else {setUrl(`https://api.punkapi.com/v2/beers?per_page=33`)}
}
  
    
//Map over Beer Cards
  const mappedBeers = beers && beers.map(beer => {
    return <BeerCard beer= {beer} />
  })

  //Handle Input for search box
  const handleInput =(e) => {
    const cleanInput = e.target.value.toLowerCase();
    setSearchTerm(cleanInput)
    }

  const searchFilteredBeers = data.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm);
  })
  
  //Map ove searched beers
  const mappedSearchedBeers = searchFilteredBeers.map(item => {
    return <BeerCard beer={item} />
  })



 
   return (
    <div className="App">
      <nav>
      <Nav searchTerm={searchTerm} handleInput={handleInput} handleAbv={handleAbv} handleRange={handleRange}/>
            
      </nav>
   
     <main className="beerList">
      {searchTerm ? mappedSearchedBeers : mappedBeers}
      </main> 
    
    </div>
  )
}

export default BeerList