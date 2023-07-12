import { Form } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = ({ keywords, setKeywords }) => {
  const handleSearchInputChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleSearchInputReset = (e) => {
    setKeywords("");
  };

  return (
    <div className="search-bar">
      <Form.Control
        type="text"
        name="search"
        placeholder="Search"
        value={keywords}
        onChange={handleSearchInputChange}
      />
      {keywords && (
        <button className="reset-search" onClick={handleSearchInputReset}>
          &#10005;
        </button>
      )}
    </div>
  );
};

export default SearchBar;
