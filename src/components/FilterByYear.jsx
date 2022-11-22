import filterYearStyle from "../components/FilterYear.module.css";

const FilterByYear = (props) => {
  const onFiltetChange = (e) => {
    e.preventDefault();
    props.onFilterYear(e.target.value);
  };

  return (
    <>
      <div className={filterYearStyle.container}>
        <div className={filterYearStyle.flex}>
          <div className={filterYearStyle.text}>
            <h1>Filter By Year</h1>
          </div>
          <div className={filterYearStyle.dropDown}>
            <select onChange={onFiltetChange}>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByYear;
