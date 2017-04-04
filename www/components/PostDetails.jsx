import React from 'react' // eslint-disable-line
import Detail from './Details.jsx'
import { getPosts, getUsers, getSubreddits } from '../api.js'
import {Col, Row, Panel, Image, Media, PageHeader} from 'react-bootstrap'

export default function PostDetails (props) {
    
  const post = getPosts().find(p => p.id === props.match.params.post_id)
  const author = getUsers().find(u => u.id === post.author) || {}
  const subreddit = getSubreddits().find(s => s.id === post.subreddit_id) || {}

  const p = {
    title: 'Post - ' + post.title,
    details: {
      'Title': post.title,
      'Score': post.score,
      'Subreddit': {
        name: subreddit.display_name || 'NOT_FOUND - FIXME',
        link: '/subreddits/detail/' + subreddit.id
      },
      'Author': {
        name: author.name,
        link: '/users/detail/' + author.id
      },
      'Created': new Date(post.created * 1000).toDateString()
    }
  }
  
  return (
    <div>
       <Row>
        <Col xs={12} md={8}>
            <Row>
                <Panel>
                  <Row>
                     <Col md={6}>
                     
                     <Media>
                         <Media.Left>
                                         <Image  src="http://lorempixel.com/400/200" responsive/>
                          </Media.Left>
                          <Media.Body>
                            <Media.Heading>{p.title}</Media.Heading>
                            <p>p.selftext</p>
                              </Media.Body>
                         </Media>
                     </Col>
                     <Col md={6}>
                      </Col>

                  </Row>
                    
                </Panel>
            </Row>
            <Row>
                
            </Row>
        </Col >
        <Col xs={12} md={4}>
           <Panel>
               <h2>Related</h2>
           </Panel>
            
        </Col>
        </Row>
    </div>
  
  )
}
