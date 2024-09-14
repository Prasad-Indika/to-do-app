import StyledButton from "./ButtonRoot";
import PropTypes from "prop-types";
function CommonButton({name ,color, onClick, variant, circular,disabled,...rest}){

    return(
        <>
            <StyledButton
                {...rest}
                onClick={onClick}
                circular={circular}
                variant={variant}
                color={color}
                disabled={disabled}
            >
                {name}
            </StyledButton>

        </>
    )
}

export default CommonButton;

CommonButton.defaultProps = {
    variant: "Fill",
    color:'#2D9DE5',
    circular: false,
};

CommonButton.propTypes = {
    name: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["Fill", "outline"]),
    circular:PropTypes.bool,
    onClick: PropTypes.func,
    color:PropTypes.string.isRequired,
}
