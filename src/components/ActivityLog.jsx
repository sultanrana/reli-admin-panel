import { Box } from "@mui/material";
import {
    ActivityLogBox,
    ActivityLogText,
    PostSearch,
    PostBox,
    PostSearchInput,
    PostSearchButton,
  } from "./styles/ActivityBox.styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addActivityLog, getActivityLogs } from "../features/activity-log/activityLogSlice";
import moment from "moment";
import { object } from "yup";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import Loading from "./Loading";


const ActivityLog = () => {
  const { list, isLoading, alert } = useSelector((store) => store.activityLog);
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(getActivityLogs(param.projectid));
  }, [dispatch, param.projectid]);

  const initialValues ={
    message: '',
  }

  if (isLoading) {
    return <Loading />;
  }


  return (
    <ActivityLogBox>
      <ActivityLogText>Activity log</ActivityLogText>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            my: 1,
            maxHeight: '400px',
            overflowY: 'auto'
          }}
        >
          {
            list.data?.map((activity) => {
              const { title, message, createdAt, _id } = activity;
                return (
                    <PostBox key={_id + 'activityLog'}>
                      <ActivityLogText
                        sx={{ fontWeight: "500", color: "rgba(0, 0, 0, 0.6)" }}
                      >
                        {title}
                      </ActivityLogText>
                      <ActivityLogText>{message}</ActivityLogText>
                      <ActivityLogText
                        sx={{
                          fontSize: "10px",
                          fontWeight: "500",
                          color: "rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        {moment(createdAt).format('hh:mm A DD/MM/YY')}
                      </ActivityLogText>
                    </PostBox>
                );
            })
          }
          <Formik
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => {
            values.title = 'Activity Log Title';
            values.type = 'project';
            values.order = param.projectid;
            const userData = JSON.parse(localStorage.getItem('userData'));
            values.user = userData.userData._id;
            dispatch(addActivityLog(values)).then(() => {
              dispatch(getActivityLogs(param.projectid));
            });
            // console.log('values: ', values);
          }}
          validationSchema={object({
            message: Yup.string().required(),
          })}
        >
          {({ errors, touched, isValid, dirty, values, setFieldValue }) => (
            <Form>
              <PostSearch>
                <Field as={PostSearchInput} 
                  placeholder="Add note here"
                  id="message"
                  name="message"
                  error = {Boolean(errors.message) && Boolean(touched.message)}
                  // helperText = {Boolean(touched.message) && errors.message}
                />
                <PostSearchButton type="submit" variant="contained">Post</PostSearchButton>
              </PostSearch>
            </Form>
            )}
        </Formik>
        </Box>
    </ActivityLogBox>
  )
}

export default ActivityLog