import React from 'react';
import { useQuery,useMutation } from '@apollo/client';
import client from '../apolloClient';
import { GET_COLLEGES,DEL_COLLEGE } from './queries';
import { FaRegEdit,FaRegTrashAlt } from 'react-icons/fa';

export default function Colleges() {
  const { loading, error, data } = useQuery(GET_COLLEGES, { client });
  const [deleteCollege] = useMutation(DEL_COLLEGE,{ client});

  const deleteCollegeHandler = (id: number) => {
    deleteCollege({ variables: { id } })
      .then(() => {
        alert('College deleted successfully');
      })
      .catch((error) => {
        console.log(error);
      })};
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const collegeData = data?.intern_db_college || [];

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">College Details</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {collegeData.map((college:{
              id: number;
              college_name: string;
              college_address: string;
            }) => {
              return (
                <tr key={college.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{college.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{college.college_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{college.college_address}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button id='edit'><FaRegEdit/></button>
                    <button id='delete' onClick={() => deleteCollegeHandler(college.id)}><FaRegTrashAlt/></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}