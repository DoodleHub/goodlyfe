import styled from 'styled-components'

import HeroImage from '../../assets/images/hero.svg'
import { SliderControls } from '../SliderControls/SliderControls'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Hero = () => {
    return (
        <Wrapper>
            <img src={HeroImage} style={{ width: '100%' }} />
            <SliderControls />
        </Wrapper>
    )
}
