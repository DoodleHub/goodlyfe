import styled from 'styled-components'

import { Footer } from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { Navbar } from '../components/Navbar/Navbar'
import { Section } from '../components/Section/Section'

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
                <Section />
                <Section />
                <Section />
                <Section />
                <Section />
                <Section />
                <Footer />
            </StyledBody>
        </Wrapper>
    )
}
