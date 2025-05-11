import React from 'react'
import axios from 'axios';

export default function Update() {

    function updateData() {
        var id = document.getElementsByName("idn")[0].value;
        var name = document.getElementsByName("namen")[0].value;
    
        axios.put("http://localhost:8080/product", {
            "id": parseInt(id),
            "name": name
        })
        .then((res) => {
            alert(res.data);
        });
    }

  return (
    <div>
      ID : <input type="text" name="idn" />
      <br/><br/>
      Name: <input type="text" name="namen" />
      <br/><br/>
      <button onClick={updateData}>UPDATE</button>
    </div>
  )
}