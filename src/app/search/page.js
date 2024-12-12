import { fetchSearch } from "@/app/lib/db";
import Link from "next/link";
import SearchForm from "../Components/SearchForm";
export const metadata = {
  title: "Search Results",
  description: "Generated by create next app",
};
const Search = async ({ searchParams }) => {
  const query = (await searchParams).query;
  console.log(query);
  const staffData = await fetchSearch(query);
  return (
    <div>
      <h2>Search</h2>
      <SearchForm />
      <div>
        {staffData.length > 0 ? (
          <ul>
            {staffData.map((item, index) => (
              <li key={item.id}>
                <Link href={`staff/${item.id}`}>
                  {item.first_name} {item.last_name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            No results found for the <em>{query}</em>.
          </p>
        )}
      </div>
    </div>
  );
};
export default Search;