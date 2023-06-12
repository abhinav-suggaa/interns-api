import React from 'react';
import { useQuery } from '@apollo/client';
import client from '../apolloClient';
import { GET_INTERNS } from './queries';
import { FaRegEdit,FaRegTrashAlt } from 'react-icons/fa';

export default function Interns() {
  const { loading, error, data } = useQuery(GET_INTERNS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const internData = data?.intern_db_intern || [];

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Intern Details</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stipend</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {internData.map((intern: { id: boolean | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.PromiseLikeOfReactNode | null | undefined; first_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; last_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; stipend: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
              <tr key={intern.id}>
                <td className="px-6 py-4 whitespace-nowrap">{intern.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{intern.first_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{intern.last_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{intern.stipend}</td>
                <td className="px-6 py-4 whitespace-nowrap"><p><span id='edit'><FaRegEdit/></span><span id='delete'><FaRegTrashAlt/></span></p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
