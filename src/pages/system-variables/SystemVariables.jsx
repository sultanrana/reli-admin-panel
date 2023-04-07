import {
    Box,
    Button,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    Typography,
  } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import BeardcrumNavigator from "../../components/BeardcrumNavigator";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useEffect } from "react";
import { getVariables, updateVariable } from "../../features/system-variables/systemVariableSlice";
import { useState } from "react";
import Loading from "../../components/Loading";





const SystemVariables = () => {
const theme = useTheme();
const dispatch = useDispatch();
const {isDrawerOpen} = useSelector((store) => store.login);
const {variables, isLoading} = useSelector((store) => store.systemVariable);
const matches = useMediaQuery('(max-width:600px)');
const variablesData = JSON.parse(localStorage.getItem('variableDetials'));
const [variableDetials, setVariableDetials] = useState(variablesData? variablesData : variables);

useEffect(() => {
    dispatch(getVariables());
},[])


const validationSchema = Yup.object({
    reliPortion: Yup.number().required(),
    materialSurcharge: Yup.number().required(),
    windowsPermitFee: Yup.number().required(),
    windowsDeliveryFee: Yup.number().required(),
    slidingGlassDoorPermitFee: Yup.number().required(),
    slidingGlassDoorDeliveryFee: Yup.number().required(),
    interiorDoorPermitFee: Yup.number().required(),
});
const formik = useFormik({
    initialValues: {
      reliPortion: variableDetials?.data?.reliPortion,
      materialSurcharge: variableDetials?.data?.materialSurcharge,
      windowsPermitFee: variableDetials?.data?.windowsPermitFee,
      windowsDeliveryFee: variableDetials?.data?.windowsDeliveryFee,
      slidingGlassDoorPermitFee: variableDetials?.data?.slidingGlassDoorPermitFee,
      slidingGlassDoorDeliveryFee: variableDetials?.data?.slidingGlassDoorDeliveryFee,
      interiorDoorPermitFee: variableDetials?.data?.interiorDoorPermitFee,
    },
    onSubmit: (values) => {
      dispatch(updateVariable(values));
      console.log(values);
    },
    validationSchema
});


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
      System Variables
    </Typography>,
  ];

  if(isLoading){
    return (
        <Loading/>
    )
}
  return (
    <div className="page-section">
      <Sidebar/>
        <Box className="page-content" sx={{width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`, overflow: "hidden"}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
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

            <Box component="div" sx={{ py: 4, px: matches? 2: 8, backgroundColor: '#F7F7F7'}}>
                <form onSubmit={formik.handleSubmit}>
                    <Box component="div" sx={{display: 'flex', gap: '4rem', flexWrap: 'wrap', width: '100%', mb: 7}}>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                id="reliPortion"
                                name="reliPortion"
                                label="Reli Portion"
                                {...formik.getFieldProps('reliPortion')}
                                error = {Boolean(formik.errors.reliPortion) && Boolean(formik.touched.reliPortion)}
                                // helperText = {Boolean(formik.touched.reliPortion) && formik.errors.reliPortion}
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Product</div>
                        </div>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                id="materialSurcharge"
                                name="materialSurcharge"
                                label="Materials Surcharge"
                                {...formik.getFieldProps('materialSurcharge')}
                                error = {Boolean(formik.errors.materialSurcharge) && Boolean(formik.touched.materialSurcharge)}
                                // helperText = {Boolean(formik.touched.materialSurcharge) && formik.errors.materialSurcharge}
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Product</div>
                        </div>
                    </Box>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '16px',
                        letterSpacing: '1.25px',
                        textTransform: 'uppercase',
                        color: '#000000',
                        mb: 3
                    }}>
                        Windows Fees
                    </Typography>
                    <Box component="div" sx={{display: 'flex', gap: '4rem', flexWrap: 'wrap', width: '100%', mb: 5}}>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                id="windowsPermitFee"
                                name="windowsPermitFee"
                                label="Permit Fee"
                                {...formik.getFieldProps('windowsPermitFee')}
                                error = {Boolean(formik.errors.windowsPermitFee) && Boolean(formik.touched.windowsPermitFee)}
                                // helperText = {Boolean(formik.touched.windowsPermitFee) && formik.errors.windowsPermitFee}
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Windows</div>
                        </div>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                required
                                id="windowsDeliveryFee"
                                name="windowsDeliveryFee"
                                label="Delivery Fee"
                                {...formik.getFieldProps('windowsDeliveryFee')}
                                error = {Boolean(formik.errors.windowsDeliveryFee) && Boolean(formik.touched.windowsDeliveryFee)}
                                // helperText = {Boolean(formik.touched.windowsDeliveryFee) && formik.errors.windowsDeliveryFee}
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Windows</div>
                        </div>
                    </Box>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '16px',
                        letterSpacing: '1.25px',
                        textTransform: 'uppercase',
                        color: '#000000',
                        mb: 3
                    }}>
                        Sliding Glass Door Fees
                    </Typography>
                    <Box component="div" sx={{display: 'flex', gap: '4rem', flexWrap: 'wrap', width: '100%', mb: 5}}>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                id="slidingGlassDoorPermitFee"
                                name="slidingGlassDoorPermitFee"
                                label="Permit Fee"
                                {...formik.getFieldProps('slidingGlassDoorPermitFee')}
                                error = {Boolean(formik.errors.slidingGlassDoorPermitFee) && Boolean(formik.touched.slidingGlassDoorPermitFee)}
                                // helperText = {Boolean(formik.touched.slidingGlassDoorPermitFee) && formik.errors.slidingGlassDoorPermitFee}
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Sliding Glass Door</div>
                        </div>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                id="slidingGlassDoorDeliveryFee"
                                name="slidingGlassDoorDeliveryFee"
                                label="Delivery Fee"
                                {...formik.getFieldProps('slidingGlassDoorDeliveryFee')}
                                error = {Boolean(formik.errors.slidingGlassDoorDeliveryFee) && Boolean(formik.touched.slidingGlassDoorDeliveryFee)}
                                // helperText = {Boolean(formik.touched.slidingGlassDoorDeliveryFee) && formik.errors.slidingGlassDoorDeliveryFee}
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Sliding Glass Door</div>
                        </div>
                    </Box>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '16px',
                        letterSpacing: '1.25px',
                        textTransform: 'uppercase',
                        color: '#000000',
                        mb: 3
                    }}>
                        Interior Doors Fees
                    </Typography>
                    <Box component="div" sx={{display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: matches?'end': 'start', width: '100%', mb: 5}}>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                id="interiorDoorPermitFee"
                                name="interiorDoorPermitFee"
                                label="Permit Fee"
                                {...formik.getFieldProps('interiorDoorPermitFee')}
                                error = {Boolean(formik.errors.interiorDoorPermitFee) && Boolean(formik.touched.interiorDoorPermitFee)}
                                // helperText = {Boolean(formik.touched.interiorDoorPermitFee) && formik.errors.interiorDoorPermitFee}
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Interior Door</div>
                        </div>
                        
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'end'}}>
                        <Button type="submit" variant="contained" disabled={!formik.dirty || !formik.isValid}>save</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    </div>
  )
}

export default SystemVariables