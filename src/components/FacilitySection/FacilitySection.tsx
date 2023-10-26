import styled from 'styled-components'

import { Button } from '../Button/Button'
import FirstImageSvg from '../../assets/images/facilityImage1.svg'
import SecondImageSvg from '../../assets/images/facilityImage2.svg'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 520px;
    padding: 100px 120px;
`

const ImageContainer = styled.div`
    position: relative;
    margin-left: 100px;
    width: 50%;
`

const FirstImage = styled.img`
    width: 444px;
    height: 296px;
    object-fit: cover;
`

const SecondImage = styled.img`
    position: absolute;
    top: 30%;
    left: 30%;
    width: 422px;
    height: 281px;
    object-fit: cover;
    z-index: -1;
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
