import { HiOutlineSearch } from 'react-icons/hi'
import { RxHamburgerMenu } from 'react-icons/rx'

import Logo from '../../assets/images/logo.svg'
import { Button } from '../Button/Button'
import {
    Wrapper,
    NavLinks,
    BrandLogo,
    BurgerContainer,
    MenuDropdown,
} from './Navbar.styles'
import { useState } from 'react'

export const Navbar = () => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false)

    return (
        <>
            <Wrapper>
                <a href="#">
                    <BrandLogo src={Logo} alt="logo" />
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
                    <Button appearance="secondary" size="sm" onClick={() => {}}>
                        Login
                    </Button>
                </NavLinks>
                <BurgerContainer>
                    <RxHamburgerMenu
                        onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                    />
                </BurgerContainer>
            </Wrapper>
            <MenuDropdown $show={showBurgerMenu}>
                <ul>
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
                </ul>
            </MenuDropdown>
        </>
    )
}
