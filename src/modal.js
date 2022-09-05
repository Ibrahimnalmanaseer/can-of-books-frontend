

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import axios from 'axios';


class ModalBook extends React.Component{

  



  
handleData=(event)=>{

    event.preventDefault();
    const obj={

        title:event.target.title.value,
        description:event.target.bookdisc.value,
        status:event.target.status.value,
    }

    console.log(obj)
    axios
    .post('https://bookshop767676767676.herokuapp.com/addbook',obj)
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
        <form onSubmit={this.handleData}>
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

        </form>



        {/* <Form>
      <Form.Group className="mb-3" controlId="formBasictext" >
        <Form.Label>Book Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Book Name" name='title' />
        <Form.Text className="text-muted"  >
          Book Title
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label>Discription </Form.Label>
        <Form.Control type="text" placeholder="Enter Book Discription" name='bookdisc'/>
        <Form.Text className="text-muted"  >
        Discription
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label >Status</Form.Label>
        <input type="text" name="status" placeholder='status ccc' />
        <Form.Text className="text-muted"  >
          Status
        </Form.Text>
      </Form.Group>

      

      
      <Button variant="primary" type="submit"  onClick={this.handleData}>
        Submit
      </Button>
    </Form>
             */}
            
            
            
              </Modal.Body>
        
      </Modal>
    </>
        )
    }








}

export default ModalBook ;