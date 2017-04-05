import React from 'react' //eslint-disable-line
import { Card, CardMedia, CardTitle, CardActions } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'
import cardStyles from './rfCardStyles.css'

export default function RfCard (props) {
  const maxLength = 20
  let title = props.title
  if (props.title.length > maxLength) title = title.substr(0, maxLength) + '...'

  return (
    <div className={cardStyles.rfCard}>
      <Card>
        <CardTitle
          avatar='https://placeimg.com/80/80/animals'
          title={title}
          subtitle={props.subtitle}
      />
        <CardMedia
          aspectRatio='wide'
          image='https://placeimg.com/800/450/nature'
      />
        <CardActions>
          <Button href={props.link} label='Details' />
        </CardActions>
      </Card>
    </div>
  )
}
