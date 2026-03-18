import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
        <Link to="/" className='bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-100'>상품 목록</Link>
        <Link to="/products/new" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>상품 등록</Link>
    </nav>
  )
}

export default Navbar