import React from 'react'

const Form = (props) => (
  <form>
    <input type="text" name="search" placeholder="search" onChange={props.handleChange}/>
  
  </form>
)



export default Form
