import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

export default function Category() {
  return (
    <>
        <Container>
            <h1>Quản lý danh mục </h1>
            
        </Container>
        <Outlet></Outlet>
    </>
  )
}
