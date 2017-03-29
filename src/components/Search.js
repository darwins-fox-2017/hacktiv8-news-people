import React from 'react'

const Search = props => (
  <form>
    <input type="text" onChange={props.handleTextChange}/>
  </form>
)

export default Search
