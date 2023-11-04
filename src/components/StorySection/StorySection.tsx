import Customer1 from '../../assets/images/customer1.svg'
import Customer2 from '../../assets/images/customer2.svg'
import Customer3 from '../../assets/images/customer3.svg'
import { Card } from '../Card/Card'
import {
    Wrapper,
    LeftColumn,
    Header,
    CardContainer,
    RightColumn,
} from './StorySection.styles'

export const StorySection = () => {
    return (
        <Wrapper>
            <LeftColumn>
                <Header>Real Stories from Real Customers</Header>
                <p>Be inspired with these experiences.</p>
                <CardContainer>
                    <Card
                        height={445}
                        width={349}
                        header="3Kg lost!"
                        comment="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus eget lectus urna. Nulla magna tortor,
                            bibendum in molestie sed, gravida nec felis. Sed id
                            egestasegestas risu."
                        image={Customer1}
                        name="James John"
                        role="Father of two"
                    />
                </CardContainer>
            </LeftColumn>
            <RightColumn>
                <Card
                    height={343}
                    width={449}
                    header="17Kg lost!"
                    comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus eget lectus urna. Nulla magna tortor, bibendum
                        in mo."
                    image={Customer2}
                    name="Mary Patricia"
                    role="Mother of two"
                />
                <Card
                    height={278}
                    width={351}
                    header="43Kg lost!"
                    comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    image={Customer3}
                    name="Robert Micheal"
                    role="Father of two"
                />
            </RightColumn>
        </Wrapper>
    )
}
