import React from 'react' // eslint-disable-line
import RfGrid from './RfGrid.jsx'
import { getPosts, getUsers } from '../api.js'
import SortFilter from './SortFilter.jsx'
import ReactPaginate from 'react-paginate';
import { Grid, Row, Col } from 'react-bootstrap'
                          
export default class Posts extends React.Component {
   constructor(props) {
    super(props);
    this.state = {data: {title:'',select_values:[],cards:[]}};
  }
    
    loadDataFromServer(options){
        //Make request here using options
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
        
        return myp 
    }
    
    componentDidMount() {
        this.setState({data: this.loadDataFromServer()});
        console.log("API call Posts");
    }
     componentWillUnmount() {
        console.log("API dismount Posts");
    }
    
    
  handlePageClick(data){
      console.log("Click");
  };
    
    render(){
        return(
             <div>
             <Row>
             <Col sm={12} md={3}>
                                  <SortFilter select_values={this.state.data.select_values} />

        </Col>
 <Col sm={12} md={9}>
                            <RfGrid data={this.state.data} /> 

                </Col>
                 
                </Row>
                <Row>
                <Col xs={6} md={4}>
                </Col>
                     <Col xs={6} md={4}>
            <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={5}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
                   
                            </Col>
                             <Col xs={6} md={4}>
                </Col>
                </Row>
                
           
          </div>
       )
    }
  

       

};


