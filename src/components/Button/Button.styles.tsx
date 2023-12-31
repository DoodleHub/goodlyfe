import styled, { css } from 'styled-components'

export const StyledButton = styled.button<{
    $appearance: string
    $size: string
}>`
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
                    background-color: white;

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

                    @media screen and (max-width: 1024px) {
                        width: 100px;
                        height: 30px;
                    }

                    @media screen and (max-width: 1200px) {
                        width: 130px;
                        height: 40px;
                    }
                `
            case 'md':
                return css`
                    width: 237px;
                    height: 68px;

                    @media screen and (max-width: 1200px) {
                        width: 130px;
                        height: 40px;
                    }
                `
        }
    }}

    border-radius: 200px;
    border: 2px solid #e43071;

    &:hover {
        cursor: pointer;
        border: 2px solid #be285e;
    }

    @media screen and (max-width: 1200px) {
        font-size: 0.8rem;
    }
`
