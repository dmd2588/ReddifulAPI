import React from 'react';

export default function Details (props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {Object.keys(props.details).map(title => (
          <p key={Math.random().toString(16).substr(2)}>{title}: {props.details[title]}</p>
      ))}
    </div>
  )
}
