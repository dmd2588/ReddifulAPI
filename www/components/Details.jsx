import React from 'react';

export default function Details (props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {Object.keys(props.details).map(title => {
        const key = Math.random().toString(16).substr(2)
        let detail = props.details[title]
        let inner = typeof detail !== 'object' ? detail
                    : <a href={detail.link}>{detail.name}</a>
        return (
          <p key={key}>{title}: {inner}</p>
        )
      })}
    </div>
  )
}
