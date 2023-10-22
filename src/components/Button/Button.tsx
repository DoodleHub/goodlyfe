import styled, { css } from 'styled-components'

interface ButtonProps {
    children: React.ReactNode
    appearance: string
}

const StyledButton = styled.button<{ $appearance: string }>`
    ${({ $appearance }) => {
        switch ($appearance) {
            case 'initial':
                return css`
                    color: #f7f7fc;
                    background-color: #e43071;
                `
            case 'secondary':
                return css`
                    color: #e43071;
                    background-color: #f7f7fc;
                `
        }
    }}

    width: 166px;
    height: 50px;
    border-radius: 200px;
    border: 1px solid #e43071;

    &:hover {
        cursor: pointer;
        color: #be285e;
        border: 1px solid #be285e;
    }
`

export const Button = ({ children, appearance }: ButtonProps) => {
    return <StyledButton $appearance={appearance}>{children}</StyledButton>
}
