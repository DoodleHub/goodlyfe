import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 691px;
    width: 100%;
    font-size: 70px;
    font-weight: 700;
    line-height: 77px;

    @media screen and (max-width: 1024px) {
        font-size: 2.5rem;
        height: 400px;
        line-height: 55px;
    }
`

export const StyledImage = styled.img<{ $show: boolean }>`
    object-fit: cover;
    overflow: hidden;
    animation-name: fade;
    animation-duration: 1.5s;
    width: 100%;
    filter: brightness(70%);
    ${({ $show }) => !$show && 'display: none;'}

    @keyframes fade {
        from {
            opacity: 0.7;
        }
        to {
            opacity: 1;
        }
    }
`

export const ImageOverlayContainer = styled.div`
    position: absolute;
    top: 35%;
    display: flex;
    gap: 36px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 1024px) {
        top: 20%;
    }
`

export const HeroText = styled.span`
    color: white;
`
