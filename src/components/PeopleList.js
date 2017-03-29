import React from 'react'

const PeopleList = props => (
  <div>
    {props.people.length === 0 && <h1>loading</h1>}
    <ul>
      {
        props.people.map((item, index) => {
          return <li key={index}>{item.name}</li>
        })
      }
    </ul>
  </div>
)

export default PeopleList
