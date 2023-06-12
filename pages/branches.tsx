import React from 'react';
import { useRouter } from 'next/router';
import { useQuery,useMutation } from '@apollo/client';
import client from '../apolloClient';
import { GET_BRANCHES,DEL_BRANCH } from './queries';
import { FaRegEdit,FaRegTrashAlt } from 'react-icons/fa';

export default function Branches() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_BRANCHES, { client });
  const [deleteBranch] = useMutation(DEL_BRANCH,{ client});

  const deleteBranchHandler = (id: number) => {
    deleteBranch({ variables: { id } })
      .then(() => {
        alert('Branch deleted successfully');
        router.reload();
      })
      .catch((error) => {
        console.log(error);
      })};


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
            {branchData.map((branch : {
              id: number;
              branch_name: string;
              hod_name: string;
              hod_contact: string;
            }) => (
              <tr key={branch.id}>
                <td className="px-6 py-4 whitespace-nowrap">{branch.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{branch.branch_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{branch.hod_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{branch.hod_contact}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button id='edit'><FaRegEdit/></button>
                  <button id='delete' onClick={() => deleteBranchHandler(branch.id)}><FaRegTrashAlt/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
