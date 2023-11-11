import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 520px;
    padding: 100px 120px;

    @media screen and (max-width: 1024px) {
        padding: 24px 12px;
        height: 300px;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    margin-left: 100px;
    width: 50%;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const FirstImage = styled.img`
    width: 444px;
    height: 296px;
    object-fit: cover;
`

export const SecondImage = styled.img`
    position: absolute;
    top: 30%;
    left: 30%;
    width: 422px;
    height: 281px;
    object-fit: cover;
    z-index: -1;
`

export const Header = styled.div`
    font-size: 40px;
    color: #e43071;
    font-weight: 700;
`

export const FaqContainer = styled.div`
    margin-top: 100px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (max-width: 1024px) {
        width: 100%;
        align-items: center;
        margin-top: 0;

        ${Header} {
            font-size: 24px;
        }
    }
`
