import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <nav>
            <ul>
                <li><Link href = "/interns">Interns Details</Link>  </li>
                <li><Link href = "/colleges">College Details</Link>  </li>
                <li><Link href = "/branches">Branches Details</Link>  </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar