import styled from 'styled-components'

export const Wrapper = styled.div<{ $height: number; $width: number }>`
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

export const CardHeader = styled.div`
    font-size: 38px;
    font-weight: 600;
    color: #e43071;
`

export const Profile = styled.div`
    display: flex;

    img {
        margin-right: 14px;
    }
`

export const ProfileDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    line-height: 24px;
`
