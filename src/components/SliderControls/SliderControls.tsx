import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    bottom: 29px;
    display: flex;
    gap: 8px;
`

const DotIndex = styled.div<{ $selected?: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ $selected }) => ($selected ? '#E43071' : 'white')};
`

export const SliderControls = () => {
    return (
        <Wrapper>
            <DotIndex />
            <DotIndex />
            <DotIndex $selected={true} />
            <DotIndex />
            <DotIndex />
        </Wrapper>
    )
}
