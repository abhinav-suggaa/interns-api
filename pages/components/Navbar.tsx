import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800'>
      <nav className='container mx-auto px-4 py-2'>
        <ul className='flex justify-between items-center'>
          <li className='mr-4'>
            <Link href="/interns">
              <p className='text-white hover:text-gray-300'>Interns Details</p>
            </Link>
          </li>
          <li className='mr-4'>
            <Link href="/colleges">
              <p className='text-white hover:text-gray-300'>College Details</p>
            </Link>
          </li>
          <li>
            <Link href="/branches">
              <p className='text-white hover:text-gray-300'>Branches Details</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
