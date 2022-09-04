import React from 'react';
import axios from 'axios';
import img from './images/bokke.jpg'

import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount=async()=>{

    await axios.get('http://localhost:3001/books')
    .then(result=>{

      this.setState({
        books:result.data
      })
      
    })
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
                  
                    {this.state.books.length ?  
                    
                    
                    <Carousel>
                      {this.state.books.map(item => (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img}
                          alt={item.title}
                          style={{height: 400 , width:100}}
                        />
                        <Carousel.Caption>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     ) )}


            </Carousel>
                 
        : (
          <h3>No Books Found :(</h3>
        )}


      </>
    )
  }
}

export default BestBooks;
