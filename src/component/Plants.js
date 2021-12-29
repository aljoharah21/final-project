import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'

const Plants=()=>{

  const [plants, setplants] = useState();
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("h");
  const [AllPlants, setAllPlants] = useState()

  // const handleSearch =(e)=>{
  //   setSearchTerm(e.target.value)
  //   const tempPlants = plants.filter(plant=>plant.name.includes(e.target.value))
  //   if(e.target.value.length!==0){
  //     setplants(tempPlants)
  //   }else{
  //     resetPlants()
  //   }
  // }

  const setInput = async (e) =>{
    setSearchTerm(e.target.value)
    handleSearch(e)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)

    axios
    .get(`http://localhost:8080/plants/plantByName/${searchTerm}`)
    .then((response) => {
      console.log(response)
      setplants(response.data)
    })
    .catch((error) =>  console.log(error));
  
  };




useEffect(() => {
  axios 
    .get("http://localhost:8080/plants")
    .then((response) => {
      
      setplants(response.data)
      setAllPlants(response.data)
      setLoading(true)
    })
    .catch((error) => console.log(error));
},[]);

    return( 
         <div>
             <div className='row'>

{loading? 
<>

<div>

          <div className="text py-5">
              <input className="input form-control" placeholder="Look up plants..." type="text" name="search"  onChange={(e)=>setInput(e)}/>  
          </div>

       </div>

{plants.map((plant, i)=>{
  return(

    <div className='col-md-4  ' key={i}>
<div className="card border p-1 m-1 border-dark" >
  <img className="card-img-top" src={plant.img} alt={plant.name}/>
  <div className="card-body">
    <h5 className="card-title">{plant.name}</h5>
  </div>
  <ul className="list-group list-group-flush">
     <li className="list-group-item">{plant.description}</li> 
    <li className="list-group-item">Climate: {plant.climate.name}</li> 
    <li className="list-group-item">Season: {plant.seasons.name}</li> 
  </ul>

</div>
</div>
  )
})}
</>

:
<h1>loading...</h1>}

</div>
</div>
  )
}
export default Plants;