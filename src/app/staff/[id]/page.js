import { fetchStaffDetails } from "@/app/lib/db";
import Link from "next/link";
export async function generateMetadata({ params }) {
  const { id } = await params;
  const staff = await fetchStaffDetails(id);
  return {
    title: staff.first_name || "Staff Details",
  };
}
const StaffDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const staffDetails = await fetchStaffDetails(id);
  console.dir(staffDetails);
  return (
    <div className='container'>
      <h2>
        Staff Details: {staffDetails.first_name} {staffDetails.last_name}
      </h2>
      <p>
        <Link href='/staff'>Back to Staff List</Link>
      </p>
      <p>
        Email: {staffDetails.email}
        <br />
        Department: {staffDetails.department}
        <br />
        City: {staffDetails.city}
        <br />
        Country: {staffDetails.country}
      </p>
    </div>
  );
};
export default StaffDetails;
