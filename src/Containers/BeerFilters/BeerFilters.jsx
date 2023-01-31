import BeerList from "../../Components/BeerList/BeerList"
import { useState } from "react"
import BeerCard from "../../Components/BeerCard/BeerCard"
import SearchBox from "../../Components/SearchBox/SearchBox"

const BeerFilters = (props) => {
  const [beers, setBeers] = useState("")
  const getBeersByAcidity = () => {
    fetch("https://api.punkapi.com/v2/beers?ph_lt=4")
    .then(res => {
      return res.json
    })
    .then(data => {
      setBeers(data)
      console.log(data)
    })
  }
//   const  { data }  = props
//   const [searchBrew, setSearchBrew] = useState("I'm Drunk") ;   const handleInput = (e) => {
//      const cleanInput = e.target.value.toLowerCase();
//      setSearchBrew(cleanInput)
   
//      }
//     const filteredBrews = data
//       .filter(beer => { 
//      const brewsFilteredCard = beer.name.toLowerCase();
//  return brewsFilteredCard.includes(searchBrew)

//   })

  return (
    <div>
      <SearchBox handleInput={handleInput} searchBrew={searchBrew}/>
      <BeerList beerCards={filteredBrews} />
    </div>
  );
};

export default BeerFilters