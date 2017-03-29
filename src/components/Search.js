import React from 'react'

const Search = (props) => {
  return(
    <form>
      <input type="text" onChange={props.handleChange} />
    </form>
  )
}

export default Search
