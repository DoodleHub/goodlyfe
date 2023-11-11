import styled from 'styled-components'

export const Header = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: #e43071;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    height: 323px;
    width: 100%;
    background-color: #ededed;

    @media screen and (max-width: 1024px) {
        height: 100%;
        padding: 24px 12px;
        gap: 8px;

        ${Header} {
            font-size: 24px;
        }
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    gap: 92px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
        border-radius: 50%;
        background-color: white;
        height: 110px;
        width: 110px;

        img {
            height: 30px;
            width: 15px;
        }
    }

    @media screen and (max-width: 1024px) {
        gap: 16px;

        a {
            padding: 20px;
            height: 55px;
            width: 55px;

            img {
                height: 20px;
                width: 10px;
            }
        }
    }
`
