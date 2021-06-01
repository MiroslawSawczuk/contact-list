interface SearchBarProps {
  searchValue: string;
  handleChangeSearchValue(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { searchValue, handleChangeSearchValue } = props;

  return (
    <input
      className="form-control"
      type="text"
      value={searchValue}
      placeholder="Search..."
      onChange={handleChangeSearchValue}
    />
  );
};

export default SearchBar;
