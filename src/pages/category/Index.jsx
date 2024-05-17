import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export default function Index() {
    const [categories, setCategories] = useState([])
    const[flag,setFlag] = useState();
    // useEffect(()=>{
    //     fetch('http://localhost:8080/api.myservice.com/v1/admin/categories')
    //     .then((response)=>response.json())
    //     .then((json)=>{
    //         setCategories(json.duLieu);
    //         console.log(json);
        
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // },[])

    
    // async function getAPI(){
    //     try {
    //         const response = await fetch("http://localhost:8080/api.myservice.com/v1/admin/categories",{
    //             method:"GET"
    //         });
    //         const json = await response.json();
    //         console.log(json.duLieu);
    //         setCategories(json.duLieu);            
    //     } catch (error) {
    //         console.log(error);
    //     }
       
    // }
     
    const getAPI = async ()=>{
        const response = await axios.get("http://localhost:8080/api.myservice.com/v1/admin/categories");
        const data = response.data.duLieu;
        setCategories(data)
    }
    useEffect(()=>{
        getAPI()
    },[])
    const handleDelete = (id)=>{
        const comfirm = confirm('Bạn chắc chắn ko');
        console.log(comfirm);
        if(comfirm){
            axios.delete(`http://localhost:8080/api.myservice.com/v1/admin/categories/${id}`).
            then((response)=>{
                console.log(response);
                getAPI();
            }).catch((err)=>console.log(err));
        }
    }
  return (
    <>
        <Container>
            <NavLink to="add" className="btn btn-primary">Add New</NavLink>
            <Row>
                <Col lg={6}>
                    <div
                        className="table-responsive"
                    >
                        <table
                            className="table table-primary"
                        >
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((item,index)=>{
                                    return(
                                        <tr className="" key={index}>
                                            <td scope="row">{index+1}</td>
                                            <td>{item.categoryName}</td>
                                            <td>{item.description}</td>
                                            <td>{item.status ? 'Active' :'InActive'}</td>
                                            <td>
                                                <Link to={`edit/${item.categoryId}`} className='btn btn-primary'>Edit</Link>
                                                <button onClick={()=>handleDelete(item.categoryId)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </>
  )
}
