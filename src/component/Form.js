import React from 'react';

const Form = (props) => (
  <form>
    <input type="text" placeholder="Search ..." onChange={(event)=>props.changeHandler(event.target.value)} />
  </form>
)

export default Form
