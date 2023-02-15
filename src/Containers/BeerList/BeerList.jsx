import BeerCard from "../../Components/BeerCard/BeerCard"
import Nav from "../../Components/Nav/Nav"
import "./BeerList.scss";
import { useEffect, useState} from "react";

const BeerList = () => {
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
  
const handleAbv = () => {
  setIsChecked(!isChecked)
  setIsRange(!isRange)
  if (isChecked) {
  setUrl(`https://api.punkapi.com/v2/beers?per_page=33&abv_gt=6`)}
  else {setUrl(`https://api.punkapi.com/v2/beers?per_page=33`)}
    }

const handleRange = () => {
  setIsRange(!isRange)
  if (isRange) {
  setUrl(`https://api.punkapi.com/v2/beers?brewed_before=01-2010&per_page=33`)
}
  else {setUrl(`https://api.punkapi.com/v2/beers?per_page=33`)}
}
  
const mappedBeers = beers && beers.map(beer => {
    return <BeerCard beer= {beer} />
  })

  const handleInput =(e) => {
    const cleanInput = e.target.value.toLowerCase();
    setSearchTerm(cleanInput)
    }

  const searchFilteredBeers = beers && beers.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm);
  })
  
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