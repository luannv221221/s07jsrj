import axios from 'axios';
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const [formData, setformData] = useState({categoryName:'',description:''});
    const navigator = useNavigate();
    const handleSubmit = ()=>{
        console.log(formData);
        axios.post("http://localhost:8080/api.myservice.com/v1/admin/categories",formData)
        .then((response)=>{
            console.log(response);
            navigator('/category')
        }).catch((err)=>console.log(err))
    }
  return (
    <>
        <Container>
            <Row>
                <Col lg={6}>
                    <form action="">
                        <div className="mb-3">
                            <label  className="form-label">Category Name</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="form-control"
                                placeholder=""
                                aria-describedby="helpId"
                                value={formData.categoryName}
                                onChange={(e)=>setformData({...formData,categoryName:e.target.value})}
                            />
                           <label  className="form-label">Description</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="form-control"
                                placeholder=""
                                aria-describedby="helpId"
                                onChange={(e)=>setformData({...formData,description:e.target.value})}
                            />
                        </div>
                        <button type='button' onClick={handleSubmit} className='btn btn-success'>Add New</button>
                    </form>
                </Col>
            </Row>
        </Container>
    </>
  )
}
