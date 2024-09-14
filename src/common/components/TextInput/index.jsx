import React from 'react'
import StyledTextField from './TextInputRoot'

export default function TextInput({value, onChange, placeholder, startIcon, endIcon, onEndIconClick, ...rest}) {
  return (
    <StyledTextField
        {...rest}
        label={placeholder}
        fullWidth
        variant="outlined"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={{
            startAdornment: startIcon && (
                <InputAdornment position="start">
                    {startIcon}
                </InputAdornment>
            ),
            endAdornment: endIcon && (
                <InputAdornment position="end">
                    <IconButton onClick={onEndIconClick}>
                        {endIcon}
                    </IconButton>
                </InputAdornment>
            ),
            style:{color:"black"}
        }}

    />
  )
}
