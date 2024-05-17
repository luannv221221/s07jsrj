import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    const {id} = useParams();
    console.log(id);
    const [formData, setformData] = useState({categoryName:'',description:''});
    const navigator = useNavigate();
    const getCategoryByIdFromAPI = async ()=>{
        const response = await axios.get(`http://localhost:8080/api.myservice.com/v1/admin/categories/${id}`);
        const data = response.data.duLieu;
        console.log(data);
        setformData(data)
    }
    const handleSubmit =()=>{
        axios.put(`http://localhost:8080/api.myservice.com/v1/admin/categories/${id}`,formData).
        then((response)=>{
            console.log(response);
            navigator('/category')
        }).catch((err)=>console.log(err));
    }
    useEffect(()=>{
        getCategoryByIdFromAPI();
    },[])
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
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Description</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                    value={formData.description}
                                    onChange={(e)=>setformData({...formData,description:e.target.value})}
                                />
                        </div>
                        <div className="mb-3">
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="status"
                                    id=""
                                    value={false}
                                    checked={!formData.status}
                                />
                                <label class="form-check-label" for="">InActive</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="status"
                                    id=""
                                    value={true} 
                                    checked={formData.status}
                                />
                                <label class="form-check-label" for="">Active</label>
                            </div>
                            
                            
                        </div>
                        <button type='button' onClick={handleSubmit} className='btn btn-success'>Update</button>
                    </form>
                </Col>
            </Row>
        </Container>
    </>
  )
}
