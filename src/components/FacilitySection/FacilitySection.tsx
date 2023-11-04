import { Button } from '../Button/Button'
import FirstImageSvg from '../../assets/images/facilityImage1.svg'
import SecondImageSvg from '../../assets/images/facilityImage2.svg'
import {
    FaqContainer,
    FirstImage,
    Header,
    ImageContainer,
    SecondImage,
    Wrapper,
} from './FacilitySection.styles'

export const FacilitySection = () => {
    return (
        <Wrapper>
            <FaqContainer>
                <Header>Premium Facilities</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eget lectus urna. Nulla magna tortor, bibendum in
                    molestie sed, gravida nec felis. Sed id egestasegestas
                    risus, ut imperdiet augue.
                </p>
                <Button appearance="secondary" size="md" onClick={() => {}}>
                    Learn more
                </Button>
            </FaqContainer>
            <ImageContainer>
                <FirstImage src={FirstImageSvg} />
                <SecondImage src={SecondImageSvg} />
            </ImageContainer>
        </Wrapper>
    )
}
