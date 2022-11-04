import { Box, Table, TableContainer, Typography } from '@mui/material';
import React from 'react'
import BeardcrumNavigator from '../../components/BeardcrumNavigator'
import Sidebar from '../../components/Sidebar'
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchBox from '../../components/SearchBox';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
const columns = [
  { id: 'productId', label: 'Product ID', minWidth: 100 },
  { id: 'jobType', label: 'Job Type', minWidth: 100 },
  { id: 'color', label: 'Color', minWidth: 100 },
  { id: 'grid', label: 'Grid', minWidth: 150 },
  { id: 'openType', label: 'Open Type', minWidth: 150 },
  { id: 'temeredGlass', label: 'Temered Glass(Fire)', minWidth: 100 },
  { id: 'privacy', label: 'Privacy', minWidth: 100 },
  { id: 'safetyGlass', label: 'Safety Glass', minWidth: 150 },
  { id: 'dimensionClass', label: 'Dimension Class', minWidth: 100 },
  { id: 'pricePerSqInch', label: 'Price Per Square Inch', minWidth: 150 },
];

function createData(productId, jobType, color, grid, openType, temeredGlass, privacy, safetyGlass, dimensionClass, pricePerSqInch) {
  return { productId, jobType, color, grid, openType, temeredGlass, privacy, safetyGlass, dimensionClass, pricePerSqInch};
}

const rows = [
  createData("W1", "New", "White", "None (aka 0)", "Single Hung", "Yes", "Yes", "Yes", "Standard", `$125.000`),
  createData("W1", "New", "White", "None (aka 0)", "Single Hung", "Yes", "Yes", "Yes", "Standard", "$125.000"),
  createData("W1", "New", "White", "None (aka 0)", "Single Hung", "Yes", "Yes", "Yes", "Standard", "$125.000"),
  createData("W1", "New", "White", "None (aka 0)", "Single Hung", "Yes", "Yes", "Yes", "Standard", "$125.000"),
  createData("W1", "New", "White", "None (aka 0)", "Single Hung", "Yes", "Yes", "Yes", "Standard", "$125.000"),
  createData("W1", "New", "White", "None (aka 0)", "Single Hung", "Yes", "Yes", "Yes", "Standard", "$125.000"),
  createData("W1", "New", "White", "None (aka 0)", "Single Hung", "Yes", "Yes", "Yes", "Standard", "$125.000"),
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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
      backgroundColor: '#ddd',
    },
  }));
const ServiceProducts = () => {
const breadcrumbs = [
    <Typography key="3" color="text.primary" style={{
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '34px',
        lineHeight: '36px',
        color: '#000000'
    }}>
        Services
    </Typography>
];
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};




  return (
    <div className="page-section">
      <Sidebar/>
      <div className="page-content">
        <BeardcrumNavigator breadcrumbs={breadcrumbs ? breadcrumbs : "Beardcrums"}/>
        <Box component="div">
            <SearchBox/>
        </Box>
        <Box>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <StyledTableRow>
                    {columns.map((column) => (
                        <StyledTableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </StyledTableCell>
                    ))}
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <StyledTableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </StyledTableCell>
                            );
                            })}
                        </StyledTableRow>
                        );
                    })}
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
    </div>
  )
}

export default ServiceProducts