import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import {
  Button,
  TextField,
  Table,
  TableContainer,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { object } from "yup";
import * as Yup from "yup";
import { refundTransaction } from "../../features/projects/projectSlice";

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

const RefundContainer = styled(TableContainer)(({ theme }) => ({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "475px",
  },
}));
const StyledTextField = styled(TextField)(({ theme }) => ({
  height: "54px",
  marginBottom: "7rem",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "304px",
  },
}));

const ProjectCustomersTable = (props) => {
  const { projectDetail } = useSelector((store) => store.project);
  const param = useParams();
  const dispatch = useDispatch();
  const [isRefund, setIsRefund] = useState(false);

  const handleRefundModal = () => {
    if (isRefund) {
      setIsRefund(false);
    } else {
      setIsRefund(true);
    }
  };

  const initialValues = {
    refundAmount: parseInt(0).toFixed(2),
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", mb: 3 }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table" sx={{}}>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Transaction Type</StyledTableCell>
                <StyledTableCell>Processed</StyledTableCell>
                <StyledTableCell>Amount</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                {projectDetail.data?.order_info?.stripeRefundId ? (
                  ""
                ) : (
                  <StyledTableCell>Action</StyledTableCell>
                )}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>
                  {projectDetail.data?.order_info?.cardHolderName}
                </StyledTableCell>
                <StyledTableCell>
                  {moment(projectDetail.data?.order_info?.createdAt).format(
                    "DD/MM/YY"
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  {projectDetail.data?.order_info?.totalAmount
                    ? "$" +
                      projectDetail.data?.order_info?.totalAmount.toFixed(2)
                    : "$0.00"}
                </StyledTableCell>
                <StyledTableCell>
                  {projectDetail.data?.order_info?.statusBit
                    ? "Paid"
                    : "Unpaid"}
                </StyledTableCell>
                {projectDetail.data?.order_info?.stripeRefundId ? (
                  ""
                ) : (
                  <StyledTableCell>
                    <Button variant="contained" onClick={handleRefundModal}>
                      refund
                    </Button>
                  </StyledTableCell>
                )}
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
      {isRefund ? (
        <Dialog
          open={isRefund}
          scroll="body"
          onClose={handleRefundModal}
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle
            id="scroll-dialog-title"
            sx={{
              p: 1,
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "24px",
              letterSpacing: "0.18px",
              color: "#000000",
            }}
          >
            Refund
          </DialogTitle>
          <RefundContainer>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                color: "#000000",
              }}
            >
              {projectDetail.data?.order_detail.length > 0 &&
              projectDetail.data?.order_detail[0].service
                ? projectDetail.data?.order_detail[0].service.name
                : ""}{" "}
              {param.projectid}
            </Typography>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer>
                <Table stickyHeader aria-label="sticky table" sx={{}}>
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell
                        sx={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        Transaction Type
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        Date
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        Amount
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        Status
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <StyledTableCell>
                        {projectDetail.data?.order_info?.cardHolderName}
                      </StyledTableCell>
                      <StyledTableCell>
                        {moment(
                          projectDetail.data?.order_info?.createdAt
                        ).format("DD/MM/YY")}
                      </StyledTableCell>
                      <StyledTableCell>
                        {projectDetail.data?.order_info?.totalAmount
                          ? "$" +
                            projectDetail.data?.order_info?.totalAmount.toFixed(
                              2
                            )
                          : "$0.00"}
                      </StyledTableCell>
                      <StyledTableCell>
                        {projectDetail.data?.order_info?.statusBit
                          ? "Paid"
                          : "Unpaid"}
                      </StyledTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, formikHelpers) => {
                values.orderId = projectDetail.data?.order_info?._id;
                dispatch(refundTransaction(values));
                console.log("values: ", values);
              }}
              validationSchema={object({
                refundAmount: Yup.number()
                  .required()
                  .max(
                    projectDetail.data?.order_info?.totalAmount,
                    `Maximum refund value must less or equal to ${projectDetail.data?.order_info?.totalAmount.toFixed(
                      2
                    )}.`
                  )
                  .test(
                    "not-only-zeroes",
                    "Number cannot only contain zeroes",
                    function (value) {
                      if (value === null || value === undefined) {
                        return true; // Don't validate null or undefined values
                      }
                      const stringValue = value.toString(); // Convert the number to a string
                      return !/^0+$/.test(stringValue); // Return true if the string does not only contain zeroes
                    }
                  ),
              })}
            >
              {({errors, touched, isValid, dirty}) => (
                <Form>
                  <Field as={StyledTextField}
                    sx={{ width: "100%" }}
                    id="refundAmount"
                    name="refundAmount"
                    label="Amount"
                    variant="outlined"
                    error = {Boolean(errors.refundAmount) && Boolean(touched.refundAmount)}
                    helperText="Max available for refund"
                  />
                  <DialogActions>
                    <Button variant="outlined" onClick={handleRefundModal}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="contained">
                      Save Changes
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </RefundContainer>
        </Dialog>
      ) : null}
    </>
  );
};

export default ProjectCustomersTable;
