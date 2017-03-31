import React from 'react' // eslint-disable-line
import RfGrid from './RfGrid.jsx'
import { getPosts, getUsers } from '../api.js'

  var myp = {
    title: 'Posts',
    select_values: Object.keys(getPosts()[0]),
    cards: getPosts().map(p => {
      return {
        title: p.title,
        subtitle: 'Author: ' + (getUsers().find(u => u.id === p.author) || {}).name,
        link: '/posts/detail/' + p.id
      }
    })
  };
                          
export default class Posts extends React.Component {
   constructor(props) {
    super(props);
    this.state = {data: myp};
  }
    /*
   */
    /*
    RfGrid({
    title: 'Posts',
    select_values: Object.keys(getPosts()[0]),
    cards: getPosts().map(p => {
      return {
        title: p.title,
        subtitle: 'Author: ' + (getUsers().find(u => u.id === p.author) || {}).name,
        link: '/posts/detail/' + p.id
      }
    })
  })
   */ 
   
                    
        
    componentDidMount() {
        console.log("API call Posts");
    }
    
    render(){
        console.log(myp.cards)
        return<RfGrid data={this.state.data}/>
    }
  

};
