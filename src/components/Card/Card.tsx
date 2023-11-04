import { CardHeader, Profile, ProfileDesc, Wrapper } from './Card.styles'

interface CardProps {
    height: number
    width: number
    header: string
    comment: string
    image: string
    name: string
    role: string
}

export const Card = ({
    height,
    width,
    header,
    comment,
    image,
    name,
    role,
}: CardProps) => {
    return (
        <Wrapper $height={height} $width={width}>
            <CardHeader>{header}</CardHeader>
            <span>{comment}</span>
            <Profile>
                <img src={image} />
                <ProfileDesc>
                    <span style={{ fontSize: 18 }}>{name}</span>
                    <span style={{ fontSize: 14, color: '#424242' }}>
                        {role}
                    </span>
                </ProfileDesc>
            </Profile>
        </Wrapper>
    )
}
