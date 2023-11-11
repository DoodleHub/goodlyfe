import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 100px 200px;
    height: 820px;
    gap: 30px;
    background: linear-gradient(#ffffff, #f4e3e9);

    @media screen and (max-width: 1024px) {
        padding: 24px 12px;
        flex-direction: column;
        height: 100%;
    }
`

export const Header = styled.div`
    font-size: 48px;
    font-weight: 600;
    line-height: 57px;
`

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 1024px) {
        width: 100%;

        ${Header} {
            font-size: 24px;
            line-height: 30px;
        }
    }
`

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 56px;
    width: 50%;

    @media screen and (max-width: 1024px) {
        width: 100%;
        padding-top: 0;
    }
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
`
