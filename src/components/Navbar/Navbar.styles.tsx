import styled, { css } from 'styled-components'

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

    @media screen and (max-width: 1024px) {
        height: 50px;
        padding: 0 1rem;
    }
`

export const BrandLogo = styled.img`
    width: 187px;
    height: 44px;

    @media screen and (max-width: 1024px) {
        width: 93px;
        height: 22px;
    }
`

export const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-left: auto;

    li a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: lighter;
        white-space: nowrap;
    }

    li a:hover {
        color: #ffc1d8;
    }

    @media screen and (max-width: 1024px) {
        display: none;
        font-size: 0.5rem;
    }

    @media screen and (max-width: 1200px) {
        font-size: 0.75rem;
        gap: 2rem;
    }
`

export const BurgerContainer = styled.div`
    display: none;

    @media screen and (max-width: 1024px) {
        color: white;
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
`

export const MenuDropdown = styled.div<{ $show: boolean }>`
    ${({ $show }) =>
        $show
            ? css`
                  height: 265px;
              `
            : css`
                  height: 0;
              `}

    position: absolute;
    top: 50px;
    width: 100%;
    z-index: 99;
    transition: 0.5s;
    background-color: #e43071;
    padding: 0 12px;

    ul {
        overflow: hidden;
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: lighter;
        white-space: nowrap;

        &:hover {
            color: #ffc1d8;
        }
    }
`
