import React from 'react';
import {useQuery} from '@apollo/client';
import client from '../apolloClient';
import {GET_BRANCHES} from './queries';

export default function Branches() {
    const {loading, error, data} = useQuery(GET_BRANCHES, {client});

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>

    return (
        <div>
            <h1>Branches Details</h1>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    );
}