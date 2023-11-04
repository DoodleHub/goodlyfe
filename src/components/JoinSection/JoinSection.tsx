import JoinImageSvg from '../../assets/images/joinImage.svg'
import { Button } from '../Button/Button'
import {
    Wrapper,
    JoinImage,
    ImageOverlay,
    Header,
    Description,
} from './JoinSection.styles'

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
