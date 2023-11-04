import FacebookLogo from '../../assets/images/facebookLogo.svg'
import YoutubeLogo from '../../assets/images/youtubeLogo.svg'
import InstagramLogo from '../../assets/images/instagramLogo.svg'
import { Wrapper, Header, ButtonGroup } from './SocialButtonSection.styles'

export const SocialButtonSection = () => {
    return (
        <Wrapper>
            <Header>Social</Header>
            <ButtonGroup>
                <a href="#">
                    <img src={FacebookLogo} />
                </a>
                <a href="#">
                    <img src={YoutubeLogo} />
                </a>
                <a href="#">
                    <img src={InstagramLogo} />
                </a>
            </ButtonGroup>
        </Wrapper>
    )
}
