import React from 'react'
import moment from 'moment'
import RfGrid from './RfGrid.jsx'

const userData = [{"name": "batman_jr", "created": 1405828618.0, "link_karma": 335, "comment_karma": 190, "id": "hh8mr", "email": "None"}, {"name": "poizan42", "created": 1331171212.0, "link_karma": 768, "comment_karma": 25419, "id": "74344", "email": "poizan@poizan.dk"}, {"name": "Ooer", "created": 1287044616.0, "link_karma": 18834, "comment_karma": 56852, "id": "4fer6", "email": "ooer@live.com"}]

export default function Users () {
  return RfGrid({
    title: 'Users',
    cards: userData.map(u => {
      return {
        title: u.name,
        subtitle: 'Joined: ' + moment(new Date(u.created)).format('LL'),
        link: '/users/detail/' + u.id
      }
    })
  })
}
