import React from 'react'

function Header() {
  return (
   <header className ='bg-gray-300'>
   <nav className='bg-white boreder-gray-300 px-4 lg:px-6'>
    <div className='flex flex-wrap justify-betweeb items-center mx-auto max-w-screen-xl'>
      <Link to='/' className='bg-green-700' ></Link>
    </div>
   </nav>
   </header>
  )
}

export default Header
