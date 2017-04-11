import React from 'react'

const NewsList = (props) => {
  const filteredData = props.data.filter((item, index) => {
    let pattern = new RegExp(props.handleKeyword, 'gi')
    return pattern.test(item.title)
  })
  return (
    <div>
      {props.data.length === 0 && <h1>Loading</h1>}
      <ul>
      {
        filteredData.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default NewsList
