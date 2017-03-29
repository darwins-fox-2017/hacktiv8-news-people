import React from 'react';

const List = (props) => (
  <ul>
    {
      props.data.filter(results=> (results.title === null ? '' : results.title).match(new RegExp(props.search,'i'))).map((item, index) => {
      return (
        <li key={index}><a href={item.url} target="_blank">{item.title}</a></li>
        )
      })
    }
  </ul>
)

export default List
