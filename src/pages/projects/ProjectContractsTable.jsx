import React from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  IconButton,
  Table,
  TableContainer,
  Typography,
} from "@mui/material";
import TableLink from "../../components/TableLink";
import TableActions from "../../components/TableActions";
import moment from "moment";
import { useDispatch } from "react-redux";
import { changeProjectStatus } from "../../features/projects/projectSlice";

// active project
const activeProjectColumns = [
  {
    id: "transactionType",
    label: "Transaction Type",
    minWidth: 150,
    fontWeight: "600",
  },
  { id: "date", label: "Date", minWidth: 100, fontWeight: "600" },
  { id: "paidTo", label: "Paid To", minWidth: 100, fontWeight: "600" },
  { id: "amount", label: "Amount", minWidth: 100, fontWeight: "600" },
  { id: "status", label: "Amount", minWidth: 180, fontWeight: "600" },
  { id: "actions", label: "Actions", minWidth: 140, fontWeight: "600" },
];
// active project
function createData(transactionType, date, paidTo, amount, status, actions) {
  return { transactionType, date, paidTo, amount, status, actions };
}
// active project
const activeProjectrows = [
  createData(
    "Initial Payment",
    "04/30/22",
    "Bob Smith",
    "$295.34",
    "Paid",
    <TableActions />
  ),
  createData(
    "Initial Payment",
    "04/30/22",
    "Bob Smith",
    "$295.34",
    <Button variant="contained">Log payment</Button>,
    <TableActions />
  ),
];
const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "800px",
  },
}));

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
const ProjectContractsTable = (props) => {
  const { data } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch()

  const logPayment = () => {
    const obj = {
      'orderStatus' : 'Paid'
    }
    dispatch(changeProjectStatus(obj))
  }

  return (
    <Root>
      <Paper sx={{ width: "100%", overflow: "hidden", mb: 3 }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table" sx={{}}>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>
                  Transaction Type 
                </StyledTableCell>
                <StyledTableCell>
                  Date
                </StyledTableCell>
                <StyledTableCell>
                  Paid To
                </StyledTableCell>
                <StyledTableCell>
                  Amount
                </StyledTableCell>
                <StyledTableCell>
                  Status
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>
                  {data?.cardHolderName}
                </StyledTableCell>
                <StyledTableCell>
                  {moment(data?.createdAt).format('DD/MM/YY')}
                </StyledTableCell>
                <StyledTableCell>
                  {data?.name}
                </StyledTableCell>
                <StyledTableCell>
                  {data?.totalAmount? '$' + data?.totalAmount.toFixed(2) : '$0.00'}
                </StyledTableCell>
                <StyledTableCell>
                  {data?.orderStatus == 'Completed' ? 
                    <Button variant="contained" onClick={()=>logPayment()}>Log Payment</Button>
                  : data?.orderStatus} 
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={activeProjectrows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
      </Paper>
    </Root>
  );
};

export default ProjectContractsTable;
