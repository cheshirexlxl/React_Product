import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
        <div className='max-w-4xl mx-auto'>
          <div className='px-6 py-8'><Navbar /></div>
          {/* 메인 콘텐츠 */}
          <main className="px-6">{ children }</main>
        </div>
    </div>
  )
}

export default Layout