import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 101px;
    max-width: 1440px;
    height: 100%;

    @media screen and (max-width: 1440px) {
        width: 100%;
        margin-top: 50px;
    }
`
