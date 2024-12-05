"use client";
import React, { useState } from "react";
import Link from "next/link";
import StaffDetails from "./StaffDetails";
const StaffList = ({ staffData }) => {
  const [selectedStaffId, setSelectedStaffId] = useState(null);

  const handleStaffClick = (ev, id) => {
    ev.preventDefault();
    console.info(id);
    setSelectedStaffId(id);
  };
  return (
    <div className='flex'>
      <div>
        <ul>
          {staffData.map((item, index) => (
            <li key={item.id}>
              <p>
                {item.first_name} {item.last_name} ...
                <a href='#' onClick={(ev) => handleStaffClick(ev, item.id)}>
                  quick view
                </a>
              </p>
              <p>
                <Link href={`staff/${item.id}`}>... More Details</Link>
              </p>
            </li>
          ))}
        </ul>
      </div>
      {selectedStaffId && (
        <div>
          <StaffDetails id={selectedStaffId} />
        </div>
      )}
    </div>
  );
};
export default StaffList;
