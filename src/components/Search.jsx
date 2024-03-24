import { useSearch } from "../contexts/SearchContext"

const Search = () => {
    const { searchValue, setSearch } = useSearch();

    const handleSearch = (e) => setSearch(e.target.value);

    return (
        <div className="search_wrapper">
            <div className="search_icon"></div>
            <form className="search_block">
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    value={searchValue} 
                    onChange={(e) => handleSearch(e)}
                    placeholder="Search..." 
                />
            </form>
        </div>
    );
};

export default Search;
