import styled from 'styled-components'

import JoinImageSvg from '../../assets/images/joinImage.svg'
import { Button } from '../Button/Button'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 700px;
    color: white;
`

const JoinImage = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    filter: brightness(70%);
    z-index: -1;
`

const ImageOverlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Header = styled.div`
    font-size: 60px;
    font-weight: 700;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 12px auto 16px auto;
`

export const JoinSection = () => {
    return (
        <Wrapper>
            <JoinImage src={JoinImageSvg} />
            <ImageOverlay>
                <Header>Become more than you are.</Header>
                <Description>
                    <span>
                        Staying active is great fun and keeps you healthy.
                    </span>
                    <span>Check out how you can join in.</span>
                </Description>
                <Button appearance="primary" size="md" onClick={() => {}}>
                    Let's do it!
                </Button>
            </ImageOverlay>
        </Wrapper>
    )
}
