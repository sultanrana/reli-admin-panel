import {
  Box,
  Table,
  TableContainer,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import BeardcrumNavigator from "../../components/BeardcrumNavigator";
import Sidebar from "../../components/Sidebar";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RowingSharp } from "@mui/icons-material";






const columns = [
  { id: "name", label: "Name", minWidth: 150, fontWeight: "600" },
  { id: "email", label: "Email", minWidth: 150, fontWeight: "600" },
  { id: "phone", label: "Phone", minWidth: 140, fontWeight: "600" },
  {
    id: "numberOfProperties",
    label: "Number of Properties",
    minWidth: 100,
    fontWeight: "600",
  },
  {
    id: "openProjects",
    label: "Open Projects",
    minWidth: 100,
    fontWeight: "600",
  },
  {
    id: "completedProjects",
    label: "Completed Projects",
    minWidth: 100,
    fontWeight: "600",
  },
  {
    id: "totalPurchases",
    label: "Total Purchases",
    minWidth: 100,
    fontWeight: "600",
  },
  { id: "status", label: "Status", minWidth: 100, fontWeight: "600" },
  { id: "lastActive", label: "Last Active", minWidth: 200, fontWeight: "600" },
  { id: "actions", label: "Actions", minWidth: 150, fontWeight: "600" },
];

function createData(
  name,
  email,
  phone,
  numberOfProperties,
  openProjects,
  completedProjects,
  totalPurchases,
  status,
  lastActive,
  actions
) {
  return {
    name,
    email,
    phone,
    numberOfProperties,
    openProjects,
    completedProjects,
    totalPurchases,
    status,
    lastActive,
    actions
  };
}

// var rows = [
//   createData(
//     "malik",
//     <TableLink text="johnsmith@tepia.co" route="customer-detail"  />,
//     <TableLink text="051-555-5555" route="customer-detail" />,
//     "2",
//     "5",
//     "5",
//     "$1,250.00",
//     "Active",
//     "05/09/22 12:00:00AM PT",
//     <div style={{ 
//       display: 'flex',
//       gap: '10px'
//   }}>
//       <IconButton>
//           <DeleteRoundedIcon/>
//       </IconButton>
//   </div>
//   ),
//   createData(
//     "bieee",
//     <TableLink text="johnsmith@tepia.co" route="customer-detail"  />,
//     <TableLink text="051-555-5555" route="customer-detail" />,
//     "2",
//     "5",
//     "5",
//     "$1,250.00",
//     "Active",
//     "05/09/22 12:00:00AM PT",
//     <div style={{ 
//       display: 'flex',
//       gap: '10px'
//   }}>
//       <IconButton>
//           <DeleteRoundedIcon/>
//       </IconButton>
//   </div>
//   ),
//   createData(
//     "hi",
//     <TableLink text="johnsmith@tepia.co" route="customer-detail"  />,
//     <TableLink text="051-555-5555" route="customer-detail" />,
//     "2",
//     "5",
//     "5",
//     "$1,250.00",
//     "Active",
//     "05/09/22 12:00:00AM PT",
//     <div style={{ 
//       display: 'flex',
//       gap: '10px'
//   }}>
//       <IconButton>
//           <DeleteRoundedIcon/>
//       </IconButton>
//   </div>
//   ),
// ];
var customerRows = [
  {name: 'Malik Azhar Abbas', email : 'malik@gmail.com', phone: '555-555-5555', numberOfProperties: 1, openProjects: 3, completedProjects: 5, totalPurchases: '$1,250.00', status: 'Active', lastActive: '05/09/22 12:00:00AM PT'},
  {name: 'Shahroz javed', email : 'shahroz@gmail.com', phone: '555-555-5555', numberOfProperties: 1, openProjects: 3, completedProjects: 5, totalPurchases: '$1,250.00', status: 'Active', lastActive: '05/09/22 12:00:00AM PT'},
  {name: 'bilal', email : 'bilal@gmail.com', phone: '555-555-5555', numberOfProperties: 1, openProjects: 3, completedProjects: 5, totalPurchases: '$1,250.00', status: 'Active', lastActive: '05/09/22 12:00:00AM PT'},
  {name: 'umar', email : 'umar@gmail.com', phone: '555-555-5555', numberOfProperties: 1, openProjects: 3, completedProjects: 5, totalPurchases: '$1,250.00', status: 'Active', lastActive: '05/09/22 12:00:00AM PT'},
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    backgroundColor: "#ddd",
  },
}));

const TableLink = styled('span')(({theme}) => ({
  color: '#2196f3',
  fontWeight: '500',
  textDecoration: 'underline',
  cursor: 'pointer'
}))

const Customers = () => {
  const { isDrawerOpen } = useSelector((store) => store.login);
  const breadcrumbs = [
    <Typography
      key="3"
      color="text.primary"
      style={{
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "34px",
        lineHeight: "36px",
        color: "#000000",
      }}
    >
      Customers
    </Typography>,
  ];
const navigate = useNavigate()
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [searchValue, setSearchValue] = useState('');
const [rows, setRows] = useState(customerRows);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSearch = (searchedValue) => {
    setSearchValue(searchedValue)
    const filteredRows = customerRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedValue.toLowerCase());
    });
    if(filteredRows.length > 0){
      setRows(filteredRows)
    }else{
      setRows(customerRows)
    }
  }
  

  return (
    <div className="page-section">
      <Sidebar />
      <Box
        className="page-content"
        sx={{
          width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`, overflow: "hidden"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <BeardcrumNavigator
            breadcrumbs={breadcrumbs ? breadcrumbs : "Beardcrums"}
          />
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button
              variant="outlined"
              className="bc-btn-outline"
              color="primary"
            >
              Export csv
            </Button>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box component="div">
            {/* <SearchBox /> */}
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
            <input type="text" value={searchValue} placeholder='Search' className='search-input' onChange={(e) =>  handleSearch(e.target.value)} />
        </Box>
          </Box>
          {/* <IconButton aria-label="filter-icon" size="large">
            <FilterListRoundedIcon />
          </IconButton> */}
        </Box>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table" sx={{}}>
              <TableHead>
                <StyledTableRow>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Name
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Email
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Phone
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Number of Properties
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Open Projects
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Completed Projects
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Total Purchases
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Status
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Last Active
                    </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell sx={{minWidth: 150}}>
                      <TableLink onClick={() => navigate('customer-detail')}>
                        {row.name}
                      </TableLink>
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.phone}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.numberOfProperties}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.openProjects}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.completedProjects}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.totalPurchases}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.status}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.lastActive}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
};

export default Customers;
