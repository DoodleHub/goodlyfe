import styled from 'styled-components'
import { HiOutlineSearch } from 'react-icons/hi'

import Logo from '../../assets/images/logo.svg'
import { Button } from '../Button/Button'

const Wrapper = styled.div`
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

const NavLinks = styled.ul`
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

export const Navbar = () => {
    return (
        <Wrapper>
            <a href="#">
                <img src={Logo} alt="logo" width={187} height={44} />
            </a>
            <NavLinks>
                <li>
                    <a href="#">Classes</a>
                </li>
                <li>
                    <a href="#">Timetable</a>
                </li>
                <li>
                    <a href="#">Clubs</a>
                </li>
                <li>
                    <a href="#">Nutrition</a>
                </li>
                <li>
                    <a href="#">Free Trial</a>
                </li>
                <li>
                    <a href="#">
                        Search{' '}
                        <HiOutlineSearch
                            size={24}
                            style={{ transform: 'scaleX(-1)' }}
                        />
                    </a>
                </li>
            </NavLinks>
            <Button appearance="secondary" size="sm" onClick={() => {}}>
                Login
            </Button>
        </Wrapper>
    )
}
