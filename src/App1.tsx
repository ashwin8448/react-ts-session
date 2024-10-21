import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

// Simulated list of items
const items = ["Apple", "Banana", "Grapes", "Orange", "Pineapple", "Mango"];

function FilteredList() {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  // useRef to store input focus reference
  const inputRef = useRef(null);

  // useEffect to focus on the input when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // useMemo to memoize the filtered items calculation
  const memoizedFilteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // useCallback to memoize the handleSearch function to avoid re-creation
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  // useEffect to update filteredItems when memoizedFilteredItems changes
  useEffect(() => {
    setFilteredItems(memoizedFilteredItems);
  }, [memoizedFilteredItems]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search items"
        value={search}
        onChange={handleSearch}
        className="border rounded p-2"
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
}

export default FilteredList;
