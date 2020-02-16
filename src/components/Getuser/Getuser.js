import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getUserDetails } from '../../Apollo/query';

const Getuser = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useQuery(getUserDetails);
    console.log(data, "<<<Dataa", loading, error)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return(
        <div>
        <table style={{ marginTop: 100, border: '1px solid #000'}}>
        <tr style={{background: '#ddd'}}>
            <th style={{width: 300}}><u><b>Serial Number</b></u></th>
            <th style={{width: 300}}><u><b> Email</b></u></th>
            <th style={{width: 300}}><u><b>Role</b></u></th>
        </tr>
        {data.getUserDetails.map((item, index) => (
            <>
            <tr key={index} style={{textAlign: 'center', background: '#fff' }}>
                <td style={{width: 300, border: '1px solid #000'}}><p>{index + 1}</p></td>
                <td style={{width: 300,  border: '1px solid #000'}}>{item.email}</td>
                <td style={{width: 300,  border: '1px solid #000'}}><p>{item.role}</p></td>
            </tr>
            </>
        ))}
        </table>
        </div>
    )
}

export default Getuser;