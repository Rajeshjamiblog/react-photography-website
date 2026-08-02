import "./Button.css";

function Button({
    children,
    variant = "primary",
    onClick,
    type = "button",
    disabled = false,
    ...props
}) {

    return (
        <button
            className={`button button--${variant}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;