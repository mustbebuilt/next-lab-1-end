// quick view version is client side so uses api data via fetch / useEffect
"use client";
import React, { useState, useEffect } from "react";
const StaffDetails = (props) => {
  const id = props.id;
  console.info(id);
  const [staffDetailsById, setStaffDetailsById] = useState([]);
  useEffect(() => {
    fetch(`./api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStaffDetailsById(data);
        console.dir(data);
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
      });
  }, [id]);
  return (
    <div>
      <h2>Staff Details</h2>
      <div>
        <p>
          {staffDetailsById.first_name} {staffDetailsById.last_name}
          <br />
          Email: {staffDetailsById.email}
          <br />
          Department: {staffDetailsById.department}
          <br />
        </p>
      </div>
    </div>
  );
};
export default StaffDetails;
