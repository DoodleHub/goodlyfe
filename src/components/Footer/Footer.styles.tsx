import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 471px;
    width: 100%;
    padding: 0 165px;
    background-color: #0b0d17;
    color: #d9dbe1;

    a {
        text-decoration: none;
        color: #d9dbe1;
        font-size: 14px;
    }

    @media screen and (max-width: 1024px) {
        padding: 8px 16px;
    }
`

export const MainFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 68px 0;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 32px;
        width: 100%;
        padding: 30px 0;
    }
`

export const SubFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 16px;
        height: 100%;
    }
`

export const ShareColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 255px;

    @media screen and (max-width: 1024px) {
        width: 100%;
        align-items: center;
    }
`

export const LinksColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media screen and (max-width: 1024px) {
        width: 100%;
        align-items: center;
    }
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
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;

    a + a:before {
        content: ' | ';
        padding: 0 10px;
    }

    @media screen and (max-width: 1024px) {
        a {
            white-space: nowrap;
        }
    }
`

export const ContactLink = styled.div`
    display: flex;
    gap: 8px;
`
