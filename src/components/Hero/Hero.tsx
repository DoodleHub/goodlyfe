import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { SliderControls } from '../SliderControls/SliderControls'

import HeroImage1 from '../../assets/images/hero1.svg'
import HeroImage2 from '../../assets/images/hero2.svg'
import HeroImage3 from '../../assets/images/hero3.svg'
import HeroImage4 from '../../assets/images/hero4.svg'
import HeroImage5 from '../../assets/images/hero5.svg'

const HERO_IMAGES = [
    {
        id: 1,
        alt: 'hero image 1',
        image: HeroImage1,
    },
    {
        id: 2,
        alt: 'hero image 2',
        image: HeroImage2,
    },
    {
        id: 3,
        alt: 'hero image 3',
        image: HeroImage3,
    },
    {
        id: 4,
        alt: 'hero image 4',
        image: HeroImage4,
    },
    {
        id: 5,
        alt: 'hero image 5',
        image: HeroImage5,
    },
]

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 691px;
    width: 100%;
`

const StyledImage = styled.img<{ $show: boolean }>`
    object-fit: cover;
    overflow: hidden;
    animation-name: fade;
    animation-duration: 1.5s;
    width: 100%;
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

export const Hero = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <Wrapper>
            {[...Array(5).keys()].map((index) => (
                <StyledImage
                    key={index}
                    src={HERO_IMAGES[index].image}
                    $show={selectedIndex === index}
                />
            ))}
            <SliderControls
                selectedIndex={selectedIndex}
                updateIndex={setSelectedIndex}
            />
        </Wrapper>
    )
}
