import className from 'classnames';

function Button({
                    children,
                    primary,
                    secondary,
                    success,
                    warning,
                    danger,
                    rounded,
                    outline,
                    ...rest
                }) {

    const classes = className('flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500': !outline && primary,
        'border-gray-900 bg-gray-900': !outline && secondary,
        'border-green-500 bg-green-500': !outline && success,
        'border-yellow-400 bg-yellow-400': !outline && warning,
        'border-red-500 bg-red-500': !outline && danger,
        'rounded-full': rounded,
        'text-white': !outline && (primary || secondary || success || danger),
        'text-yellow-800': !outline && warning,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-600': outline && warning,
        'text-red-500': outline && danger,
    }, rest.className);
    return(
        <button {...rest} className={classes}>{children}</button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger)
        ;

        if(count > 1) {
            return new Error(`Invalid props: Only one of primary, secondary, success, warning, or danger can be true`);
        }
    },
};

export default Button;