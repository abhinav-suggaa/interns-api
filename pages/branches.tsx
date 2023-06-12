import React from 'react';
import { useQuery } from '@apollo/client';
import client from '../apolloClient';
import { GET_BRANCHES } from './queries';
import { FaRegEdit,FaRegTrashAlt } from 'react-icons/fa';

export default function Branches() {
  const { loading, error, data } = useQuery(GET_BRANCHES, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const branchData = data?.intern_db_branch || [];

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Branches Details</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HOD Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HOD Contact</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {branchData.map((branch) => (
              <tr key={branch.id}>
                <td className="px-6 py-4 whitespace-nowrap">{branch.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{branch.branch_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{branch.hod_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{branch.hod_contact}</td>
                <td className="px-6 py-4 whitespace-nowrap"><p><span id='edit'><FaRegEdit/></span><span id='delete'><FaRegTrashAlt/></span></p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
