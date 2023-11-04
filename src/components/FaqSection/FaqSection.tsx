import { Button } from '../Button/Button'
import FirstImageSvg from '../../assets/images/hero2.svg'
import SecondImageSvg from '../../assets/images/faqImage.svg'
import {
    Wrapper,
    ImageContainer,
    FirstImage,
    SecondImage,
    FaqContainer,
    Header,
} from './FaqSection.styles'

export const FaqSection = () => {
    return (
        <Wrapper>
            <ImageContainer>
                <FirstImage src={FirstImageSvg} />
                <SecondImage src={SecondImageSvg} />
            </ImageContainer>
            <FaqContainer>
                <Header>Meet your new body</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eget lectus urna. Nulla magna tortor, bibendum in
                    molestie sed, gravida nec felis. Sed id egestasegestas
                    risus, ut imperdiet augue.
                </p>
                <Button appearance="secondary" size="md" onClick={() => {}}>
                    View the FAQ
                </Button>
            </FaqContainer>
        </Wrapper>
    )
}
