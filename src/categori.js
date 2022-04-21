import React, {useState} from "react";
import Nav from './navbar'
import './App.css';
import { Row, Col, Container , Image, Modal, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {data} from './list'
import {edit} from './edit'




function Category () {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return(
        <div className="Category">
            <Nav />
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this data?</Modal.Body>
        <Modal.Footer>
        <button className="editButton" onClick={handleClose}>
            Yes
          </button>
          <button className="deleteButton" onClick={handleClose}>
            No
          </button>
         
        </Modal.Footer>
      </Modal>
           <div className="listCategory">
               <h3 className="textDetail"> List Category</h3>

               <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Category Name</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>



  <tbody>

  {data.map((item, index) => {
      return(
        <tr>
        <th scope="row">{item.id}</th>
        <td>{item.product}</td>
        <td className="buttonGrup"> 
            <Link to ={`/edit/${index}`}>
            <button className="editButton">Edit</button>
            </Link>
            <button className="deleteButton" onClick={handleShow} >Delete</button>
       
        </td>
        </tr>
      )
  })}

    
      
   

  </tbody>
</table>
           </div>
        </div>
    )
}

export default Category