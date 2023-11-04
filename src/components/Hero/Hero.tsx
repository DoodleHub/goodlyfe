import { useEffect, useState } from 'react'

import { SliderControls } from '../SliderControls/SliderControls'

import HeroImage1 from '../../assets/images/hero1.svg'
import HeroImage2 from '../../assets/images/hero2.svg'
import HeroImage3 from '../../assets/images/hero3.svg'
import HeroImage4 from '../../assets/images/hero4.svg'
import HeroImage5 from '../../assets/images/hero5.svg'
import { Button } from '../Button/Button'
import {
    ImageOverlayContainer,
    HeroText,
    Wrapper,
    StyledImage,
} from './Hero.styles'

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

const ImageOverlay = () => (
    <ImageOverlayContainer>
        <HeroText>
            Welcome to Good<span style={{ color: '#FFC1D8' }}>lyfe</span> Gyms
        </HeroText>
        <Button appearance="primary" size="md" onClick={() => {}}>
            See the benefits
        </Button>
    </ImageOverlayContainer>
)

export const Hero = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const updateSlide = () => {
        setSelectedIndex((selectedIndex) => (selectedIndex + 1) % 5)
    }

    useEffect(() => {
        const updateSlideInternal = setInterval(updateSlide, 3500)

        return () => clearInterval(updateSlideInternal)
    }, [])

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
            <ImageOverlay />
        </Wrapper>
    )
}
