import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    height: 323px;
    width: 100%;
    background-color: #ededed;
`

export const Header = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: #e43071;
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
`
