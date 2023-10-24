import styled, { css } from 'styled-components'

interface ButtonProps {
    children: React.ReactNode
    appearance: string
    size: string
    onClick: () => void
}

const StyledButton = styled.button<{ $appearance: string; $size: string }>`
    ${({ $appearance }) => {
        switch ($appearance) {
            case 'primary':
                return css`
                    color: #f7f7fc;
                    background-color: #e43071;

                    &:hover {
                        background-color: #be285e;
                    }
                `
            case 'secondary':
                return css`
                    color: #e43071;
                    background-color: #f7f7fc;

                    &:hover {
                        color: #be285e;
                    }
                `
        }
    }}

    ${({ $size }) => {
        switch ($size) {
            case 'sm':
                return css`
                    width: 166px;
                    height: 50px;
                `
            case 'md':
                return css`
                    width: 237px;
                    height: 68px;
                `
        }
    }}

    border-radius: 200px;
    border: 1px solid #e43071;

    &:hover {
        cursor: pointer;
        border: 1px solid #be285e;
    }
`

export const Button = ({
    children,
    appearance,
    size,
    onClick,
}: ButtonProps) => {
    return (
        <StyledButton $appearance={appearance} $size={size} onClick={onClick}>
            {children}
        </StyledButton>
    )
}
