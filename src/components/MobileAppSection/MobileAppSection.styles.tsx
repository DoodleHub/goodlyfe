import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    height: 491px;
    width: 100%;
    background-color: #e43071;
    padding: 0 180px;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        height: 100%;
        padding: 24px 12px;
    }
`

export const Header = styled.div`
    font-size: 40px;
    font-weight: 700;
`

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 50%;
    color: white;

    @media screen and (max-width: 1024px) {
        width: 100%;

        ${Header} {
            font-size: 24px;
        }
    }
`

export const RightColumn = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    position: relative;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const PhoneContainer = styled.div`
    display: flex;
    position: absolute;
    top: -32px;
    left: 0;

    img {
        width: 100%;
    }
`

export const DownloadContainer = styled.div`
    display: flex;
    gap: 16px;
`
