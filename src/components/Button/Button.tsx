import { StyledButton } from './Button.styles'

interface ButtonProps {
    children: React.ReactNode
    appearance: string
    size: string
    onClick: () => void
}

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
