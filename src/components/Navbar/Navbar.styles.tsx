import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 101px;
    padding: 0 2rem;
    background-color: #e43071;
    z-index: 99;
`

export const NavLinks = styled.ul`
    display: flex;
    gap: 4rem;
    margin: 0 4rem 0 auto;

    li a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: lighter;
    }

    li a:hover {
        color: #ffc1d8;
    }
`
