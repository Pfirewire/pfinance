import className from 'classnames';
import styled from "styled-components";

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

    return(
        <ButtonWrapper {...rest} >{children}</ButtonWrapper>
    );
}

export default Button;

const ButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    border: 1px solid;

    ${({ primary, secondary, success, warning, danger, outline }) => css`
        ${!outline && primary && css`
            border-color: #3b82f6;
            background-color: #3b82f6;
            color: #fff;
        `}
        ${!outline && secondary && css`
            border-color: #1f2937;
            background-color: #1f2937;
            color: #fff;
        `}
        ${!outline && success && css`
            border-color: #10b981;
            background-color: #10b981;
            color: #fff;
        `}
        ${!outline && warning && css`
            border-color: #f59e0b;
            background-color: #f59e0b;
            color: #fff;
        `}
        ${!outline && danger && css`
            border-color: #ef4444;
            background-color: #ef4444;
            color: #fff;
        `}
        ${outline && primary && css`
            border-color: #3b82f6;
            color: #3b82f6;
        `}
        ${outline && secondary && css`
            border-color: #1f2937;
            color: #1f2937;
        `}
        ${outline && success && css`
            border-color: #10b981;
            color: #10b981;
        `}
        ${outline && warning && css`
            border-color: #f59e0b;
            color: #f59e0b;
        `}
        ${outline && danger && css`
            border-color: #ef4444;
            color: #ef4444;
        `}
        ${rounded && css`
            border-radius: 9999px;
        `}
        ${outline && css`
            background-color: #fff;
        `}
    `}
`;