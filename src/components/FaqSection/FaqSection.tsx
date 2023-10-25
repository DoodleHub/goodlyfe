import styled from 'styled-components'

import { Button } from '../Button/Button'
import FirstImageSvg from '../../assets/images/hero2.svg'
import SecondImageSvg from '../../assets/images/faqImage.svg'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 720px;
    padding: 100px 120px;
`

const ImageContainer = styled.div`
    position: relative;
    width: 50%;
`

const FirstImage = styled.img`
    width: 347px;
    height: 399px;
    object-fit: cover;
`

const SecondImage = styled.img`
    position: absolute;
    top: 25%;
    left: 35%;
    width: 241px;
    height: 359px;
    object-fit: cover;
    z-index: 1;
`

const FaqContainer = styled.div`
    margin-top: 100px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Header = styled.div`
    font-size: 40px;
    color: #e43071;
    font-weight: 700;
`

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
