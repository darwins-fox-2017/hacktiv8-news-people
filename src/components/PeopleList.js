import React from 'react'
import logo from '../logo.svg';

const PeopleList = (props) => {
  return (
    <div className="peoples">
      {props.peoples.length === 0 && <img src={logo} className="App-logo" alt="logo" />}
      <ul>
        {
          props.peoples.map((item, index) => {
            return (
              <p key={index}>{item.name}</p>
            )
          })
        }
      </ul>
    </div>
  )
}

export default PeopleList
