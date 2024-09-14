import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        height: '40px',
        '& fieldset': {
            borderColor: '#C6C6C6',
            borderWidth:'1px',
        },
        '&:hover fieldset': {
            borderColor: '#C6C6C6',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#C6C6C6',
            borderWidth:'1px',
        },
    },
})

export default StyledTextField;
