import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 700px;
    color: white;
`

export const JoinImage = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    filter: brightness(70%);
    z-index: -1;
`

export const ImageOverlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Header = styled.div`
    font-size: 60px;
    font-weight: 700;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 12px auto 16px auto;
`
