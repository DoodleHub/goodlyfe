import Phone1 from '../../assets/images/phone1.svg'
import Phone2 from '../../assets/images/phone2.svg'
import AppStoreButton from '../../assets/images/appStoreButton.svg'
import GooglePlayButton from '../../assets/images/googlePlayButton.svg'
import {
    Wrapper,
    LeftColumn,
    Header,
    DownloadContainer,
    RightColumn,
    PhoneContainer,
} from './MobileAppSection.styles'

export const MobileAppSection = () => {
    return (
        <Wrapper>
            <LeftColumn>
                <Header>Don't forget our app</Header>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eget lectus urna. Nulla magna tortor, bibendum in
                    molestie sed, gravida nec felis. Sed id egestasegestas
                    risus, ut imperdiet augue.
                </span>
                <span>Download now:</span>
                <DownloadContainer>
                    <a href="#">
                        <img src={GooglePlayButton} />
                    </a>
                    <a href="#">
                        <img src={AppStoreButton} />
                    </a>
                </DownloadContainer>
            </LeftColumn>
            <RightColumn>
                <PhoneContainer>
                    <img src={Phone1} alt="iphone 1" />
                    <img src={Phone2} alt="iphone 2" />
                </PhoneContainer>
            </RightColumn>
        </Wrapper>
    )
}
