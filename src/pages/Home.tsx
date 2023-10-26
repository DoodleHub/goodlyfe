import styled from 'styled-components'

import { Footer } from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { Navbar } from '../components/Navbar/Navbar'
import { FaqSection } from '../components/FaqSection/FaqSection'
import { JoinSection } from '../components/JoinSection/JoinSection'
import { FacilitySection } from '../components/FacilitySection/FacilitySection'
import { StorySection } from '../components/StorySection/StorySection'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 101px;
    width: 1440px;
`

export const Home = () => {
    return (
        <Wrapper>
            <Navbar />
            <StyledBody>
                <Hero />
                <FaqSection />
                <JoinSection />
                <FacilitySection />
                <StorySection />
                <Footer />
            </StyledBody>
        </Wrapper>
    )
}
