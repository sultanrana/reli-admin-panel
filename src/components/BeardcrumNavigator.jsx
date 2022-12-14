import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function BeardcrumNavigator(props) {
const {breadcrumbs} = props;
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="large" sx={{color: '#000000', textTransform: 'capitalize'}}/>} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
