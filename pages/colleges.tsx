import React from 'react';
import {useQuery} from '@apollo/client';
import client from '../apolloClient';
import {GET_COLLEGES} from './queries';

export default function Colleges() {
    const {loading, error, data} = useQuery(GET_COLLEGES, {client});

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>

    return (
        <div>
            <h1>College Details</h1>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    );
}