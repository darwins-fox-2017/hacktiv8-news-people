import React from 'react'

const News = (props) =>{
  return(
    <div className="example">
      <ul>
        {props.data.filter((item, index)=>{
          let patternFilter = new RegExp(props.handleKeyword,'gi')
          return patternFilter.test(item.title)
        }).map((item, index)=>{
          return(
            <li key={index}><a href={item.url} target="_blank">{item.title}</a></li>
          )
        })}
      </ul>
    </div>
  )
}

export default News
