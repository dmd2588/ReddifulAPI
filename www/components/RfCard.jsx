import React from 'react' //eslint-disable-line
import { Card, CardMedia, CardTitle, CardActions } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'
import cardStyles from './rfCardStyles.css'

export default function RfCard (props) {
  const maxLength = 17
  let title = props.title
  if (props.title.length > maxLength) title = title.substr(0, maxLength) + '...'

  let subtitle = props.subtitle
  if (props.subtitle.length > maxLength) subtitle = subtitle.substr(0, maxLength) + '...'

  return (
    <div className={cardStyles.rfCard}>
      <Card>
        <CardTitle
          className={cardStyles.themedCardTitle}
          avatar={props.icon ? props.icon : 'https://placeimg.com/80/80/animals'}
          title={title}
          subtitle={subtitle}
          theme={cardStyles}
        />
        <CardMedia
          aspectRatio='wide'
          image={props.preview}
          className={props.customClass}
        />
        <CardActions>
          <Button href={props.link} label='Details' />
        </CardActions>
      </Card>
    </div>
  )
}
