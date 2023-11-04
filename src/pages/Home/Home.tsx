import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero'
import { Navbar } from '../../components/Navbar/Navbar'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { JoinSection } from '../../components/JoinSection/JoinSection'
import { FacilitySection } from '../../components/FacilitySection/FacilitySection'
import { StorySection } from '../../components/StorySection/StorySection'
import { Wrapper, StyledBody } from './Home.styles'
import { MobileAppSection } from '../../components/MobileAppSection/MobileAppSection'
import { SocialButtonSection } from '../../components/SocialButtonSection/SocialButtonSection'

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
                <MobileAppSection />
                <SocialButtonSection />
                <Footer />
            </StyledBody>
        </Wrapper>
    )
}
