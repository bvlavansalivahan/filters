import React, { useState } from 'react'


const Table=({data})=> {
    let [query,setquery]=useState("");
    query=query.toLowerCase();        
    const filtered= data.filter((user)=>user.email.toLowerCase().includes(query)||
    user.first_name.toLowerCase().includes(query)||
    user.last_name.toLowerCase().includes(query)||
    user.gender.toLowerCase().includes(query)||
    user.ip_address.includes(query));
  return (   
    <div>
        <input type='search' placeholder="Search..." onChange={(e)=>setquery(e.target.value)}/>
<table>
        <tbody>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>email.Id</th>
                <th>Gender</th>
                <th>ip_address</th>
            </tr>
        </tbody>
        <tbody>

            {filtered.map((user)=>{
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}{" "}{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.ip_address}</td>
                  </tr>  
                )
            })}
                
            
        </tbody>
    </table>
    </div>
    
  )
}

export default Table
