import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    bottom: 29px;
    display: flex;
    gap: 8px;
`

export const Dot = styled.div<{ $selected?: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ $selected }) => ($selected ? '#E43071' : 'white')};
`
