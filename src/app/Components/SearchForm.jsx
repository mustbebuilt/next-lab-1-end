import Form from 'next/form'
import './SearchForm.css'
const SearchForm = () =>{
    return(
        <div className="searchForm">
            <Form action="/search">
                <input type="text" name="query" placeholder="Search..." />
                <button type="submit">Search</button>
            </Form>
        </div>
    )
}
export default SearchForm