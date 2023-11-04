import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 471px;
    width: 100%;
    padding: 0 165px;
    background-color: #0b0d17;
    color: #d9dbe1;

    a {
        text-decoration: none;
        color: #d9dbe1;
        font-size: 14px;
    }
`

export const MainFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 68px 0;
`

export const SubFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
`

export const ShareColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 255px;
`

export const LinksColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Header = styled.div`
    font-size: 20px;
    font-weight: 500;
`

export const IconContainer = styled.div`
    display: flex;
    gap: 16px;
`

export const TermsAndConditions = styled.div`
    display: flex;
    gap: 8px;

    a + a:before {
        content: ' | ';
        padding: 0 10px;
    }
`

export const ContactLink = styled.div`
    display: flex;
    gap: 8px;
`
