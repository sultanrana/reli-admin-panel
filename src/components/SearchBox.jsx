import {TextField, Box,} from '@mui/material';
import SearchComponent from "react-material-ui-searchbar";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const SearchBox = () => {
  const handleSearch = e => {
    console.log(e.target.value);
  }
  return (
        <>
          {/* <SearchComponent sx={{
            mb: 3,
            background: '#FFFFFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '33px',
            height: 50,
            flexDirection: 'revert'
        }}
        svgFontSize="medium"
        /> */}
        <Box sx={{
            background: '#FFFFFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '33px',
            height: 50,
            display: 'flex',
            alignItems: 'center',
            maxWidth: '245px',
            border: '1px solid #ddd',
            overflow: 'hidden'
        }}>
            <SearchRoundedIcon sx={{
              width: '16%',
              marginLeft: '6px'
            }}/>
            <input type="text" placeholder='Search' className='search-input' onChange={handleSearch} />
        </Box>
        </>

  )
}

export default SearchBox