const FilterPanel = ({ onFilter }) => {
    const handleFilterChange = (e) => {
      onFilter(e.target.value);
    };
  
    return (
      <div>
        <select onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
      </div>
    );
  };
  
  export default FilterPanel;
  