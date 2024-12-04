"use client"
import React, { useState, useEffect } from "react";
const StaffDetails =  (props) => {
    const id =  props.id;
    console.info(id);
    const [staffDetailsById, setStaffDetailsById] = useState([]);
    useEffect(() => {
        fetch(`./api/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setStaffDetailsById(data);
            console.dir(data)
          })
          .catch((error) => {
            console.error("Error loading JSON:", error);
          });
      }, [id]);
      return (
      <div className='container'>
        <h2>Staff Details</h2>
        <p>{staffDetailsById.first_name}</p>
      </div>
    );
  }
  export default StaffDetails