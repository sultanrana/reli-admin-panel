import SearchComponent from "react-material-ui-searchbar";
const SearchBox = () => {
  return (
        <SearchComponent sx={{
            mb: 3,
            background: '#FFFFFF',
            border: '1px solid #F2F2F2',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '33px',
            height: 50,
            flexDirection: 'revert'
        }}
        svgFontSize="medium"
        />
  )
}

export default SearchBox