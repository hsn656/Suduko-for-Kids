import "./Searchbar.css";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className='searchInput'>
        <input type="text" placeholder="استعلام عن حالة مواليد أو وفاة"/>
        <div className='searchIcon'> <FiSearch /> </div>
    </div>
  )
}

export default SearchBar