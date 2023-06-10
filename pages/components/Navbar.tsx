import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <nav className="container mx-auto px-4 py-2">
        <ul className="flex flex-col justify-center items-center space-y-4">
          <li>
            <Link href="/interns">
              <p className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-full text-center w-40">
                Interns Details
              </p>
            </Link>
          </li>
          <li>
            <Link href="/colleges">
              <p className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-full text-center w-40">
                College Details
              </p>
            </Link>
          </li>
          <li>
            <Link href="/branches">
              <p className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-full text-center w-40">
                Branches Details
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
