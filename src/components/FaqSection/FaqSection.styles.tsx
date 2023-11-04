import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 720px;
    padding: 100px 120px;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 50%;
`

export const FirstImage = styled.img`
    width: 347px;
    height: 399px;
    object-fit: cover;
`

export const SecondImage = styled.img`
    position: absolute;
    top: 25%;
    left: 35%;
    width: 241px;
    height: 359px;
    object-fit: cover;
    z-index: 1;
`

export const FaqContainer = styled.div`
    margin-top: 100px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Header = styled.div`
    font-size: 40px;
    color: #e43071;
    font-weight: 700;
`
