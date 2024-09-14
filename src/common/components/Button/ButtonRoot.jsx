import { styled } from '@mui/material';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({circular,variant,color})=>{

    const containedStyle = {
        padding: circular === true ? '9px 15px' : '9px 9px',
        backgroundColor: color,
        color:'white',
        textTransform: 'none',
        fontWeight: 'normal',
        fontSize: 13,

        '&:hover': {
            backgroundColor: color,
            color:'white',
        },
        '&:active': {
            backgroundColor: color,
            color:'white',
        },

    }

    const outlineStyle = {
        padding: circular === true ? '9px 15px' : '9px 9px',
        backgroundColor: 'white',
        color:'#2D9DE5',
        border: '1px solid',
        borderColor: '#2D9DE5',
        textTransform: 'none',
        fontWeight: 'normal',
        fontSize: 13,

        '&:hover': {
            backgroundColor: 'white',
            color:'#2D9DE5',
            border: '1px solid',
            borderColor: '#2D9DE5',
        },
        '&:active': {
            backgroundColor: 'white',
            color:'#2D9DE5',
            border: '1px solid',
            borderColor: '#2D9DE5',
        },

    }

    const circularStyle = {
        borderRadius: "15px",
    }

    return {
        ...(variant === "Fill" && containedStyle),
        ...(variant === "outline" && outlineStyle),
        ...(circular && circularStyle),

    }
});

export default StyledButton;
