"use client";
import React, { useState } from "react";
import Link from 'next/link';
import StaffDetails from "./StaffDetails";
const StaffList = ({staffData}) => {
    const [selectedStaffId, setSelectedStaffId] = useState(null);

    const handleStaffClick = (id) => {
      console.info(id);
      setSelectedStaffId(id);
    };
    return (
        <div className="flex">
                <div>
      <ul>
       
              {staffData.map((item, index) => (
                <li key={item.id} onClick={() => handleStaffClick(item.id)}>
                  {item.first_name} {item.last_name}
                  <p><Link href={`staff/${item.id}`}>... More</Link></p>
                </li>
              ))}

      </ul>
      </div>
      <div>
      {selectedStaffId && <StaffDetails id={selectedStaffId} />}
      </div>
      </div>
    );
  };
  export default StaffList;