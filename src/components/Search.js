import React from "react"; // , {useState}

function Search({onSearchInputChange, searchInput}) {
  // const [searchInput, setSearchInput] = useState("")

    // search by name
    // make searchInput a controlled component
    //filter(e.target.value)
    // update state (setSearchPo)

  // function handleSearchInputChange(e){
  //   setSearchInput(e.target.value)
  // }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" onChange={onSearchInputChange} value={searchInput} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
