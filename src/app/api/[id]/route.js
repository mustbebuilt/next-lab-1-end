import {
    fetchStaffDetails,
  } from "../../lib/db";
  export async function GET(request, { params }) {
    const id = (await params).id 
    const staffs = await fetchStaffDetails(id);
    return new Response(JSON.stringify(staffs));
  }
  