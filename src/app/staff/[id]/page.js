import { fetchStaffDetails } from "@/app/lib/db";
export async function generateMetadata({ params }) {
    const {id} = await params;
    const staff = await fetchStaffDetails(id);
    return {
      title: staff.first_name || "Staff Details",
    };
  }
const StaffDetails = async ({params}) => {
    const {id} = await params;
    console.log(id);
    const staffDetails = await fetchStaffDetails(id);
    console.dir(staffDetails)
      return (
      <div className='container'>
        <h2>Staff Details</h2>
        <p>{staffDetails.first_name}</p>
      </div>
    );
  }
  export default StaffDetails