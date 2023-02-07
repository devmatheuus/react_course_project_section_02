import './styles.css';

import P from 'prop-types';

export const Button = ({ text, onClick, disabled = false }) => {
    return (
        <button className="button" onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    disabled: false,
};

Button.propTypes = {
    text: P.string.isRequired,
    onClick: P.func.isRequired,
    disabled: P.bool,
};
