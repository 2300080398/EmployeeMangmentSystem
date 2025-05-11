import axios from 'axios';
import React from 'react';

export default function Delete() {

    function deleteData() {
        var id = document.getElementsByName("idn")[0].value;

        axios.delete(`http://localhost:8080/product/${id}`, {})
        .then((res) => {
            alert(res.data);
        });
    }

    return (
        <div>
            ID: <input type="text" name="idn" />
            <br/><br/>
            <button onClick={deleteData}>DELETE</button>
        </div>
    );
}