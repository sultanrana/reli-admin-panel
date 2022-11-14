import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButton } from '@mui/material';
const TableActions = () => {
  return (
    <div style={{ 
        display: 'flex',
        gap: '10px'
    }}>
        <IconButton>
            <DeleteRoundedIcon/>
        </IconButton>
        <IconButton>
            <ModeRoundedIcon/>
        </IconButton>
    </div>
  )
}

export default TableActions