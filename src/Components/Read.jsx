import React, { useState } from 'react';
import axios from 'axios';

export default function Read() 
{
    const [result, setResult] = useState(null);

    if (result == null) {
        axios.get("http://localhost:8080/product", {})
        .then((res) => {
            setResult(res.data);
        });
    }

    if (result == null)
        return (
            <div>
                Data is Fetching
            </div>
        );
    else
        return (
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                </tr>
                {result.map((element) => {
                    return (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                        </tr>
                    );
                })}
            </table>
        );
  }