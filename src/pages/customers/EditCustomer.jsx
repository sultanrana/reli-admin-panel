import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
  Checkbox,
  IconButton,
  Button,
  ButtonGroup,
} from "@mui/material";
import {
  handleAddUserModal,
  handleEditCustomerModal,
} from "../../features/login/loginSlice";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Profiler, useRef } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getCutomerDetail, getCutomers, updateCustomer } from "../../features/customer/customerSlice";
const EditCustomer = () => {
  const { isEditCustomerModal } = useSelector((store) => store.login);
  const { customerDetail } = useSelector((store) => store.customer);
  const dispatch = useDispatch();
  const { customerid } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState(customerDetail.data?.statusBit);

  let imgInput = useRef(null);
  let imgRef = useRef(null);
  const pickFile = () => {
    imgInput.current.click();
  };
  const handleAddImg = (e) => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    imgRef.current.src = url;
  };
  const clearImgRef = () => {
    imgRef.current.src = "/images/circle-gray.png";
  };
  const handleStatus = () => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  useEffect(() => {
    // console.log(status);
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Please enter a name'),
  });
  const formik = useFormik({
    initialValues: {
      firstName: customerDetail.data?.firstName
        ? customerDetail.data?.firstName
        : "",
      // lastName: customerDetail.data?.lastName? customerDetail.data?.lastName : '',
      email: customerDetail.data?.email ? customerDetail.data?.email : "",
      statusBit: customerDetail.data?.statusBit,
    },
    onSubmit: (values) => {
      values.statusBit = status;
      if (imgInput.current.files[0]) {
        values.profileImage = imgInput.current.files[0];
      }
      dispatch(updateCustomer(values));
      dispatch(handleEditCustomerModal());
      dispatch(getCutomerDetail(customerid));
      navigate(`/customers/${customerid}`);
    },
    validationSchema,
  });

  return (
    <>
      <Dialog
        open={isEditCustomerModal}
        scroll="body"
        onClose={() => dispatch(handleEditCustomerModal())}
        aria-describedby="scroll-dialog-description"
      >
        <form onSubmit={formik.handleSubmit}>
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
            Edit Customer
          </DialogTitle>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              mr: 3,
            }}
          >
            <Box component="div" className="addImg">
              <img
                src={customerDetail.data?.profileImage ? `http://34.236.149.254/src/uploads/images/userImage/${customerDetail.data?.profileImage}` : "/images/circle-gray.png"}
                alt="addCompanyImg"
                ref={imgRef}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <input
                type="file"
                hidden
                id="getImg"
                ref={imgInput}
                onChange={(e) => handleAddImg(e)}
              />
            </Box>
            <Box component="div">
              <IconButton onClick={pickFile}>
                <ModeEditOutlineRoundedIcon />
              </IconButton>
              <IconButton onClick={clearImgRef}>
                <CloseRoundedIcon />
              </IconButton>
            </Box>
          </Box>
          <DialogContent
            sx={{
              p: 0,
            }}
          >
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Container maxWidth="xs">
                <div className="group">
                  <p className="btn_label">Status</p>
                  <div className="btn_group">
                    <button
                      type="button"
                      className={status ? "active" : ""}
                      onClick={handleStatus}
                    >
                      Enabled
                    </button>
                    <button
                      type="button"
                      className={status ? "" : "active"}
                      onClick={handleStatus}
                    >
                      Disabled
                    </button>
                  </div>
                </div>
                <TextField
                  sx={{ width: "100%", mb: 4, mt: 5 }}
                  id="firstName"
                  name="firstName"
                  label="Name"
                  variant="outlined"
                  {...formik.getFieldProps("firstName")}
                  error={
                    Boolean(formik.errors.firstName) &&
                    Boolean(formik.touched.firstName)
                  }
                  helperText={
                    Boolean(formik.touched.firstName) && formik.errors.firstName
                  }
                />
                <TextField
                  sx={{ width: "100%", mb: 4 }}
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  disabled
                  {...formik.getFieldProps("email")}
                  error={
                    Boolean(formik.errors.email) &&
                    Boolean(formik.touched.email)
                  }
                  helperText={
                    Boolean(formik.touched.email) && formik.errors.email
                  }
                />
              </Container>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => dispatch(handleEditCustomerModal())}
            >
              Cancel
            </Button>
            {/* <Button variant='contained' onClick={() => dispatch(handleEditCustomerModal())}>Save</Button> */}
            <Button type="submit" variant="contained">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default EditCustomer;
