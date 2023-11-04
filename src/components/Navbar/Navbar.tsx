import { HiOutlineSearch } from 'react-icons/hi'

import Logo from '../../assets/images/logo.svg'
import { Button } from '../Button/Button'
import { Wrapper, NavLinks } from './Navbar.styles'

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
