import {
    fetchStaff,
  } from "../lib/db";
  export async function GET() {
    const staffs = await fetchStaff();
    return new Response(JSON.stringify(staffs));
  }
