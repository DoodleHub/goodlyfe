import styled from 'styled-components'

import Customer1 from '../../assets/images/customer1.svg'
import Customer2 from '../../assets/images/customer2.svg'
import Customer3 from '../../assets/images/customer3.svg'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 100px 200px;
    height: 820px;
    gap: 30px;
    background: linear-gradient(#ffffff, #f4e3e9);
`

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 56px;
    width: 50%;
`

const Header = styled.div`
    font-size: 48px;
    font-weight: 600;
    line-height: 57px;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
`

const Card1 = styled.div`
    width: 349px;
    height: 445px;
    padding: 35px;
    display: flex;
    gap: 32px;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 4px 8px 0px rgba(0, 0, 0, 0.18);
    line-height: 32px;
`

const Card2 = styled.div`
    width: 449px;
    height: 343px;
    padding: 35px;
    display: flex;
    gap: 32px;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 4px 8px 0px rgba(0, 0, 0, 0.18);
    line-height: 32px;
`

const Card3 = styled.div`
    width: 351px;
    height: 278px;
    padding: 35px;
    display: flex;
    gap: 32px;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 4px 8px 0px rgba(0, 0, 0, 0.18);
    line-height: 32px;
`

const Card1Header = styled.div`
    font-size: 38px;
    font-weight: 600;
    color: #e43071;
`

const Profile = styled.div`
    display: flex;

    img {
        margin-right: 14px;
    }
`

const ProfileDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    line-height: 24px;
`

export const StorySection = () => {
    return (
        <Wrapper>
            <LeftColumn>
                <Header>Real Stories from Real Customers</Header>
                <p>Be inspired with these experiences.</p>
                <CardContainer>
                    <Card1>
                        <Card1Header>3Kg lost!</Card1Header>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus eget lectus urna. Nulla magna tortor,
                            bibendum in molestie sed, gravida nec felis. Sed id
                            egestasegestas risu.
                        </span>
                        <Profile>
                            <img src={Customer1} />
                            <ProfileDesc>
                                <span style={{ fontSize: 18 }}>James John</span>
                                <span
                                    style={{ fontSize: 14, color: '#424242' }}
                                >
                                    Father of two
                                </span>
                            </ProfileDesc>
                        </Profile>
                    </Card1>
                </CardContainer>
            </LeftColumn>
            <RightColumn>
                <Card2>
                    <Card1Header>17Kg lost!</Card1Header>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus eget lectus urna. Nulla magna tortor, bibendum
                        in mo.
                    </span>
                    <Profile>
                        <img src={Customer2} />
                        <ProfileDesc>
                            <span style={{ fontSize: 18 }}>Mary Patricia</span>
                            <span style={{ fontSize: 14, color: '#424242' }}>
                                Mother of two
                            </span>
                        </ProfileDesc>
                    </Profile>
                </Card2>
                <Card3>
                    <Card1Header>43Kg lost!</Card1Header>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <Profile>
                        <img src={Customer3} />
                        <ProfileDesc>
                            <span style={{ fontSize: 18 }}>Robert Micheal</span>
                            <span style={{ fontSize: 14, color: '#424242' }}>
                                Father of two
                            </span>
                        </ProfileDesc>
                    </Profile>
                </Card3>
            </RightColumn>
        </Wrapper>
    )
}
