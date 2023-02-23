export const Button = ({ children, onButtonClick, disabled }) => {
    return (
        <button
            onClick={onButtonClick}
            style={{ display: "block", margin: "15px 0px", cursor: disabled ? "not-allowed" : "pointer" }}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
