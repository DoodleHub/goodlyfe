import styled from 'styled-components'

import { Footer } from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { Navbar } from '../components/Navbar/Navbar'
import { Section } from '../components/Section/Section'

const StyledBody = styled.div`
    margin-top: 101px;
`

export const Home = () => {
    return (
        <>
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
        </>
    )
}
