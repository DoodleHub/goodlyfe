import Logo2 from '../../assets/images/logo2.svg'
import InstagramLogo from '../../assets/images/instagramLogoSmall.svg'
import DribbbleLogo from '../../assets/images/dribbbleLogoSmall.svg'
import TwitterLogo from '../../assets/images/twitterLogoSmall.svg'
import YoutubeLogo from '../../assets/images/youtubeLogoSmall.svg'
import MessageIcon from '../../assets/images/messageIcon.svg'
import PhoneIcon from '../../assets/images/phoneIcon.svg'
import LocationIcon from '../../assets/images/locationIcon.svg'
import {
    Wrapper,
    MainFooter,
    ShareColumn,
    IconContainer,
    LinksColumn,
    Header,
    ContactLink,
    SubFooter,
    TermsAndConditions,
} from './Footer.styles'

const QUICK_LINKS = [
    {
        label: 'Classes',
        url: '#',
    },
    {
        label: 'Timetable',
        url: '#',
    },
    {
        label: 'Clubs',
        url: '#',
    },
    {
        label: 'Nutrition',
        url: '#',
    },
    {
        label: 'Free Trial',
        url: '#',
    },
]

const GUIDES_LINKS = [
    {
        label: 'Weight Loss',
        url: '#',
    },
    {
        label: 'Strength Gain',
        url: '#',
    },
    {
        label: 'Crossfit',
        url: '#',
    },
    {
        label: 'Washboard Abs',
        url: '#',
    },
    {
        label: 'Dieting',
        url: '#',
    },
]

const CONTACT_LINKS = [
    {
        label: 'admin@goodlyfe.co',
        icon: MessageIcon,
        url: '#',
    },
    {
        label: '+88 98765 43210',
        icon: PhoneIcon,
        url: '#',
    },
    {
        label: '90210 Beverly Hills California USA',
        icon: LocationIcon,
        url: '#',
    },
]

const SUB_FOOTER_LINKS = [
    {
        label: 'Terms & Conditions',
        url: '#',
    },
    {
        label: 'Privacy Policy',
        url: '#',
    },
    {
        label: 'Sitemap',
        url: '#',
    },
    {
        label: 'Disclaimer',
        url: '#',
    },
]

export const Footer = () => {
    return (
        <Wrapper>
            <MainFooter>
                <ShareColumn>
                    <img src={Logo2} alt="logo" />
                    <span>
                        Lorem ipsum dolor amet, consectetur adipiscing elit.
                        Eget nisl nunc quam ac sed turpis volutpat. Cursus sed
                        massa non nisi, placerat.
                    </span>
                    <IconContainer>
                        <a href="#">
                            <img src={InstagramLogo} />
                        </a>
                        <a href="#">
                            <img src={DribbbleLogo} />
                        </a>
                        <a href="#">
                            <img src={TwitterLogo} />
                        </a>
                        <a href="#">
                            <img src={YoutubeLogo} />
                        </a>
                    </IconContainer>
                </ShareColumn>
                <LinksColumn>
                    <Header>Quick Links</Header>
                    {QUICK_LINKS.map((link) => (
                        <a href={link.url}>{link.label}</a>
                    ))}
                </LinksColumn>
                <LinksColumn>
                    <Header>Guides</Header>
                    {GUIDES_LINKS.map((link) => (
                        <a href={link.url}>{link.label}</a>
                    ))}
                </LinksColumn>
                <LinksColumn>
                    <Header>Reach Us</Header>
                    {CONTACT_LINKS.map((link) => (
                        <ContactLink>
                            <img src={link.icon} />
                            <a href={link.url}>{link.label}</a>
                        </ContactLink>
                    ))}
                </LinksColumn>
            </MainFooter>
            <SubFooter>
                <span>© 2023 GoodLyfe. All rights reserved</span>
                <TermsAndConditions>
                    {SUB_FOOTER_LINKS.map((link) => (
                        <a href={link.url}>{link.label}</a>
                    ))}
                </TermsAndConditions>
            </SubFooter>
        </Wrapper>
    )
}
