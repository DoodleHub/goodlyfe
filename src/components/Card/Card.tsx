import styled from 'styled-components'

interface CardProps {
    height: number
    width: number
    header: string
    comment: string
    image: string
    name: string
    role: string
}

const Wrapper = styled.div<{ $height: number; $width: number }>`
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
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

const CardHeader = styled.div`
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
