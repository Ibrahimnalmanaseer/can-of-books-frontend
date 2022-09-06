

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import axios from 'axios';


class ModalBook extends React.Component{

  



  
handleData=(event)=>{

    event.preventDefault();
    const obj={

        title:event.target.title.value,
        description:event.target.bookdisc.value,
        status:event.target.status.value
    }



    console.log(obj)
    axios
    .post('http://localhost:3001/addbook',obj)
    .then(result=>{

        
        this.props.newData(result.data)

    })

    
    
    
}



    render(){



        return (

        <>
        <Modal show={this.props.show} onHide={this.props.closeShow}>
        <Modal.Header closeButton>
          <Modal.Title> Book Details  </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        {/* <form onSubmit={this.handleData}>
          <input type="text" name="title" placeholder='book name' />
          <br></br>
          <br></br>
          <input type="text" name="bookdisc" placeholder='book dic' />
          <br></br>
          <br></br>
          <input type="text" name="status" placeholder='bookstatus' />
          <br></br>
          <br></br>
          <button type='submit'>Add</button>

        </form> */}

                    <Form onSubmit={this.handleData}>
                     <Form.Group className="mb-3" controlId="formBasictext" >
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Book Name" name="title" />
                   
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Description </Form.Label>
                    <Form.Control type="text" placeholder="Enter Book Description" name="bookdisc"/>
                   
                    </Form.Group>


                      <Form.Group className="mb-3">
                      <Form.Label>Status</Form.Label>
                      <Form.Select id="status" >
                    
                        <option value="Life Changing">Action and Adventure</option>
                        <option value="Classics">Classics</option>
                        <option value="Comic Book or Graphic Novel">Comic Book or Graphic Novel</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                        
                      </Form.Select>
                      </Form.Group>



                    {/* <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Status </Form.Label>
                    <Form.Control type="text" placeholder="Status" name="status" />
                    <Form.Text className="text-muted"  >
                  
                    </Form.Text>
                    </Form.Group> */}
                
                    <Button variant="primary" type="submit" onClick={this.props.closeShow}  >
                    Save!
                    </Button>


                   
                    </Form>



        
            
            
            
              </Modal.Body>
        
      </Modal>
    </>
        )
    }








}

export default ModalBook ;