import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import client from '../apolloClient';
import { GET_INTERNS, DEL_INTERN } from './queries';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

export default function Interns() {
  const { loading, error, data } = useQuery(GET_INTERNS, { client });
  const [deleteIntern] = useMutation(DEL_INTERN,{ client});

  const deleteInternHandler = (id: number) => {
    deleteIntern({ variables: { id } })
      .then(() => {
        alert('Intern deleted successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stipend
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {internData.map((intern: {
              id: number;
              first_name: string;
              last_name: string;
              stipend: string;
            }) => (
              <tr key={intern.id}>
                <td className="px-6 py-4 whitespace-nowrap">{intern.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{intern.first_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{intern.last_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{intern.stipend}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  
                    <button id="edit">
                      <FaRegEdit />
                    </button>
                    <button id="delete" onClick={() => deleteInternHandler(intern.id)}>
                      <FaRegTrashAlt />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
