import React from 'react'
import {useState} from 'react'
const Searchbar = () => {
    const [search, setSearch] = useState('')
    const handleClick = () =>{
        window.open('https://www.google.com/search?q='+ search, "_blank")
        setSearch("")
    }
  return (
    <>
    <label htmlFor="srch"></label>
    <input type='text' className='srch'placeholder='search' id="srch" name='srch' onChange={(e)=>{setSearch(e.target.value)}}></input>
    <button onClick={handleClick}>search</button>
    </>
  )
}

export default Searchbar